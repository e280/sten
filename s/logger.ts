
import {Theme} from "./themes/theme.js"
import {Writer} from "./writers/writer.js"
import {autoTheme} from "./themes/auto.js"
import {autoColors} from "./colors/auto.js"
import {autoShaper} from "./shapers/auto.js"
import {autoWriter} from "./writers/auto.js"
import {basicTheme} from "./themes/basic.js"
import {denoWriter} from "./writers/deno.js"
import {nodeWriter} from "./writers/node.js"
import {voidWriter} from "./writers/void.js"
import {noneShaper} from "./shapers/none.js"
import {colorless} from "./colors/colorless.js"
import {errorsShaper} from "./shapers/errors.js"
import {consoleWriter} from "./writers/console.js"
import {colorful, Colors} from "./colors/colorful.js"
import {timestampShaper} from "./shapers/timestamp.js"
import {combineShapers, Shaper} from "./shapers/shaper.js"

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

	static themes = {
		auto: autoTheme,
		basic: basicTheme,
	}

	static shapers = {
		auto: autoShaper,
		none: noneShaper,
		errors: errorsShaper,
		timestamp: timestampShaper,
	}

	writer: Writer = Logger.writers.auto()
	colors: Colors = Logger.colors.auto()
	theme: Theme = Logger.themes.auto()
	shaper: Shaper = Logger.shapers.auto()

	async log(...items: any[]) {
		await this.writer.stdout(
			this.shaper(this).stdout(items).join(" ")
		)
	}

	async error(...items: any[]) {
		await this.writer.stderr(
			this.shaper(this).stderr(items).join(" ")
		)
	}

	setWriter(writer: Writer) {
		this.writer = writer
		return this
	}

	setColors(colors: Colors) {
		this.colors = colors
		return this
	}

	setTheme(theme: Theme) {
		this.theme = theme
		return this
	}

	setShaper(...shapers: Shaper[]) {
		this.shaper = combineShapers(...shapers)
		return this
	}
}

