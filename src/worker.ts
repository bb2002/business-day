/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateBusinessDayDto } from './dtos/createBusinessDay.dto';
import createBusinessDay from './functions/createBusinessDay';
import getAllBusinessDays from './functions/getAllBusinessDays';

export interface Env {
	D1: D1Database;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const { pathname } = new URL(request.url);
		const { method } = request;
		const body = await request.json();

		if (pathname === '/api/business') {
			if (method === 'POST') {
				const createBusinessDayDto = plainToInstance(CreateBusinessDayDto, body);
				const errors = await validate(createBusinessDayDto);
				if (errors.length > 0) {
					return new Response(null, { status: 400 });
				}

				const result = JSON.stringify(
					await createBusinessDay({
						D1: env.D1,
						createBusinessDayDto,
					})
				);
				return new Response(result, { status: 201 });
			}

			if (method === 'GET') {
				const result = JSON.stringify(await getAllBusinessDays({ D1: env.D1 }));
				return new Response(result, { status: 200 });
			}
		}
	},
};
