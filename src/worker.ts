/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { json, error } from 'itty-router';
import Container from 'typedi';
import { IEnv } from './common/interfaces/IEnv';
import v1Router from './routers/v1.router';

export default {
	fetch: (request: Request, env: IEnv, ctx: ExecutionContext) => {
		Container.set('env', env);
		return v1Router.handle(request, env, ctx).then(json).catch(error);
	},
};
