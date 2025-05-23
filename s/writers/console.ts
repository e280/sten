
import {Writer} from "./writer.js"

export const consoleWriter = (): Writer => ({
	stdout: async line => console.log(line),
	stderr: async line => console.error(line),
})

