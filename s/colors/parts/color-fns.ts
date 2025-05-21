
import {codes} from "./codes.js"

export function uncolor(s: string) {
	return s.replace(
		/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
		"",
	)
}

export function colorHex(hex: string) {
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
	return colorRgb(r, g, b)
}

export function colorRgb(r: number, g: number, b: number) {
	const code = `\u001b[38;2;${r};${g};${b}m`
	return (s: string) => `${code}${s}${codes.reset}`
}

export function colorBgRgb(r: number, g: number, b: number) {
	const code = `\u001b[48;2;${r};${g};${b}m`
	return (s: string) => `${code}${s}${codes.reset}`
}

