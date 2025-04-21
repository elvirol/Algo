let fruits = ["pomme", "kiwi", "banane", "orange", "cerise"];

export const isIn = (array, element) => {
    for(let i =0; i < array.length; i ++) {
        if(array[i] === element) {
            return true;
        }
    }
    return false;
}

export const printIndex = (array, element)=> {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === element) {
            return i;
        }
    }
    return -1;
}
