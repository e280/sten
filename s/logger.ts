
import {Target} from "./targets/target.js"
import {Shaper} from "./shapers/shaper.js"
import {denoTarget} from "./targets/deno.js"
import {nodeTarget} from "./targets/node.js"
import {colorless} from "./colors/colorless.js"
import {consoleTarget} from "./targets/console.js"
import {isColorSupported} from "./utils/supports.js"
import {colorful, Colors} from "./colors/colorful.js"
import {timestampShaper} from "./shapers/timestamp.js"

export class Logger {
	static targets = {
		deno: denoTarget,
		node: nodeTarget,
		console: consoleTarget,
	}

	static colors = {
		colorful: () => colorful,
		colorless: () => colorless,
		auto: () => isColorSupported()
			? colorful
			: colorless,
	}

	static shapers = {
		timestamp: timestampShaper,
	}

	colors: Colors = Logger.colors.auto()
	target = consoleTarget()
	shapers: Shaper[] = []

	async log(...items: any[]) {
		for (const transform of this.shapers)
			items = transform(this).stdout(items)
		await this.target.stdout(items)
	}

	async error(...items: any[]) {
		for (const transform of this.shapers)
			items = transform(this).stderr(items)
		await this.target.stderr(items)
	}

	setColors(colors: Colors) {
		this.colors = colors
		return this
	}

	setTarget(target: Target) {
		this.target = target
		return this
	}

	addShaper(shaper: Shaper) {
		this.shapers.push(shaper)
		return this
	}
}

