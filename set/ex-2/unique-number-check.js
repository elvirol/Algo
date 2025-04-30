const hasDuplicates = (array) => {
    const set = new Set(array);
   return set.size !== array.length;
};