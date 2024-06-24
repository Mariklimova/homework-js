// 48. Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий все простые числа


const arr = [1, 2, 3, 4, 5, 6, 7, 15, 10,11];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;

        for (let j = 2; j < i; j++) {
            if (arr[i] % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag) newArr.push(arr[i])

    }
    return newArr
}
console.log(result());

