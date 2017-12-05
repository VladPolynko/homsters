const types = [
    {
        key: 'ELEMENT_WINDOW',
        code: 256
    }, {
        key: 'ELEMENT_SHADOW',
        code: 128
    }, {
        key: 'ELEMENT_ACTIVE',
        code: 8
    }, {
        key: 'ELEMENT_DISABLED',
        code: 4
    }, {
        key: 'ELEMENT_SECONDARY',
        code: 2
    }, {
        key: 'ELEMENT_PRIMARY',
        code: 1
    },
];

function typeGenerator (value) {
    let result = [];

    for (let i = 0; i < types.length; i++) {
        let type = types[i];
        let localResult = value;

        localResult = localResult & type.code;

        if(localResult) {
            result.push(type.key)
        }
    }

    return result;
}

console.log(typeGenerator(142));
