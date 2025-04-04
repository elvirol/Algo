import checkBalance from "./checkBalance";


describe('checkBalance', () => {


    test('should return true for balanced parentheses', () => {
        expect(checkBalance('{[()]}')).toBe(true);
    });

    test('should return true for string with correct and balanced parentheses and random characters', () => {
        expect(checkBalance('zf{zgz[z(zg)]}')).toBe(true);
    });

    test('should return true for complex string with balanced parentheses and random characters', () => {
        expect(checkBalance('{[(zggz)]}[]ggfd')).toBe(true);
    });

    test('should return false for unbalanced parentheses with misplaced brackets', () => {
        expect(checkBalance('{][(gsgs)]}')).toBe(false);
    });

    test('should return false for string with unbalanced parentheses and characters', () => {
        expect(checkBalance('sgsg{][()]}}')).toBe(false);
    });

    test('should return false for incorrect balance of parentheses at the end of string', () => {
        expect(checkBalance('{][(})]}')).toBe(false);
    });

    test('should return true for an empty string', () => {
        expect(checkBalance('')).toBe(true);
    });
})
