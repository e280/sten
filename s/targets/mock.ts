
import {Target} from "./target.js"

export function spy<Fn extends (...args: any[]) => any>(fn: Fn) {
	const calls: {args: Parameters<Fn>, ret: ReturnType<Fn>}[] = []

	function spyFn(...args: Parameters<Fn>) {
		const ret = fn(...args)
		if (ret !== undefined && ret !== null && typeof ret.then === "function")
			return ret.then((r: any) => {
				calls.push({args, ret: r})
				return r
			})
		else {
			calls.push({args, ret})
			return ret
		}
	}

	spyFn.spy = {
		calls,
		get args() {
			return calls.map(c => c.args)
		},
		get rets() {
			return calls.map(c => c.ret)
		},
	}

	return spyFn
}

export class MockTarget implements Target {
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

