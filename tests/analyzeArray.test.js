const analyzeArray = require("../src/analyzeArray")

describe(analyzeArray, () => {
    let arr = [1,2,3,4,5,6];
    test("get average", () => {
        expect(analyzeArray(arr).average()).toBe(3.5);
    });
    test("get minimum value", () => {
        expect(analyzeArray(arr).min()).toBe(1);
    });
    test("get maximum value", () => {
        expect(analyzeArray(arr).max()).toBe(6);
    });
    test("get length of array", () => {
        expect(analyzeArray(arr).length()).toBe(6);
    });
})