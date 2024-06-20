// 28. Напишите функцию, которая принимает строку и возвращает новую строку, где все буквы 
// переведены в противоположный регистр.



const str = 'fyuGihi bhyG Gtftfhdctuuiuu Gy hvyTyu kjUy';

// 1
const result = () => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        str[i] === str[i].toLowerCase() ? newStr += str[i].toUpperCase() : newStr += str[i].toLowerCase()
    }
    return newStr
}
console.log(result());


// 2
const result_2 = () => str.split('').map((el) => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('');
console.log(result_2());


