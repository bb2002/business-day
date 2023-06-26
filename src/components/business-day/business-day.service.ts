import { Service } from "typedi";

@Service()
export class BusinessDayService {
  constructor() {

  }

  async hello() {
    console.log('Hello');
    return {
      'hello': 'world!'
    }
  }
}