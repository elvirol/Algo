let fruits = [
    { name: "apple", quantity: 10 },
    { name: "banana", quantity: 5 },
    { name: "kiwi", quantity: 2 },
    { name: "mango", quantity: 7 }
];

const getTotalQuantity = (array) => {
    return array.reduce((acc, arr) => arr.quantity + acc, 0);
};

const getMostAbundantFruit = (array) => {
    return array.reduce((max, curr) => {
        return curr.quantity > max.quantity ? curr : max;
    });
};

