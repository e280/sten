
import {Logger} from "./logger.js"

export const logger = new Logger()
	.setWriter(Logger.writers.auto())
	.setColors(Logger.colors.auto())
	.addShaper(Logger.shapers.errors())
	.addShaper(Logger.shapers.timestamp())

await logger.log("hello world!")
await logger.error("bad stuff", new Error("oh no!"))

