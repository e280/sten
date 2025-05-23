
import {Writer} from "./writer.js"

declare const Deno: any

export const denoWriter = (): Writer => ({
	stdout: async line => {
		await Deno.stdout.write(new TextEncoder().encode(line + "\n"))
	},
	stderr: async line => {
		await Deno.stderr.write(new TextEncoder().encode(line + "\n"))
	},
})

