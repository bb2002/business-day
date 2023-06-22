import { Transform } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateBusinessDayDto {
	@IsString()
	nickname: string;

	@IsDate()
	@Transform(({ value }) => new Date(value))
	leaveAt: Date;
}
