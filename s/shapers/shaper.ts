
import {Theme} from "../themes/theme.js"
import {Colors} from "../colors/colorful.js"

export type ShaperContext = {
	colors: Colors
	theme: Theme
}

export type Shaper = (context: ShaperContext) => ShaperFns

export type ShaperFns = {
	stdout: (items: any[]) => any[]
	stderr: (items: any[]) => any[]
}

export function asShaper(shaper: Shaper) {
	return shaper
}

export function combineShapers(...shapers: Shaper[]): Shaper {
	return context => ({
		stdout: items => {
			for (const shaper of shapers)
				items = shaper(context).stdout(items)
			return items
		},
		stderr: items => {
			for (const shaper of shapers)
				items = shaper(context).stderr(items)
			return items
		},
	})
}

