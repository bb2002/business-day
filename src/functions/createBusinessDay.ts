import { CreateBusinessDayDto } from '../dtos/createBusinessDay.dto';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import getBusinessDay from './getBusinessDay';
import { GetBusinessDayDto } from '../dtos/getBusinessDay.dto';

interface CreateBusinessDayParams {
	D1: D1Database;
	createBusinessDayDto: CreateBusinessDayDto;
}

async function createBusinessDay({ D1, createBusinessDayDto }: CreateBusinessDayParams): Promise<GetBusinessDayDto | null> {
	const id = uuidv4();
	const { leaveAt, nickname } = createBusinessDayDto;

	const businessDay = await D1.prepare('SELECT * FROM BusinessDays WHERE nickname = ?').bind(nickname).first();
	if (businessDay) {
		throw new Error('Nickname already exists');
	}

	await D1.prepare('INSERT INTO BusinessDays(_id, nickname, leaveAt, createdAt) VALUES(?,?,?,?)')
		.bind(id, nickname, format(leaveAt, 'yyyy-MM-dd'), format(new Date(), 'yyyy-MM-dd'))
		.run();

	return getBusinessDay({ D1, _id: id });
}

export default createBusinessDay;
