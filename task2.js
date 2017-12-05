const array2 = [1, 2, 3, 2, 1, 4, 3, 2, 4, 56, 456, 3, 2, 32, 6, 7, 9, 0, 13, 2, 4];

function mapper(array) {
    let mapObject = {};

    array.forEach(value => {
        let targetMapObject = mapObject[value];

        if (targetMapObject) {
            mapObject[value] = ++targetMapObject;
        } else {
            mapObject[value] = 1;
        }
    });

    return mapObject;
}

function unique(array, uniqueArray = []) {
    let mapObject = mapper(array);

    Object.keys(mapObject).forEach(key => {
        if (mapObject[key] === 1) {
            uniqueArray.push(+key);
        }
    });

    return uniqueArray;
}

function duplicating(array, uniqueArray = []) {
    let mapObject = mapper(array);

    Object.keys(mapObject).forEach(key => {
        if (mapObject[key] > 1) {
            uniqueArray.push(+key);
        }
    });

    return uniqueArray;
}

function addition(array) {
    return array.reduce((accumValue, value) => accumValue + value)
}

console.log(unique(array2));
console.log(duplicating(array2));
console.log(addition(array2));
