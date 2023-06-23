import { plainToInstance } from 'class-transformer';
import { addDays, endOfDay, format, isWeekend } from 'date-fns';
import { GetBusinessDayDto } from '../dtos/getBusinessDay.dto';

interface GetBusinessDayParams {
	D1: D1Database;
	_id?: string;
	businessDayCached?: any;
}

interface Holiday {
	holidayDate: string;
	holidayName: string;
}

function countWeekdays(startDate: Date, endDate: Date, holidays: Holiday[]) {
	let count = 0;
	let currentDate = startDate;

	while (currentDate <= endOfDay(endDate)) {
		const currentDateStr = format(currentDate, 'yyyy-MM-dd');
		const holiday = holidays.find((holiday) => holiday.holidayDate === currentDateStr);

		if (!holiday && !isWeekend(currentDate)) {
			++count;
		}

		currentDate = addDays(currentDate, 1);
	}

	return count;
}

async function getBusinessDay({ D1, _id, businessDayCached }: GetBusinessDayParams): Promise<GetBusinessDayDto | null> {
	let businessDay: any = null;
	if (businessDayCached) {
		businessDay = businessDayCached;
	} else {
		businessDay = await D1.prepare('SELECT * FROM BusinessDays WHERE _id = ?').bind(_id).first();
	}

	if (!businessDay) {
		return null;
	}
	const leaveDate = new Date(businessDay.leaveAt);
	const now = new Date();

	const { results } = await D1.prepare('SELECT * FROM Holidays').all();
	if (!results) {
		throw new Error('Cant found holidays');
	}
	const holidays = results as Holiday[];

	// 남은 영업일 카운트
	const businessDayCount = countWeekdays(now, leaveDate, holidays);

	return plainToInstance(GetBusinessDayDto, {
		...businessDay,
		businessDayCount,
	});
}

export default getBusinessDay;
