
import {Target} from "./target.js"

export const nodeTarget = (): Target => ({
	stdout: (items: any[]) => void process.stdout.write(items.join(" ")),
	stderr: (items: any[]) => void process.stderr.write(items.join(" ")),
})

