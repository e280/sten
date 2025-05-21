
import {Writer} from "./writer.js"

export const consoleWriter = (): Writer => ({
	stdout: async(items: any[]) => console.log(...items),
	stderr: async(items: any[]) => console.error(...items),
})

