
import {errorsShaper} from "./errors.js"
import {combineShapers} from "./shaper.js"
import {timestampShaper} from "./timestamp.js"

export function autoShaper() {
	return combineShapers(
		errorsShaper(),
		timestampShaper(),
	)
}

