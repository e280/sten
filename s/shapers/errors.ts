
import {Shaper} from "./shaper.js"

export const errorsShaper = (): Shaper => ({colors}) => {
	function errstring(error: Error) {
		const stack = error.stack
			? "\n" + colors.red(error.stack) + "\n"
			: ""
		return `${colors.red(error.name + ":")} ${colors.brightRed(error.message)}` + stack
	}

	function processErrors(item: any) {
		return (item && item instanceof Error)
			? errstring(item)
			: item
	}

	function processAll(item: any) {
		return (item && item instanceof Error)
			? errstring(item)
			: colors.brightRed(item)
	}

	return {
		stdout: items => items.map(processErrors),
		stderr: items => items.map(processAll),
	}
}

