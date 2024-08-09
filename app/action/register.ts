"use server";
import { client } from "@/lib/hono";
import type { InferRequestType } from "hono";
import { revalidateTag } from "next/cache";

type ReqType = InferRequestType<typeof client.api.register.$post>["json"];
export async function register({ name, message }: ReqType) {
	const res = await client.api.register.$post({
		json: { name, message },
	});
	const data = await res.json();
	revalidateTag("hogehoge");
	console.log("finish register", data);
}
