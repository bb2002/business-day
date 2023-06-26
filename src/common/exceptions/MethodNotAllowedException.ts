import { HttpException } from "./HttpException";

export class MethodNotAllowedException extends HttpException {
	constructor() {
		super('Method Not Allowed', 405);
	}
}