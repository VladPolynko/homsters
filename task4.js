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

function typeGenerator(typeMessages, finishType = []) {
    for (let i = 0; i < types.length; i++) {
        let value = types[i];

        if (typeMessages >= value.code) {
            finishType.push(value);
            typeMessages = typeMessages - value.code;
            --i;
        }
    }

    return finishType;
}

console.log(typeGenerator(142));