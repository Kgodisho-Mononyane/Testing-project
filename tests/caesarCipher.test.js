const caesarCipher = require("../src/caesarCipher")

describe("caesarCipher", () => {
  test("test shifted", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("test with number", () => {
    expect(caesarCipher("123", 3)).toBe("123");
  });
  test("test with other symbols", () => {
    expect(caesarCipher("12@#!ab3", 3)).toBe("12@#!de3");
  });
  test("test wrapping", () => {
    expect(caesarCipher("xyz", 4)).toBe("bcd");
  });
  test("test itself", () => {
    expect(caesarCipher("abc", 26)).toBe("abc");
  });
  test("test capitalize", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("test blank", () => {
    expect(caesarCipher("", 3)).toBe("");
  });
});