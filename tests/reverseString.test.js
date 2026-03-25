const reverseString = require("../src/reverseString")

describe("reverseString", () => {
    test("reverses string", () => {
        expect(reverseString("test")).toBe("tset")
    })
})