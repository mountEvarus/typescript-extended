// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Number {
  milliseconds(): number
}

Number.prototype.milliseconds = function(): number {
  return this.valueOf() * 1000
}
