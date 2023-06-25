import { IEnv } from "./IEnv";

export interface FetchParams {
	request: Request;
	env: IEnv;
	context: ExecutionContext;
}

export interface IController {
  get(params: FetchParams): Object;
  post(params: FetchParams): Object;
  patch(params: FetchParams): Object;
  put(params: FetchParams): Object;
  delete(params: FetchParams): Object;
}