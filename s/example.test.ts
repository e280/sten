
import {Science, test, expect} from "@e280/science"
import {Logger} from "./logger.js"

await Science.run({
	"addition works": test(async() => {
		expect(2 + 2).is(4)
  	// const logger = new Logger()
  	//  	.target(Logger.node)
  	//  	.palette(Logger.colorful)
  	//  	.transform(Logger.timestamp)
	}),
})

