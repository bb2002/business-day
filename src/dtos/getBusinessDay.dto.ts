import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class GetBusinessDayDto {
	@IsString()
	_id: string;

	@IsString()
	nickname: string;

	@IsNumber()
	businessDay: number;

	@IsDate()
	@Transform(({ value }) => new Date(value))
	leaveAt: Date;

	@IsDate()
	@Transform(({ value }) => new Date(value))
	createdAt: Date;
}
