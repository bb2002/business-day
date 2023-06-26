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
import { IEnv } from './common/IEnv';
import Container from 'typedi';
import { BusinessDayController } from './business-day/business-day.controller';
import UrlPattern from 'url-pattern';
import { FetchParams } from './common/IController';
import { NotFoundException } from './common/exceptions/NotFoundException';
import { v1Fetch } from './router/v1.router';

export default {
	async fetch(request: Request, env: IEnv, context: ExecutionContext): Promise<Response> {
		
		/*
		const { pathname } = new URL(request.url);
		const { method } = request;

		try {
			if (pathname === '/api/business') {
				if (method === 'POST') {
					const body = await request.json();
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
					return new Response(result, {
						status: 201,
						headers: {
							'Content-Type': 'application/json',
						},
					});
				}

				if (method === 'GET') {
					const businessDays = await getAllBusinessDays({ D1: env.D1 });
					return new Response(JSON.stringify(businessDays), {
						status: 200,
						headers: {
							'Content-Type': 'application/json',
						},
					});
				}
			}
		} catch (ex: any) {
			return new Response(JSON.stringify({ message: ex.message ?? 'Internal server error.' }), {
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}

		return new Response(null, { status: 404 });
		*/
	},
};
