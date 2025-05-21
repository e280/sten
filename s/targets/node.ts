
import {Target} from "./target.js"

export const nodeTarget = (): Target => ({
	stdout: async(items: any[]) => void process.stdout.write(items.join(" ")),
	stderr: async(items: any[]) => void process.stderr.write(items.join(" ")),
})

