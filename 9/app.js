// 9. Напишите функцию, которая принимает число и возвращает true, если число является 
// простым, и false в противном случае.


const num = 8;
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
let flag = true;
const result_2 = () => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) flag = false;
    }
    return flag ? true : false;

};
console.log(result_2());



// const result_2 = (num) => {
//     if (num === 1) return;
//     if (num % result_2(num - 1) === 0) {
//         return true
//     } else {
//         return false
//     }

// };
// console.log(result_2(num));