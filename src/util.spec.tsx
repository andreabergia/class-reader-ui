import { isSimple } from "./util";

describe("isSimple", () => {
  it("should be true for a string", () => {
    expect(isSimple("a-string")).toBe(true);
  });

  it("should be true for a number", () => {
    expect(isSimple(42)).toBe(true);
  });

  it("should be true for a boolean", () => {
    expect(isSimple(true)).toBe(true);
  });

  it("should be true for null", () => {
    expect(isSimple(null)).toBe(true);
  });

  describe("when applied to an object", () => {
    it("should be true for an empty object", () => {
      expect(isSimple({})).toBe(true);
    });

    it("should be true for if the object has only one key", () => {
      expect(isSimple({ key: 42 })).toBe(true);
    });

    it("should be true if the object has two keys but both are simple", () => {
      expect(isSimple({ a: true, b: false })).toBe(true);
    });

    it("should be false if the object has two keys but one is not simple", () => {
      expect(
        isSimple({ a: true, b: { b1: false, b2: false, b3: false } })
      ).toBe(false);
    });

    it("should be false if the object has three keys", () => {
      expect(isSimple({ a: true, b: false, c: true })).toBe(false);
    });
  });

  describe("when applied to an array", () => {
    it("should be true for an empty array", () => {
      expect(isSimple([])).toBe(true);
    });

    it("should be true if the array has three elements but all are simple", () => {
      expect(isSimple([1, 2, 3])).toBe(true);
    });

    it("should be false if the array has three elements but one is not simple", () => {
      expect(isSimple([1, 2, { b1: false, b2: false, b3: false }])).toBe(false);
    });

    it("should be false if the array has four elements", () => {
      expect(isSimple([1, 2, 3, 4])).toBe(false);
    });
  });
});
