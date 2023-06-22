import { CreateBusinessDayDto } from '../dtos/createBusinessDay.dto';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

interface CreateBusinessDayParams {
	D1: D1Database;
	createBusinessDayDto: CreateBusinessDayDto;
}

async function createBusinessDay({ D1, createBusinessDayDto }: CreateBusinessDayParams) {
	const id = uuidv4();
	const { leaveAt, nickname } = createBusinessDayDto;

	await D1.prepare('INSERT INTO BusinessDays(_id, nickname, leaveAt, createdAt) VALUES(?,?,?,?)')
		.bind(id, nickname, format(leaveAt, 'yyyy-MM-dd'), format(new Date(), 'yyyy-MM-dd'))
		.run();

	const raw = await D1.prepare('SELECT * FROM BusinessDays WHERE _id = ?').bind(id).first();
	return raw;
}

export default createBusinessDay;
