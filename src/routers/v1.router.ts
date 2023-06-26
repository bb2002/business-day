import { Router } from 'itty-router';
import { createCors } from 'itty-cors'
import Container from 'typedi';
import { BusinessDayController } from '../components/business-day/business-day.controller';

const v1Router = Router();
const controllers = [Container.get(BusinessDayController)];
const { preflight } = createCors();

v1Router.all('*', preflight);
controllers.forEach((controller) => controller.bind(v1Router, '/v1'));
export default v1Router;
