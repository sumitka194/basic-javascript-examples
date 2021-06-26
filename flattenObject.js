// random object
const user = {
    firstName: 'Sumit',
    lastName: 'Kumar',
    profile: 'JavaScript Developer',
    address: {
        office: {
            country: 'India',
            state: 'Uttar Pradesh',
            city: 'Noida'
        },
        house: {
            country: 'India',
            state: 'Uttar Pradesh',
            city: 'Noida'
        }
    }
}

// flatten object recursively with parent key added in the current key
function flattenKey(obj, parentKey) {
    let flattendObj = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            flattendObj = {...flattendObj, ...flattenKey(obj[key], `${parentKey}_${key}`)};
        } else {
            flattendObj[`${parentKey}_${key}`] = obj[key];
        }
    }
    return flattendObj;
}

const newObj = flattenKey(user, 'user');
console.log('original obj :: ', user);
console.log('flattened obj :: ', newObj);
