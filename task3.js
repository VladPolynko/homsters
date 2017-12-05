const multidimensionalObject = {
    "User": 1,
    "Data": {
        "FirstName": "Anonimoys",
        "LastName": "AnonimoysLastName",
        "MiddleName": "AnonimoysMiddleName",
        "Role": [
            1, 2, 4, {
                "isOwner": true
            }
        ]
    },
    "Profile": [
        {
            "Check": true,
            "CheckRole": [
                1, 2, 34
            ]
        },
        {
            "Settings": {
                "Rider": [
                    1, 2, 3, 4
                ],
                "Inside": {
                    "In": true,
                    "Out": null
                }
            }
        }
    ]
};

function maps(obj, prefix, result = {}) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && (obj[key] !== null)) {
            maps(obj[key], prefix + key, result);
        } else {
            result[prefix + key] = obj[key];
        }
    }
    return result;
}

console.log(maps(multidimensionalObject, 'multidimensionalObject'));
