import { IEnv } from "./IEnv";

export interface FetchParams {
	request: Request;
	env: IEnv;
	context: ExecutionContext;
}

export interface IController {
  get(params: FetchParams): Promise<Object> | void;
  post(params: FetchParams): Promise<Object> | void;
  patch(params: FetchParams): Promise<Object> | void;
  put(params: FetchParams): Promise<Object> | void;
  delete(params: FetchParams): Promise<Object> | void;
}