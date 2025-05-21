
import {codes} from "./parts/codes.js"

export type Colors = typeof colorful

export const colorful = {
	none: (s: string) => s,
	...<{[key in keyof typeof codes]: (s: string) => string}>(
		Object.fromEntries(
			Object.entries(codes)
				.map(([key, code]) => [
					key,
					(s: string) => `${code}${s}${codes.reset}`,
				])
		)
	),
}

