import { Inject, Service } from "typedi";
import { BusinessDayService } from "./business-day.service";

@Service()
export class BusinessDayController {
	constructor(@Inject() private readonly businessDayService: BusinessDayService) {}
}