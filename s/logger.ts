
import {Writer} from "./writers/writer.js"
import {Shaper} from "./shapers/shaper.js"
import {autoColors} from "./colors/auto.js"
import {denoWriter} from "./writers/deno.js"
import {nodeWriter} from "./writers/node.js"
import {voidWriter} from "./writers/void.js"
import {autoWriter} from "./writers/auto.js"
import {errorsShaper} from "./shapers/errors.js"
import {colorless} from "./colors/colorless.js"
import {consoleWriter} from "./writers/console.js"
import {colorful, Colors} from "./colors/colorful.js"
import {timestampShaper} from "./shapers/timestamp.js"

export class Logger {
	static writers = {
		auto: autoWriter,
		void: voidWriter,
		deno: denoWriter,
		node: nodeWriter,
		console: consoleWriter,
	}

	static colors = {
		auto: autoColors,
		colorful: () => colorful,
		colorless: () => colorless,
	}

	static shapers = {
		errors: errorsShaper,
		timestamp: timestampShaper,
	}

	colors: Colors = Logger.colors.auto()
	writer: Writer = Logger.writers.auto()
	shapers: Shaper[] = []

	async log(...items: any[]) {
		for (const transform of this.shapers)
			items = transform(this).stdout(items)
		await this.writer.stdout(items)
	}

	async error(...items: any[]) {
		for (const transform of this.shapers)
			items = transform(this).stderr(items)
		await this.writer.stderr(items)
	}

	setColors(colors: Colors) {
		this.colors = colors
		return this
	}

	setWriter(writer: Writer) {
		this.writer = writer
		return this
	}

	addShaper(...shapers: Shaper[]) {
		this.shapers.push(...shapers)
		return this
	}
}

