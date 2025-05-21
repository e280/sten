
import {Palette} from "../palettes/palette.js"

export type TransformerContext = {
	palette: Palette
}

export type Transformer = (context: TransformerContext) => Transform

export type Transform = {
	stdout: (items: any[]) => any[]
	stderr: (items: any[]) => any[]
}

