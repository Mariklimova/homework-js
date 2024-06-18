// 8. Напишите функцию, которая принимает число и возвращает его факториал.


const num = 5;
let fact = 1;

// 1
const result = () => {
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact
}
console.log(result());


// 2
const result_2 = (num) => {
    if (num === 1) return 1;
    return num * result_2(num - 1);
};
console.log(result_2(num));