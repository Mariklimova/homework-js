// 21. Напишите функцию, которая принимает два числа и возвращает наибольшее общее 
// делимое этих чисел.



const num_1 = 10;
const num_2 = 30;


// 1
const result = () => {

    const maxDiv = Math.min(num_1, num_2);
    let arrDivisor = [];

    for (let i = 1; i <= maxDiv; i++) {
        if (num_1 % i === 0 && num_2 % i === 0) arrDivisor.push(i)
    }
    return Math.max(...arrDivisor)
}
console.log(result());





