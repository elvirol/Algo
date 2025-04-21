let fruits = ["apple", "kiwi", "banana", "orange", "cherry"];

const findFruitWithR = (array) => {
    return array.find((arr) => arr.includes('r'));
};

const hasFruitWithP = (array) => {
    return array.some((arr) => arr.includes('p'))
};
