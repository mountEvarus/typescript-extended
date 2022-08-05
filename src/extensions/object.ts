// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Object {
  matches(matcher: object, stringified?: boolean): boolean
}

Object.prototype.matches = function (matcher: object, stringified = true): boolean {
  if (stringified) {
    return JSON.stringify(this) === JSON.stringify(matcher)
  } else return this === matcher
}
