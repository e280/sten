
import {asTheme} from "./theme.js"

export const basicTheme = () => asTheme(colors => ({
	plain: colors.none,
	errMessage: colors.mix(colors.brightRed, colors.bold),
	errName: colors.red,
	errStack: colors.mix(colors.red, colors.dim),
	timestamp: colors.blue,
	timestampErr: colors.red,
}))

