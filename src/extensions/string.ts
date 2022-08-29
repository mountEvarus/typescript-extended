// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
  capitalize(): string
  truncate(size?: number): string
}

String.prototype.capitalize = function(): string {
  const capitalStart = this.charAt(0).toUpperCase()
  const lowerCaseBody = this.slice(1)

  return capitalStart + lowerCaseBody
}

String.prototype.truncate = function(size = 20): string {
  return `${this.substring(0, size)}${this.length > size ? "..." : ""}`
}
