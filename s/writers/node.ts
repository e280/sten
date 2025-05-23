
import {Writer} from "./writer.js"

export const nodeWriter = (): Writer => ({
	stdout: async(line: string) => void process.stdout.write(line + "\n"),
	stderr: async(line: string) => void process.stderr.write(line + "\n"),
})

