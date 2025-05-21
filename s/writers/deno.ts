
import {Writer} from "./writer.js"

declare const Deno: any

export const denoWriter = (): Writer => ({
	stdout: async(items: any[]) => {
		const line = items.join(" ")
		await Deno.stdout.write(new TextEncoder().encode(line + "\n"))
	},
	stderr: async(items: any[]) => {
		const line = items.join(" ")
		await Deno.stderr.write(new TextEncoder().encode(line + "\n"))
	},
})

