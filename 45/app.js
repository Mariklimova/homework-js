// 45. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все 
// элементы, кратные 3, заменены на 'Fizz', а кратные 5 - на 'Buzz'. Элементы, кратные и 3 и 5, 
// заменяются на 'FizzBuzz'.


const arr = [1, 2, 3, 4, 5, 6, 7, 15];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            newArr.push('FizzBuzz');
        } else if (arr[i] % 5 === 0) {
            newArr.push('Buzz');
        } else if (arr[i] % 3 === 0) {
            newArr.push('Fizz');
        } else {
            newArr.push(arr[i]);
        }

    }
    return newArr
}
console.log(result());


