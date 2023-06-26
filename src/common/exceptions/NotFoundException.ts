import { HttpException } from "./HttpException";

export class NotFoundException extends HttpException {
	constructor() {
		super('Page not found', 404);
	}
}