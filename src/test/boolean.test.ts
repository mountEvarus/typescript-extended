import "@src/extensions"

describe("boolean extension function tests", () => {

  test("'not()' extension function should return false when performed on a true boolean", () => {
    const value = true
    const result = value.not()

    expect(result).toBe(!value)
  })
  
  test("'not()' extension function should return true when performed on a false boolean", () => {
    const value = false
    const result = value.not()

    expect(result).toBe(!value)
  })

})
