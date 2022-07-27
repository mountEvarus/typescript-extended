// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
  capitalize(): string
}

String.prototype.capitalize = function(): string {
  const capitalStart = this.charAt(0).toUpperCase()
  const lowerCaseBody = this.slice(1)

  return capitalStart + lowerCaseBody
}
