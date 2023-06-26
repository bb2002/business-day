export class HttpException extends Error {
	constructor(message: string, statusCode: number) {
		super()
	}
}