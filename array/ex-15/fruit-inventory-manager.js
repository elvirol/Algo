let fruits = [
    { name: "apple", quantity: 10 },
    { name: "banana", quantity: 5 },
    { name: "kiwi", quantity: 2 },
    { name: "mango", quantity: 7 }
];

const getLowStockFruits = (array, limit) => {
    return array.filter((arr) => arr.quantity <= limit);
};

const restockFruit = (array, fruitName, amount) => {
    const fruit = array.find((arr) => arr.name === fruitName);
    if (fruit) {
      fruit.quantity += amount;
    }
}

const getInventorySummary = (array) => {
     let totalQuantity = 0;
     let tabFruitNames = [];

    for(let arr of array) {
        if(arr.quantity > 0) {
            tabFruitNames.push(arr.name)
            totalQuantity += arr.quantity;
        }
    }

    return  {
        totalFruits: totalquantity, fruitNames: tabFruitNames
    }
}


