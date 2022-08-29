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

  test("'truncate()' extension function should truncate the string if the length is more then the specified size", () => {
    const value = "foobar"
    const result = value.truncate(2)

    expect(result).toBe("fo...")
  })

  test("'truncate()' extension function should return the string if the length is less then the specified size", () => {
    const value = "foobar"
    const result = value.truncate()

    expect(result).toBe(value)
  })
  
})
