
export type Target = {
	stdout(items: any[]): Promise<void>
	stderr(items: any[]): Promise<void>
}

