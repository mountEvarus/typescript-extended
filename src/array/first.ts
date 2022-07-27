// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Array<T> {
  first(): T | undefined
}

Array.prototype.first = function <T>(): T | undefined {
  return this[0]
}
