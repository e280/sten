
import {Writer} from "./writer.js"

export const nodeWriter = (): Writer => ({
	stdout: async(items: any[]) => void process.stdout.write(items.join(" ") + "\n"),
	stderr: async(items: any[]) => void process.stderr.write(items.join(" ") + "\n"),
})

