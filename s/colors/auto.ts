
import {colorless} from "./colorless.js"
import {colorful, Colors} from "./colorful.js"
import {isColorSupported} from "../utils/supports.js"

export const autoColors = (): Colors => {
	return isColorSupported()
		? colorful
		: colorless
}

