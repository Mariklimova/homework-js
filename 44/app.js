// 44. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все 
// строки начинаются с заглавной буквы.


const arr = ['dtf', 'rfdyuoijp', 'jhygu', 'gresehjryyuuou', 'gj'];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.map((el) => el[0].toUpperCase()+el.slice(1));
console.log(result_2());