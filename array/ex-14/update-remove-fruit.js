let fruits = [
    { name: "apple", quantity: 10 },
    { name: "banana", quantity: 5 },
    { name: "kiwi", quantity: 2 },
    { name: "mango", quantity: 7 }
]


const updateFruitQuantity = (array, fruitName, newQuantity) => {
   for(let arr of array) {
    if(arr.name === fruitName) {
        arr.quantity = newQuantity;   
        return;
    }
   }
}

const removeFruit = (array, fruitName) => {
   let index = array.findIndex((arr) => arr.name === fruitName);
   return array.splice(index, 1);
};

