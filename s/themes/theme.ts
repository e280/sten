
import {Colors} from "../colors/colorful.js"
import {ColorFn} from "../colors/parts/color-fns.js"

export type Theme = (colors: Colors) => Palette

export type Palette = {
	plain: ColorFn
	errName: ColorFn
	errMessage: ColorFn
	errStack: ColorFn
	timestamp: ColorFn
	timestampErr: ColorFn
}

export function asTheme(theme: Theme) {
	return theme
}

