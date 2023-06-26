import { RouterType } from "itty-router";

export interface IController {
  bind(router: RouterType, prefix: string): void;
}