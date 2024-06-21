// 38. Напишите функцию, которая принимает строку и возвращает новую строку, где все гласные 
// заменены на '*'.


const str = 'wetetiogbjk jggue'.toLocaleLowerCase();
const vowels = 'eouiya';
let resStr = '';

// 1
const result = () => {
    for (let i = 0; i < str.length; i++) {
        vowels.includes(str[i]) ? resStr += '*' : resStr += str[i]
    }
    return resStr
}
console.log(result());


// 2
const result_2 = () => str.split('').map((el) => vowels.includes(el) ? '*' : el).join('');
console.log(result_2());


