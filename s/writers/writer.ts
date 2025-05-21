
export type Writer = {
	stdout(items: any[]): Promise<void>
	stderr(items: any[]): Promise<void>
}

