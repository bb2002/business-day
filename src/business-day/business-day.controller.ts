import 'reflect-metadata';
import { Inject, Service } from "typedi";
import { BusinessDayService } from "./business-day.service";
import { FetchParams } from '../common/IController';
import UrlPattern from 'url-pattern';

@Service()
export class BusinessDayController {
	constructor(@Inject() private readonly businessDayService: BusinessDayService) {}

	bind() {
		
	}
}