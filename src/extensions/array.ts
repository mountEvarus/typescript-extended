// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Array<T> {
  first(): T | undefined
  last(): T | undefined
}

Array.prototype.first = function <T>(): T | undefined {
  return this[0]
}

Array.prototype.last = function <T>(): T | undefined {
  return this[this.length - 1]
}
