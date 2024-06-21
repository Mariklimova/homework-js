// 41. Напишите функцию, которая принимает строку и возвращает объект, где ключи - это буквы, 
// а значения - количество их повторений в строке.



const str = 'gresehjryyuuou';


// 1
const result = () => {

    const obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] ? obj[str[i]] += 1 : obj[str[i]] = 1;
    }
    return obj

}
console.log(result());



// 2
const result_2 = () => str.split('').reduce((obj, key) => {
    obj.hasOwnProperty(key)? obj[key] += 1: obj[key] = 1;
    return obj
}, {})
console.log(result_2());


