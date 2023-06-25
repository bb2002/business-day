import { Service } from "typedi";
import { FetchParams, IController } from "../common/IController";
import UrlPattern from "url-pattern";

@Service()
export class BusinessDayService implements IController {
	constructor() {
		
	}

	fetch({ request, env }: FetchParams) {
		const pattern = new UrlPattern(request.url);
		pattern.match('/business')
	}
}