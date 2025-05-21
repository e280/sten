
import {Colors} from "./colorful.js"
import {codes} from "./parts/codes.js"

export const colorless = {
	none: (s: string) => s,
	...<{[key in keyof typeof codes]: (s: string) => string}>(
		Object.fromEntries(
			Object.entries(codes)
				.map(([key]) => [
					key,
					(s: string) => s,
				])
		)
	),
} as Colors

