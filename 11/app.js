// 11. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.


const arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(result());


// 2
const result_2 = () => arr.reduce((sum_2, el) => sum_2 += el,0);
console.log(result_2());