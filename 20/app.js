// 20. Напишите функцию, которая принимает массив строк и возвращает массив тех строк, 
// которые начинаются с буквы 'A'.


const arr = ['dtf', 'Arfdyuoijp', 'jhygu', 'gresehjryyuuou', 'Agj'];
const newArr = [];

// 1
const result = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 'A') newArr.push(arr[i])
    }
    return newArr
}
console.log(result());


// 2
const result_2 = () => arr.filter((el,index) => el[0] == 'A');
console.log(result_2());