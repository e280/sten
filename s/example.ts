
import {Logger} from "./logger.js"

export const logger = new Logger()

await logger.log("hello world!")
await logger.error("bad stuff", new Error("oh no!"))

