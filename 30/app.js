// 30. Напишите функцию, которая принимает массив чисел и возвращает минимальное 
// значение.


const arr = [1, 2, 3, 8, 4, 5, 6, 7];

let min = arr[0];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        (arr[i] < min) ? min = arr[i] : min;
    }
    return min
}
console.log(result());


// 2
const result_2 = () => Math.min(...arr);
console.log(result_2());


// 3
const result_3 = () => arr.sort((a, b) => a - b)[0];
console.log(result_3());


