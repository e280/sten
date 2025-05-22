
import {spy} from "@e280/science"
import {Writer} from "./writer.js"

export function mockWriter() {
	return new MockWriter()
}

export class MockWriter implements Writer {
	stdout = spy((_items: any[]) => {})
	stderr = spy((_items: any[]) => {})

	getSpyStdout(index: number) {
		const [items] = this.stdout.spy.args.at(index)!
		return items.join(" ")
	}

	getSpyStderr(index: number) {
		const [items] = this.stderr.spy.args.at(index)!
		return items.join(" ")
	}
}

