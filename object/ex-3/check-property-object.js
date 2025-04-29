const vehicle = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};

vehicle.color = 'red';

const checkProperty = (object, propertyName) => {
    if(object.hasOwnProperty(propertyName)) {
        return object[propertyName];
    }else {
       return `property ${propertyName} doesn't exist.`;
    }
}