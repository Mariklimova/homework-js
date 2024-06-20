// 36. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все 
// строки переведены в нижний регистр.



const arr = ['DTF', 'RFDYUOIJP', 'JHYGU', 'GRESEHJRYYUUOU', 'GJ'];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toLowerCase())
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.map((el) => el.toLowerCase());
console.log(result_2());