import QueueWithTwoStacks from "./QueueWithTwoStacks";

describe('QueueWithTwoStacks', () => {

    let queue;

    beforeEach(() => {
        queue = new QueueWithTwoStacks();
    }) 

    describe('enqueue', () => {

        test('should add elements to the queue ', () => {
            queue.enqueue('Tom');
            expect(queue.peek()).toBe('Tom');
        })
    })

    describe('inEmpty()', () => {

        test('should return true if the queue is empty en false if not', () => {
            expect(queue.isEmpty()).toBe(true);
            queue.enqueue('jhon');
            expect(queue.isEmpty()).toBe(false);
        })
    })

    describe('dequeue()', () => {

        test('shoud remove the first element of the queue', () => {
            queue.enqueue('jhon');
            queue.enqueue('tom');
            queue.enqueue('doe');
            queue.dequeue();
            expect(queue.peek()).toBe('tom');
            queue.dequeue();
            expect(queue.peek()).toBe('doe');
            queue.dequeue();
            expect(queue.isEmpty()).toBe(true);

        })

        test('should return null when dequeue an empty queue', () => {
            expect(queue.dequeue()).toBe(null);
        })
    })

    describe('peek()', () => {

        test('should return the fist element of the queue', () => {
            queue.enqueue('jhon');
            queue.enqueue('doe');
            expect(queue.peek()).toBe('jhon');
        })
    })

})