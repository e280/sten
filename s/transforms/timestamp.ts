
import {Transformer} from "./transform.js"

export type TimestampOptions = {
	now: () => number
}

function defaultTimestampOptions(): TimestampOptions {
	return {
		now: () => Date.now(),
	}
}

export const timestampTransform = (options?: Partial<TimestampOptions>): Transformer => ({palette}) => {
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

