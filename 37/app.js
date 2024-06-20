// 37. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все 
// отрицательные числа заменены на их абсолютные значения.



const arr = [1, -2, 3, -4, 5, -6, 7];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] < 0 ? newArr.push(arr[i] - 2 * arr[i]):newArr.push(arr[i])
    }
    return newArr
}
console.log(result());



// 2
const result_2 = () => arr.map((el) => el < 0 ? el - 2 * el : el);
console.log(result_2());





