// 25. Напишите функцию, которая принимает число и возвращает массив всех чисел от 1 до 
// этого числа


const num = 7;
const arr = [];

// 1
const result = () => {
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}
console.log(result());


