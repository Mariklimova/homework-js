// 1. Напишите функцию, которая принимает массив чисел и возвращает новый массив с 
// удвоенными значениями элементов исходного массива.

const arr = [1, 2, 3, 4, 5, 6, 7];

const resultArr = () => arr.map((el) => el * 2);
console.log(resultArr());