import type { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
if (!APP_URL) {
	throw new Error("Missing NEXT_PUBLIC_APP_URL");
}
export const client = hc<AppType>(APP_URL);
