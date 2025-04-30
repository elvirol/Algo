const getCommonElements = (array1, array2) => {
    const set = new Set(array2);
    return array1.filter((element) => set.has(element));
};