// 40. Напишите функцию, которая принимает число и возвращает массив всех делителей этого 
// числа.


const num = 21;
const arrNum = [];


// 1
const result = () => {
    for (let i = 1; i < num; i++) {
        if (num % i === 0) arrNum.push(i)
    }
    return arrNum
}
console.log(result());





