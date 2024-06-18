// 7. Напишите функцию, которая принимает массив строк и возвращает массив только тех 
// строк, которые содержат больше пяти символов.


const arr = ['dtf', 'rfdyuoijp', 'jhygu', 'gresehjryyuuou', 'gj'];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) newArr.push(arr[i])
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.filter((el) => el.length >= 5);
console.log(result_2());