// 49. Напишите функцию, которая принимает строку и возвращает новую строку, где каждое 
// слово начинается с заглавной буквы.


const str = 'dtf rfdyuoijp jhygu gresehjryyuuou gj'.split(' ');
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < str.length; i++) {
        newArr.push(str[i][0].toUpperCase() + str[i].slice(1));
    }
    return newArr.join(' ')
}
console.log(result());


// 1
const result_2 = () => str.map((el) => el[0].toUpperCase() + el.slice(1)).join(' ');
console.log(result_2());

