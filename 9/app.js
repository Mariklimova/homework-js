// 9. Напишите функцию, которая принимает число и возвращает true, если число является 
// простым, и false в противном случае.


const num = 7;
let check = 0;

// 1
const result = () => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) check++
    }
    return check === 0 ? true : false;
}
console.log(result());


// 2
// const result_2 = (num) => {
//     if (num === 1) return;
//     if (num % result_2(num - 1) === 0) {
//         return true
//     } else {
//         return false
//     }

// };
// console.log(result_2(num));