
import {Shaper} from "./shaper.js"

export type TimestampOptions = {
	now: () => number
}

function defaultTimestampOptions(): TimestampOptions {
	return {
		now: () => Date.now(),
	}
}

export const timestampShaper = (options?: Partial<TimestampOptions>): Shaper => ({colors}) => {
	const opts = {...defaultTimestampOptions(), ...options}

	const date = new Date(opts.now())

	const year = date.getUTCFullYear().toString().padStart(4, "0")
	const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
	const day = date.getUTCDate().toString().padStart(2, "0")
	const calendar = `${year}-${month}-${day}`

	const hour = date.getUTCHours().toString().padStart(2, "0")
	const minute = date.getUTCMinutes().toString().padStart(2, "0")
	const second = date.getUTCSeconds().toString().padStart(2, "0")
	const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0")
	const clock = `${hour}:${minute}:${second}.${milliseconds}`

	const stamp = `${calendar}::${clock}`

	return {
		stdout: items => [
			colors.blue(stamp),
			...items,
		],
		stderr: items => [
			colors.red(stamp),
			"🚨",
			...items,
		],
	}
}

