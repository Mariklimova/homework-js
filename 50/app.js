// 50. Напишите функцию, которая принимает массив чисел и возвращает объект, где ключи - это 
// числа, а значения - их квадраты.



const arr = [1, 2, 3, 4, 5, 6, 7];


// 1
const result = () => {

    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i] ** 2;
    }
    return obj

}
console.log(result());



// 2
const result_2 = () => arr.reduce((obj, key) => {
    obj[key] = key**2;
    return obj
}, {})
console.log(result_2());




