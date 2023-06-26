import { Router } from 'itty-router'
import Container from 'typedi';
import { BusinessDayController } from '../components/business-day/business-day.controller';

const v1Router = Router();
const controllers = [
  Container.get(BusinessDayController)
];

controllers.forEach((controller) => controller.bind(v1Router, '/v1'));
export default v1Router;