
import {Logger} from "./logger.js"
import {MockWriter} from "./writers/mock.js"
import {Science, test, expect} from "@e280/science"

function setup() {
	const mock = new MockWriter()
	const logger = new Logger()
		.setWriter(mock)
		.setColors(Logger.colors.colorless())
		.setShaper(Logger.shapers.none())
	return {logger, mock}
}

await Science.run({
	"basics": Science.suite({
		"logger with mock": test(async() => {
			void setup()
		}),
		"logger stdout": test(async() => {
			const {logger, mock} = setup()
			expect(mock.stdout.spy.calls.length).is(0)
			await logger.log("hello world!")
			expect(mock.stdout.spy.calls.length).is(1)
			expect(mock.getSpyStdout(0)).is("hello world!")
			expect(mock.stderr.spy.calls.length).is(0)
		}),
		"logger stderr": test(async() => {
			const {logger, mock} = setup()
			expect(mock.stderr.spy.calls.length).is(0)
			await logger.error("hello world!")
			expect(mock.stderr.spy.calls.length).is(1)
			expect(mock.getSpyStderr(0)).is("hello world!")
			expect(mock.stdout.spy.calls.length).is(0)
		}),
	}),

	"shapers": Science.suite({
		"custom prefix": test(async() => {
			const {logger, mock} = setup()
			logger.setShaper(() => ({
				stdout: items => ["stdout:", ...items],
				stderr: items => ["stderr:", ...items],
			}))

			expect(mock.stdout.spy.calls.length).is(0)
			expect(mock.stderr.spy.calls.length).is(0)

			await logger.log("hello world!")
			expect(mock.stdout.spy.calls.length).is(1)
			expect(mock.getSpyStdout(0)).is("stdout: hello world!")

			await logger.error("uh oh")
			expect(mock.stderr.spy.calls.length).is(1)
			expect(mock.getSpyStderr(0)).is("stderr: uh oh")
		}),
	}),
})

