
export type Writer = {
	stdout(items: any[]): Promise<void>
	stderr(items: any[]): Promise<void>
}

export function asWriter(writer: Writer) {
	return writer
}

