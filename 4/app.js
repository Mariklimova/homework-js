// 4. Напишите функцию, которая принимает строку и возвращает ее, но все буквы переведены 
// в нижний регистр.


const str = 'WETETIOGBJK';
let newStr = '';

// 1
const result = () => {
    for (let i = 0; i < str.length; i++) {
        newStr += str[i].toLowerCase()
    }
    return newStr
}
console.log(result());


// 2
const result_2 = () => str.split('').map((el) => el.toLowerCase()).join('');
console.log(result_2());