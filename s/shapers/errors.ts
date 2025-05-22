
import {Shaper} from "./shaper.js"

export const errorsShaper = (): Shaper => ({colors, theme}) => {
	const palette = theme(colors)

	function errstring(error: Error) {
		const stack = error.stack
			? "\n" + error.stack + "\n"
			: ""
		return [
			palette.errName(error.name + ":"),
			palette.errMessage(error.message),
		].join(" ") + palette.errStack(stack)
	}

	function processErrors(item: any) {
		return (item && item instanceof Error)
			? errstring(item)
			: item
	}

	function processAll(item: any) {
		return (item && item instanceof Error)
			? errstring(item)
			: palette.errMessage(item)
	}

	return {
		stdout: items => items.map(processErrors),
		stderr: items => items.map(processAll),
	}
}

