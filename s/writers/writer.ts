
export type Writer = {
	stdout(line: string): Promise<void>
	stderr(line: string): Promise<void>
}

export function asWriter(writer: Writer) {
	return writer
}

