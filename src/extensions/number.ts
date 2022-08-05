// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Number {
  seconds(): number
}

Number.prototype.seconds = function(): number {
  return this.valueOf() * 1000
}
