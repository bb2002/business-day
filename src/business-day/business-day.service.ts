import 'reflect-metadata';
import { Service } from "typedi";

@Service()
export class BusinessDayService {
	constructor() {
		
	}

	hello() {
		console.log('Hello!!!');
	}
}