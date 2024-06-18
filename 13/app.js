// 13. Напишите функцию, которая принимает строку и возвращает true, если строка является 
// палиндромом, и false в противном случае.


const str = 'kasak';


// 1
const result = () => str === str.split('').reverse().join('') ? true : false;
console.log(result());


