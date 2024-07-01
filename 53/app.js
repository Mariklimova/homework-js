// 53. Реализуйте функцию, которая принимает строку в формате JSON и возвращает объект, 
// соответствующий этой строке. Не используйте встроенные методы JSON.parse


const jsonStr = '{"bookname" : "geekforgeeks", "author" : "bharat", "ReleaseYear" : 2001}'.replaceAll(/\s|\{|\}/g, '').split(',');


// 1
const result = () => {
    const arr = jsonStr.map((el) => el.split(':'));
    const obj = {};

    arr.forEach(el => {
        isNaN(el[1]) ? obj[el[0].replaceAll(/\'|\"/g, '')] = el[1].replaceAll(/\'|\"/g, '') : obj[el[0].replaceAll(/\'|\"/g, '')] = +el[1].replaceAll(/\'|\"/g, '')
    });
    return obj

}
console.log(result());



// 2
const result_2 = () => {
    const arr = Object.entries(jsonStr).map((el) => el[1].replaceAll(/\'|\"/g, '').split(':'));
    const obj = {};

    arr.forEach(el => isNaN(el[1]) ? obj[el[0]] = el[1] : obj[el[0]] = +el[1]);
    return obj

}
console.log(result_2());





