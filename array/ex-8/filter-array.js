let fruits = ["apple", "kiwi", "banana", "orange", "cherry"];

const longFruits = (array) => {
   return array.filter((arr) => arr.length > 5);
};

const fruitsWithA = (array) => {
  return array.filter((arr) => arr.includes('a'));
};
