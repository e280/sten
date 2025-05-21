
import {Writer} from "./writer.js"
import {denoWriter} from "./deno.js"
import {nodeWriter} from "./node.js"
import {consoleWriter} from "./console.js"
import {isDeno, isNode} from "../utils/supports.js"

export const autoWriter = (): Writer => {
	if (isDeno()) return denoWriter()
	else if (isNode()) return nodeWriter()
	else return consoleWriter()
}

