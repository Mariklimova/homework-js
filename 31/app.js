// 31. Напишите функцию, которая принимает массив строк и возвращает строку, которая 
// встречается чаще всего.


const arr = ['dtf', 'dtf', 'gj', 'rfdyuoijp', 'gj', 'jhygu', 'gresehjryyuuou', 'gj'];


// 1
const checkMaxCount = (arr) => {
    let result = {
        title: '',
        count: 0
    }

    for (let i = 0; i < arr.length; i++) {
        let tampalaruObj = {
            title: arr[i],
            count: 0
        }

        for (let a = 0; a < arr.length; a++) {
            if (arr[a] === tampalaruObj.title) {
                tampalaruObj.count += 1
            }
        }


        if (tampalaruObj.count > result.count) {
            result = tampalaruObj
        }
    }

    return result.title
}

console.log(checkMaxCount(arr));



// 2
const arr_4 = ['dtf', 'dtf', 'gj', 'rfdyuoijp', 'gj', 'jhygu', 'gresehjryyuuou', 'gj'];
const result_4 = () => {

    const obj = {};

    for (let i = 0; i < arr_4.length; i++) {
        obj[arr_4[i]] ? obj[arr_4[i]] += 1 : obj[arr_4[i]] = 1;
    }

    const newArr = [];

    for (const key in obj) {
        newArr.push(obj[key])
    }

    for (const key in obj) {
        if (obj[key] === Math.max(...newArr)) return key
    }
}
console.log(result_4());





// 2
// const result_2 = () => {

//     const countEl = {};

//     for (const el of arr) {
//         countEl[el] = countEl[el] ? countEl[el] + 1 : 1;
//     }

//     const max = Math.max(...Object.values(countEl))
//     if (Object.values(countEl) == max) {
//         return Object.keys(countEl)
//     }

// }
// console.log(result_2());




// 3
// const res = arr.reduce((obj, key) => {
//     if (obj.hasOwnProperty(key)) {
//         obj[key] += 1;
//     } else {
//         obj[key] = 1;
//     }
//     return obj;
// }, {})
// console.log(res);


