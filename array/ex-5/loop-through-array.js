let fruits = ["pomme", "kiwi", "banane", "orange", "cerise"];

const forArray = (array) => {
    for(let i = 0; i < array.length; i++) {
        console.log("Fruit: " + array[i]);
    }
};

const forOfArray = (array) => {
    for( let arr of array ) {
        console.log("🍓 " + arr);
    }
};