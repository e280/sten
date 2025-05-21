
import {Target} from "./target.js"

export const consoleTarget = (): Target => ({
	stdout: async(items: any[]) => console.log(...items),
	stderr: async(items: any[]) => console.error(...items),
})

