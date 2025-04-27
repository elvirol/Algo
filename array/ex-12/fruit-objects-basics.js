let fruits = [
  { name: "apple", quantity: 10 },
  { name: "banana", quantity: 5 },
  { name: "kiwi", quantity: 2 },
  { name: "mango", quantity: 7 }
];

const getFruitNames = (array) => {
   return array.map((arr) => arr.name)
};

const getFruitsWithQuantityAbove = (array, quantity) => {
    return array.filter((arr) => arr.quantity > quantity)
};
