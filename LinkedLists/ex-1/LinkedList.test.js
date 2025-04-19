import LinkedList from "./LinkedList";

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('print()', () => {
    test('should return "null" when list is empty', () => {
      expect(list.print()).toBe('null');
    });

    test('should return correct string when list has elements', () => {
      list.append(10);
      list.append(20);
      expect(list.print()).toBe('10 -> 20 -> null');
    });
  });

  describe('append()', () => {
    test('should add one value to the list', () => {
      list.append(10);
      expect(list.head.value).toBe(10);
    });

    test('should add multiple values in correct order', () => {
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.print()).toBe('1 -> 2 -> 3 -> null');
    });
  });

  describe('remove()', () => {
    test('should remove the head node if it matches the value', () => {
      list.append(10);
      list.append(20);
      list.remove(10);
      expect(list.print()).toBe('20 -> null');
    });

    test('should remove a middle node', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(2);
      expect(list.print()).toBe('1 -> 3 -> null');
    });

    test('should not change list if value not found', () => {
      list.append(100);
      list.append(200);
      list.remove(999);
      expect(list.print()).toBe('100 -> 200 -> null');
    });

    test('should do nothing when list is empty', () => {
      list.remove(42);
      expect(list.print()).toBe('null');
    });
  });
});