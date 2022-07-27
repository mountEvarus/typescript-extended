// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Boolean {
  not(): boolean
}

Boolean.prototype.not = function(): boolean {
  if (this) {
    return false
  } else return true
}
