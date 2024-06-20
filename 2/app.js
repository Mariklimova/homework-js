// 2. Напишите функцию, которая принимает строку и возвращает количество гласных в этой 
// строке.

const str = 'wetetiogbjk'.toLocaleLowerCase();
const vowels = 'eouiya';
let count = 0;

// 1
const result = () => {
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count++
    }
    return count
}
console.log(result());


// 2
const result_2 = () => str.split('').filter((el) => vowels.includes(el)).length;
console.log(result_2());


