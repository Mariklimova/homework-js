// 35. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все 
// строки переведены в верхний регистр.


const arr = ['dtf', 'rfdyuoijp', 'jhygu', 'gresehjryyuuou', 'gj'];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase())
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.map((el) => el.toUpperCase());
console.log(result_2());