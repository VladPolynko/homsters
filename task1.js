const array = [1, 2, 3, 4, 5, 8, 9, 11, 13, 15, 18, 22, 25, 28, 29, 30];

function range(arr) {
    let result = [];
    let temporaryStorageStart = null;
    let temporaryStorageEnd = null;

    for (let i = 0; i < arr.length; i++) {
        let targetIteration = arr[i];
        let nextIterationKey = i + 1;
        let nextIteration = nextIterationKey < arr.length ? arr[nextIterationKey] : 0;

        if (nextIteration - targetIteration === 1) {
            if (!temporaryStorageStart) {
                temporaryStorageStart = targetIteration;
            }

            temporaryStorageEnd = nextIteration;
        } else {
            if (temporaryStorageStart) {
                result.push(`${temporaryStorageStart} => ${temporaryStorageEnd}`);
                temporaryStorageStart = null;
            } else {
                result.push(targetIteration);
            }
        }
    }

    return result.toString();
}

console.log(range(array));
