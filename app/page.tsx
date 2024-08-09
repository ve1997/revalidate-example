import { client } from "@/lib/hono";
import { ClientButton } from "./ClientButton";

const ENDPOINT_HOGEHOGE = client.api.hogehoge.$url();
const ENDPOINT_FUGAFUGA = client.api.fugafuga.$url();

export default async function Home() {
	const [hogehogeRes, fugafugaRes] = await Promise.all([
		fetch(ENDPOINT_HOGEHOGE, {
			next: {
				tags: ["hogehoge"],
			},
		}),
		fetch(ENDPOINT_FUGAFUGA, {
			next: {
				tags: ["fugafuga"],
			},
		}),
	]);

	const hogehogeData = await hogehogeRes.json();
	const fugafugaData = await fugafugaRes.json();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="flex space-x-4">
				<pre className="rounded-lg bg-gray-100 p-4">
					{JSON.stringify(hogehogeData, null, 2)}
				</pre>
				<pre className="rounded-lg bg-gray-100 p-4">
					{JSON.stringify(fugafugaData, null, 2)}
				</pre>
			</div>
			<div className="mt-8">
				<ClientButton />
			</div>
		</main>
	);
}
