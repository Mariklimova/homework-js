// 29. Напишите функцию, которая принимает массив чисел и возвращает максимальное 
// значение.



const arr = [1, 2, 3, 8, 4, 5, 6, 7];

let max = 0;

// 1
const result = () => {
    for (let i = arr[0]; i < arr.length; i++) {
        (arr[i] > max) ? max = arr[i] : max;
    }
    return max
}
console.log(result());


// 2
const result_2 = () => Math.max(...arr);
console.log(result_2());


// 3
const result_3 = () => arr.sort((a, b) => b - a)[0];
console.log(result_3());


