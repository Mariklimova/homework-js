// 17. Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только уникальные значения.


const arr = [1, 2, 2, 3, 4, 5, 6, 7, 5];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) newArr.push(arr[i])
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.filter((el, i) => i === arr.indexOf(el));
console.log(result_2());


// 3
console.log(Array.from(new Set(arr)));

// 4
const result_4 = () => arr.reduce((unic, el) => unic.includes(el) ? unic : [...unic, el], []);
console.log(result_4());