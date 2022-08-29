import "@src/extensions"

describe("string extension function tests", () => {

  test("'capitalize()' extension function should return the provided string, starting with a capital letter", () => {
    const value = "foo"
    const result = value.capitalize()

    expect(result).toBe("Foo")
  })
  
  test("'capitalize()' extension function should return the string unchanged if already capitalized", () => {
    const value = "Foo"
    const result = value.capitalize()

    expect(result).toBe(value)
  })
  
})
