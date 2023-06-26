import Container from 'typedi';
import { IEnv } from './IEnv';

export class IService {
	get env(): IEnv {
		return Container.get('env');
	}
}
