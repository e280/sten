
import {Shaper} from "./shaper.js"

export type TimestampOptions = {
	now: () => number
}

function defaultTimestampOptions(): TimestampOptions {
	return {
		now: () => Date.now(),
	}
}

export const timestampShaper = (options?: Partial<TimestampOptions>): Shaper => () => {
	const opts = {...defaultTimestampOptions(), ...options}
	return {
		stdout: items => [
			`[${Math.round(opts.now())}]`,
			...items,
		],
		stderr: items => [
			`[${Math.round(opts.now())}]`,
			...items,
		],
	}
}

