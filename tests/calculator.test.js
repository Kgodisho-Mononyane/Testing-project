const calculator = require("../src/calculator")

describe("calculator", () => {
    test("adds two numbers", () => {
        expect(calculator.add(3,2)).toBe(5)
    });
    test("subtracts two numbers", () => {
        expect(calculator.subtract(3,2)).toBe(1)
    });
    test("multiply two numbers", () => {
        expect(calculator.multiply(3,2)).toBe(6)
    })
})