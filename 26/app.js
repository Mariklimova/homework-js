// 26. Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только положительные числа


const arr = [1, -2, 3, -4, 5, -6, 7];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) newArr.push(arr[i])
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.filter((el) => el > 0);
console.log(result_2());


