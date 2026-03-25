const caesarCipher = require("../src/caesarCipher")

describe("caesarCipher", () => {
    test("Cipher works", () => {
        expect(caesarCipher("abc", 1)).toBe("bcd")
    });
    test("Cipher wraps from z to a", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc")
    });
    test("Cipher has case preservation", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
    });
    test("Cipher maintains punctuation and spacing", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    });
    test("Cipher works", () => {
        expect(caesarCipher("abc", 1)).toBe("bcd")
    });
})