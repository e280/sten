
import {codes} from "./parts/codes.js"
import {colorFns} from "./parts/color-fns.js"

export type Colors = typeof colorful

export const colorful = {
	...<{[key in keyof typeof codes]: (s: string) => string}>(
		Object.fromEntries(
			Object.entries(codes)
				.map(([key, code]) => [
					key,
					(s: string) => `${code}${s}${codes.reset}`,
				])
		)
	),
	...colorFns(),
}

