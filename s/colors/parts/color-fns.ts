
import {codes} from "./codes.js"

export type ColorFn = (s: string) => string

export const colorFns = () => ({
	none: (s: string) => s,
	uncolor,
	mix,
	hex,
	rgb,
	bgRgb,
})

export function uncolor(s: string) {
	return s.replace(
		/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
		"",
	)
}

export function mix(...colorFns: ColorFn[]) {
	return (s: string) => {
		for (const fn of colorFns)
			s = fn(s)
		return s
	}
}

export function hex(hex: string) {
	hex = hex.replace(/^#/, "")
	let bigint: number
	let r: number
	let g: number
	let b: number

	if (hex.length === 3)
		bigint = parseInt(hex.split('').map(c => c + c).join(''), 16)
	else if (hex.length === 6)
		bigint = parseInt(hex, 16)
	else
		throw new Error('Invalid hex color')

	r = (bigint >> 16) & 255
	g = (bigint >> 8) & 255
	b = bigint & 255
	return rgb(r, g, b)
}

export function rgb(r: number, g: number, b: number) {
	const code = `\u001b[38;2;${r};${g};${b}m`
	return (s: string) => `${code}${s}${codes.reset}`
}

export function bgRgb(r: number, g: number, b: number) {
	const code = `\u001b[48;2;${r};${g};${b}m`
	return (s: string) => `${code}${s}${codes.reset}`
}

