import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

const app = new Hono().basePath("/api");
const routes = app
	.get("/hogehoge", (c) => {
		const rb = {
			message: "hogehoge",
			timestamp: new Date().toLocaleString("ja-JP", {
				timeZone: "Asia/Tokyo",
			}),
		};
		return c.json(rb);
	})
	.get("/fugafuga", (c) => {
		const rb = {
			message: "fugafuga",
			timestamp: new Date().toLocaleString("ja-JP", {
				timeZone: "Asia/Tokyo",
			}),
		};
		return c.json(rb);
	})
	.post(
		"/register",
		zValidator(
			"json",
			z.object({
				name: z.string().min(1),
				message: z.string(),
			}),
		),
		(c) => {
			const { name, message } = c.req.valid("json");
			const rb = {
				message: `Registered ${name} with message: ${message}`,
				timestamp: new Date().toLocaleString("ja-JP", {
					timeZone: "Asia/Tokyo",
				}),
			};
			return c.json(rb);
		},
	);

export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
