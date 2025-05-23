
import {spy} from "@e280/science"
import {Writer} from "./writer.js"

export function mockWriter() {
	return new MockWriter()
}

export class MockWriter implements Writer {
	stdout = spy((_line: string) => {})
	stderr = spy((_line: string) => {})

	getSpyStdout(index: number) {
		const [line] = this.stdout.spy.args.at(index)!
		return line
	}

	getSpyStderr(index: number) {
		const [line] = this.stderr.spy.args.at(index)!
		return line
	}
}

