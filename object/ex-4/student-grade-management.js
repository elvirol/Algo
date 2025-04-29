const student = {
    firstName: 'Jhon',
    lastName: 'Doe',
    grade: [15, 12, 18]
}

const addGrade = (object, newGrade) => {
    object.grade.push(newGrade);
};

const getAverageGrade = (object) => {
   return object.grade.reduce((acc, curr) => acc + curr, 0) / object.grade.length;
}
