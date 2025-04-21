const fruits = ["apple", "kiwi", "banana", "orAnge", "cherry"]

const fruitsStartingWithLetter = (array, letter) => {
   return array.filter((arr) => arr.toLowerCase().startsWith(letter.toLowerCase()))
}

const countFruitsWithLength = (array, minLength) => {
    return array.filter((arr) => arr.length >= minLength )
}

