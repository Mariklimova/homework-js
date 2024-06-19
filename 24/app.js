// 24. Напишите функцию, которая принимает массив строк и возвращает массив, где каждый 
// элемент - это первая буква исходного элемента.


const arr = ['dtf', 'rfdyuoijp', 'jhygu', 'gresehjryyuuou', 'gj'];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0])
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.map((el, index) => el[0]);
console.log(result_2());