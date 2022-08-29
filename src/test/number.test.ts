import "@src/extensions"

describe("number extension function tests", () => {

  test("'seconds()' extension function should return the provided number, multiplied by 1,000", () => {
    const value = 5
    const result = value.seconds()

    expect(result).toBe(5 * 1000)
  })
  
})
