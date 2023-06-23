import { GetBusinessDayDto } from '../dtos/getBusinessDay.dto';
import getBusinessDay from './getBusinessDay';

interface GetAllBusinessDaysParams {
	D1: D1Database;
}

async function getAllBusinessDays({ D1 }: GetAllBusinessDaysParams): Promise<(GetBusinessDayDto | null)[]> {
	const { results } = await D1.prepare('SELECT * FROM BusinessDays').all();
	if (results === undefined) {
		throw new Error('Failed to get business days');
	}

	const allBusinessDays = await Promise.all(results?.map((result) => getBusinessDay({ D1, businessDayCached: result })));
	return allBusinessDays.filter((businessDay) => !!businessDay);
}

export default getAllBusinessDays;
