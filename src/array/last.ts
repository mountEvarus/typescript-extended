// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Array<T> {
  last(): T | undefined
}

Array.prototype.last = function <T>(): T | undefined {
  return this[this.length - 1]
}
