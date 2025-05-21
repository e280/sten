
import {Colors} from "../colors/colorful.js"

export type ShaperContext = {
	colors: Colors
}

export type Shaper = (context: ShaperContext) => ShaperFns

export type ShaperFns = {
	stdout: (items: any[]) => any[]
	stderr: (items: any[]) => any[]
}

