import evaluatePostfix from "./evaluatePostfix";

describe('evaluatePostfix()', () => {
    
  test('should evaluate a valid postfix expression', () => {
    expect(evaluatePostfix("5 2 +")).toBe(7);
    expect(evaluatePostfix("3 4 + 5 *")).toBe(35);
    expect(evaluatePostfix("3 4 + 5 * 6 /")).toBe(5.833333333333333);
});

test('should throw an error for extra operators', () => {
  expect(() => evaluatePostfix("5 2 + +")).toThrow('Token invalide: +');
});

test('should throw an error for invalid token', () => {
  expect(() => evaluatePostfix("5 2 + x")).toThrow('Token invalide: x');
});
})