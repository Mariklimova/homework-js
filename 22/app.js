// 22. Напишите функцию, которая принимает два числа и возвращает наименьшее общее 
// кратное этих чисел.


const num_1 = 6;
const num_2 = 3;


// 1
const result = () => {

    const maxDiv = Math.max(num_1, num_2);
    let arrDivisor = [];

    for (let i = 1; i <= maxDiv; i++) {
        if (i % num_1 === 0 && i % num_2 === 0) arrDivisor.push(i)
    }
    return Math.min(...arrDivisor)
}
console.log(result());





