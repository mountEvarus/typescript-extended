import "@src/extensions"

describe("object extension function tests", () => {

  const objectToMatch = {
    foo: true,
    bar: 1,
    baz: ["foo", "bar", "baz"],
  }

  test("'matches()' extension function should return true if two objects contain the same key-values", () => {
    const value = {
      foo: true,
      bar: 1,
      baz: ["foo", "bar", "baz"],
    }

    const result = value.matches(objectToMatch)

    expect(result).toBe(true)
  })

  test("'matches()' extension function should return false if two objects contain the same key-values", () => {
    const value = {
      foo: true,
    }

    const result = value.matches(objectToMatch)

    expect(result).toBe(false)
  })
  
})
