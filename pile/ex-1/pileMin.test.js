import PileMin from "./pileMin";

describe('PileMin', () => {

    let pile;

    beforeEach(() => {
        pile = new PileMin();
    })

    describe('isEmpty()', () => {

        test('should be empty when initialized',() => {
            expect(pile.isEmpty()).toBe(true);
        })

        test('should be false after pushing an element',() => {
            pile.push(10);
            expect(pile.isEmpty()).toBe(false);
        })
    })

    describe('top()', () => {

        test('should return the top element of the pile', () => {
            pile.push(10);
            pile.push(4);
            expect(pile.top()).toBe(4);
        })

        test('should return undefined if the pile is empty', () => {
            expect(pile.top()).toBeUndefined();  
          });
    })

    describe('pop()', () => {

        test('should remove the top element of the pile',() => {
            pile.push(4);
            pile.push(10);
            pile.push(12)
            pile.pop();
            expect(pile.top()).toBe(10);
        })

        test('should return null when popping from an empty pile', () => {
            
            expect(pile.pop()).toBe(null);
        })

        
    })

    describe('push()', () => {

        test('should add elements to the pile', () => {
          pile.push(5);
          pile.push(10);
          expect(pile.top()).toBe(10);  
        });
    
        test('should update the minimum value correctly', () => {
          pile.push(5);
          pile.push(2);
          expect(pile.min()).toBe(2);  
        });
      });

    describe('min()', () => {
        
        test('should return the minimum element in the pile', () => {
          pile.push(5);
          pile.push(10);
          pile.push(2);
          expect(pile.min()).toBe(2);  
        });

        test('should update de minimum value correcly after pop()', () => {

            pile.push(4);
            pile.push(2);
            pile.push(5);
            pile.push(8);
            pile.pop();
            expect(pile.min()).toBe(2);
        })
    })


})
