import 'reflect-metadata';
import { RouterType } from 'itty-router';
import { Inject, Service } from 'typedi';
import { IController } from '../../common/interfaces/IController';
import { BusinessDayService } from './business-day.service';

@Service()
export class BusinessDayController implements IController {
	@Inject(() => BusinessDayService)
	private readonly businessDayService: BusinessDayService;

	bind(router: RouterType, prefix: string) {
		router.get(prefix + '/business-day', this.businessDayService.getAllBusinessDays);
		router.post(prefix + '/business-day', this.businessDayService.createBusinessDay);
	}
}
