const capitalize = require("../src/capitalize");

describe("capitalize", () => {
  test("capitalize first letter", () => {
    expect(capitalize("test")).toBe("Test")
  })
})