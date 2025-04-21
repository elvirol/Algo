let fruits = ["apple", "kiwi", "banana", "orange", "cherry"];

let test = [];

const upperFruits = (array) => {
   return array.map((arr) => {
    return typeof arr === "string"
    ? arr[0].toUpperCase() + arr.slice(1)
    : arr;
   }) 
};

const emojiFruits = (array) => {
    return array.map((arr) => '🍎 ' + arr)
}
