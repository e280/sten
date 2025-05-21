
import {Writer} from "./writer.js"

export const voidWriter = (): Writer => ({
	stdout: async(_items: any[]) => undefined,
	stderr: async(_items: any[]) => undefined,
})

