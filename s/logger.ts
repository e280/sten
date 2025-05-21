
import {Target} from "./targets/target.js"
import {nodeTarget} from "./targets/node.js"
import {Palette} from "./palettes/palette.js"
import {plainPalette} from "./palettes/plain.js"
import {consoleTarget} from "./targets/console.js"
import {Transformer} from "./transforms/transform.js"
import {timestampTransform} from "./transforms/timestamp.js"

export class Logger {
	static palettes = {
		plain: plainPalette,
	}

	static targets = {
		node: nodeTarget,
		console: consoleTarget,
	}

	static transforms = {
		timestamp: timestampTransform,
	}

	palette: Palette = {}
	target = consoleTarget()
	transformers: Transformer[] = []

	log(...items: any[]) {
		for (const transform of this.transformers)
			items = transform(this).stdout(items)
		this.target.stdout(items)
	}

	error(...items: any[]) {
		for (const transform of this.transformers)
			items = transform(this).stderr(items)
		this.target.stderr(items)
	}

	setPalette(palette: Palette) {
		this.palette = palette
		return this
	}

	setTarget(target: Target) {
		this.target = target
		return this
	}

	addTransform(transformer: Transformer) {
		this.transformers.push(transformer)
		return this
	}
}

