let fruits = ["apple", "kiwi", "banana", "orange", "cherry"];

const forEachArray = (array) => {
    array.forEach((arr) => {
        console.log(`fruit: ${arr}`);
    })
}

const forEachArrayIndex = (array) => {
    array.forEach((arr, index) => {
        console.log(`${index}: ${arr}`);
    })
}