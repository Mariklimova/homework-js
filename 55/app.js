// 55. Напишите функцию, которая принимает число n и возвращает двумерный массив, 
// представляющий треугольник чисел Флойд до n строк. Например, для n = 5 результат 
// должен быть:
// [
//  [1],
//  [2, 3],
//  [4, 5, 6],
//  [7, 8, 9, 10],
//  [11, 12, 13, 14, 15]
// ]



const n = 5;
const arrWrapper = [];

// 1
const result = () => {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        const arrItem = [];
        for (let j = 1; j <= i; j++) {
            arrItem.push(num);
            num++;
        }
        arrWrapper.push(arrItem);
    }
    return arrWrapper
}
console.log(result());






