
import {Colors} from "./colorful.js"
import {codes} from "./parts/codes.js"
import {colorFns} from "./parts/color-fns.js"

export const colorless = {
	...<{[key in keyof typeof codes]: (s: string) => string}>(
		Object.fromEntries(
			Object.entries(codes)
				.map(([key]) => [
					key,
					(s: string) => s,
				])
		)
	),
	...colorFns(),
} as Colors

