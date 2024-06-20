// 32. Напишите функцию, которая принимает массив чисел и возвращает индекс первого 
// отрицательного числа.


const arr = [1, -2, 3, -4, 5, -6, 7];


// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return i
    }
}
console.log(result());





