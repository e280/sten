
import {Writer} from "./writer.js"

export const voidWriter = (): Writer => ({
	stdout: async() => undefined,
	stderr: async() => undefined,
})

