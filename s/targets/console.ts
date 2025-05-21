
import {Target} from "./target.js"

export const consoleTarget = (): Target => ({
	stdout: (items: any[]) => console.log(...items),
	stderr: (items: any[]) => console.error(...items),
})

