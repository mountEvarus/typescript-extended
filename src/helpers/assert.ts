export function assert(predicate: boolean, error: Error): void {
  if (predicate === false) {
    throw error
  }
}
