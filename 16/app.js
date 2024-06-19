// 16. Напишите функцию, которая принимает число и возвращает сумму его цифр.


const num = 2244;



// 1
const result_2 = () => num.toString().split('').map((el) => parseInt(el)).reduce((sum, el) => sum += el);
console.log(result_2());