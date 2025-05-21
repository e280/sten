
import {Colors} from "../colors/colorful.js"

export type ShaperContext = {
	colors: Colors
}

export type Shaper = (context: ShaperContext) => ShapeFns

export type ShapeFns = {
	stdout: (items: any[]) => any[]
	stderr: (items: any[]) => any[]
}

