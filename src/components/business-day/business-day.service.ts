import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { addDays, endOfDay, format, isWeekend } from 'date-fns';
import { error } from 'itty-router';
import 'reflect-metadata';
import { Service } from 'typedi';
import { v4 as uuidv4 } from 'uuid';
import { IService } from '../../common/interfaces/IService';
import { BusinessDay } from '../../common/types/BusinessDay';
import { Holiday } from '../../common/types/Holiday';
import { CreateBusinessDayDto } from './dtos/createBusinessDay.dto';
import { GetBusinessDayDto } from './dtos/getBusinessDay.dto';

interface GetBusinessDayParams {
	_id?: string;
	businessDay?: BusinessDay;
}

@Service()
export class BusinessDayService extends IService {
	getAllBusinessDays = async () => {
		const { D1 } = this.env;
		const { results } = await D1.prepare('SELECT * FROM BusinessDays').all();
		if (!results) {
			throw new Error('Failed to get business days');
		}

		const businessDays = results as BusinessDay[];
		return Promise.all(businessDays.map((businessDay) => this.getBusinessDay({ businessDay })));
	};

	getBusinessDay = async ({ _id, businessDay }: GetBusinessDayParams) => {
		const { D1 } = this.env;
		let day: BusinessDay;
		if (businessDay) {
			day = businessDay;
		} else {
			day = await D1.prepare('SELECT * FROM BusinessDays WHERE _id = ?').bind(_id).first();
		}

		if (!day) {
			throw new Error('BusinessDay not found');
		}

		const leaveAt = new Date(day.leaveAt);
		const now = new Date();

		return plainToInstance(GetBusinessDayDto, {
			...businessDay,
			businessDayCount: await this.countWeekDays(now, leaveAt),
		});
	};

	createBusinessDay = async (params: Request) => {
		const body = await params.json();
		const createBusinessDayDto = plainToInstance(CreateBusinessDayDto, body);
		const errors = await validate(createBusinessDayDto);
		if (errors.length > 0) {
			return error(400, 'Bad requests');
		}

		const { D1 } = this.env;
		const id = uuidv4();

		const isNicknameExists = !!(await D1.prepare('SELECT * FROM BusinessDays WHERE nickname = ?')
			.bind(createBusinessDayDto.nickname)
			.first());
		if (isNicknameExists) {
			return error(400, 'Nickname already exists');
		}

		await D1.prepare('INSERT INTO BusinessDays(_id, nickname, leaveAt, createdAt) VALUES(?,?,?,?)')
			.bind(id, createBusinessDayDto.nickname, format(createBusinessDayDto.leaveAt, 'yyyy-MM-dd'), format(new Date(), 'yyyy-MM-dd'))
			.run();

		return this.getBusinessDay({ _id: id });
	};

	private getHolidays = async () => {
		const { D1 } = this.env;
		const { results } = await D1.prepare('SELECT * FROM Holidays').all();
		if (!results) {
			throw new Error('Can not get holidays');
		}

		return results as Holiday[];
	};

	private countWeekDays = async (startDate: Date, endDate: Date) => {
		let count = 0;
		let currentDate = startDate;
		const holidays = await this.getHolidays();

		while (currentDate <= endOfDay(endDate)) {
			const currentDateStr = format(currentDate, 'yyyy-MM-dd');
			const holiday = holidays.find((holiday) => holiday.holidayDate === currentDateStr);

			if (!holiday && !isWeekend(currentDate)) {
				++count;
			}

			currentDate = addDays(currentDate, 1);
		}

		return count;
	};
}
