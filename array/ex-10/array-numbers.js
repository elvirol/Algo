let numbers = [3, 7, 12, 5, 9, 21];

const doubleNumbers = (array) => {
   return array.map((arr) => arr * 2);
};

const filterEvenNumbers = (array) => {
   return array.filter((arr) => arr % 2 === 0);
};

const sumNumbers = (array) => {
    return array.reduce((acc, curr) => acc + curr, 0);
};