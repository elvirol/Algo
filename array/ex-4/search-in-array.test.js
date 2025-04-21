import { isIn, printIndex } from "./search-in-array";


describe('Array Helper Functions', () => {
    const fruits = ["pomme", "kiwi", "banane", "orange", "cerise"];
  
    describe('isIn()', () => {
      test('should return true if element is in the array', () => {
        expect(isIn(fruits, "kiwi")).toBe(true);
        expect(isIn(fruits, "orange")).toBe(true);
      });
  
      test('should return false if element is not in the array', () => {
        expect(isIn(fruits, "banana")).toBe(false);
        expect(isIn(fruits, "pineapple")).toBe(false);
      });
    });
  
    describe('printIndex()', () => {
      test('should return the correct index of an element in the array', () => {
        expect(printIndex(fruits, "kiwi")).toBe(1);
        expect(printIndex(fruits, "orange")).toBe(3);
      });
  
      test('should return -1 if the element is not found in the array', () => {
        expect(printIndex(fruits, "banana")).toBe(-1);
        expect(printIndex(fruits, "pineapple")).toBe(-1);
      });
    });
  });