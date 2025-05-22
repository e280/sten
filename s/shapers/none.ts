
import {Shaper} from "./shaper.js"

export function noneShaper(): Shaper {
	return () => ({
		stdout: items => items,
		stderr: items => items,
	})
}

