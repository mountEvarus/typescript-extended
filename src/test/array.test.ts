import "@src/extensions"

describe("array extension function tests", () => {

  test("'first()' extension function should return first element in array", () => {
    const value = [1,2,3]
    const result = value.first()
  
    expect(result).toBe(value[0])
  })

  test("'first()' extension function should return undefined if array is empty", () => {
    const value: unknown[] = []
    const result = value.first()
  
    expect(result).toBe(undefined)
  })
  
  test("'last()' extension function should return last element in array", () => {
    const value = [1,2,3]
    const result = value.last()
  
    expect(result).toBe(value[2])
  })

  test("'last()' extension function should return undefined if array is empty", () => {
    const value: unknown[] = []
    const result = value.last()
  
    expect(result).toBe(undefined)
  })
  
})
