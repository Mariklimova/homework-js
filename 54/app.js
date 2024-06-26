// 54. Напишите функцию, которая принимает строку и возвращает новую строку, где 
// повторяющиеся символы заменены на один символ. Например, для строки "aaabbbcc" 
// результат должен быть "abc"


const str = 'aaabbbcc';
let newStr = ''
// 1
const result = () => {
    for (let i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i])) newStr += str[i]
    }
    return newStr
}
console.log(result());



// 2
const result_2 = () => str.split('').filter((el, index) => index == str.split('').indexOf(el)).join('')
console.log(result_2());


