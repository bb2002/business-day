import UrlPattern from "url-pattern";
import { EHttpMethod } from "../common/EHttpMethod";
import { BusinessDayService } from "../business-day/business-day.service";
import Container from "typedi";

export async function v1Fetch(request: Request) {
	const { url, method } = request;

	const businessDayService = Container.get(BusinessDayService);
  await mapper('/hello', EHttpMethod.GET, businessDayService.hello)(url, method)(request);
}

function mapper(pathname: string, method: EHttpMethod, func: Function) {
	const pattern = new UrlPattern('/v1' + pathname);

	return (url: string, httpMethod: string) => {
		if (method === httpMethod && !!pattern.match(url)) {
			return func;
		}

		return async () => {};
	}
}