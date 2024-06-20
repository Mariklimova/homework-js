// 33. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где 
// каждый элемент умножен на его индекс.



const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * i)
    }
    return newArr
}
console.log(result());



// 2
const result_2 = () => arr.map((el, index) => el * index);
console.log(result_2());





