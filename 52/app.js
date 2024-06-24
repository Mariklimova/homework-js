// 52. Напишите функцию, которая принимает строку и возвращает объект, где ключи - это 
// уникальные слова из строки, а значения - количество их повторений. Строка может 
// содержать знаки препинания, которые нужно игнорировать


const str = 'dtf, rfdyuoijp gj jhygu gresehjryyuuou! gj'.replace(/[^\w\s]|_/g,'').split(' ');;


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
const result_2 = () => str.reduce((obj, key) => {
    obj.hasOwnProperty(key)? obj[key] += 1: obj[key] = 1;
    return obj
}, {})
console.log(result_2());


