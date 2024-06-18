// 5. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все 
// строки отсортированы по длине.


const arr = ['dtf', 'rfdyuoijp', 'jhygu', 'gresehjryyuuou', 'gj'];
const newArr = [];


const result_2 = () => arr.sort((a, b) => a.length - b.length);
console.log(result_2());


