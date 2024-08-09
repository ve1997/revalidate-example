"use client";
import { register } from "./action/register";

export function ClientButton() {
	async function handleRegister() {
		await register({
			name: "miffy",
			message: "Hello, World!",
		});
	}
	return (
		<button
			type="button"
			className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			onClick={handleRegister}
		>
			Register
		</button>
	);
}
