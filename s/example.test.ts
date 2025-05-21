
import {Logger} from "./logger.js"
import {MockTarget} from "./targets/mock.js"
import {Science, test, expect} from "@e280/science"

await Science.run({
	"basics": Science.suite({
		"create a logger": test(async() => {
			void new Logger()
		}),
		"logger with mock": test(async() => {
			const mock = new MockTarget()
			void new Logger().setTarget(mock)
		}),
		"logger stdout": test(async() => {
			const mock = new MockTarget()
			const logger = new Logger().setTarget(mock)
			expect(mock.stdout.spy.calls.length).is(0)
			logger.log("hello world!")
			expect(mock.stdout.spy.calls.length).is(1)
			expect(mock.getSpyStdout(0)).is("hello world!")
			expect(mock.stderr.spy.calls.length).is(0)
		}),
		"logger stderr": test(async() => {
			const mock = new MockTarget()
			const logger = new Logger().setTarget(mock)
			expect(mock.stderr.spy.calls.length).is(0)
			logger.error("hello world!")
			expect(mock.stderr.spy.calls.length).is(1)
			expect(mock.getSpyStderr(0)).is("hello world!")
			expect(mock.stdout.spy.calls.length).is(0)
		}),
	}),

	"transforms": Science.suite({
		"custom prefix": test(async() => {
			const mock = new MockTarget()
			const logger = new Logger()
				.setTarget(mock)
				.setPalette(Logger.palettes.plain())
				.addTransform(() => ({
					stdout: items => ["stdout:", ...items],
					stderr: items => ["stderr:", ...items],
				}))
			logger.log("hello world!")
			console.log(mock.getSpyStdout(0))
			expect(mock.stdout.spy.calls.length).is(1)
			expect(mock.getSpyStdout(0)).is("stdout: hello world!")
		}),
	}),
})

