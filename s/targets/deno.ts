
import {Target} from "./target.js"

declare const Deno: any

export const denoTarget = (): Target => ({
	stdout: (items: any[]) => {
		const line = items.join(" ")
		return Deno.stdout.write(new TextEncoder().encode(line + "\n"))
	},
	stderr: (items: any[]) => {
		const line = items.join(" ")
		return Deno.stderr.write(new TextEncoder().encode(line + "\n"))
	},
})

