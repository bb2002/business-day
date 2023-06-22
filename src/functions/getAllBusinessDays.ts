import { plainToInstance } from 'class-transformer';
import { BusinessDayDto } from '../dtos/createBusinessDay.dto';
import { GetBusinessDayDto } from '../dtos/getBusinessDay.dto';

interface GetAllBusinessDayParams {
	D1: D1Database;
}

async function getAllBusinessDays({ D1 }: GetAllBusinessDayParams): Promise<GetBusinessDayDto[]> {
	const { results } = await D1.prepare('SELECT * FROM BusinessDays LIMIT 100').all();

	return [];
}

export default getAllBusinessDays;
