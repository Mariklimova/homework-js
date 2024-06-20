// 34. Напишите функцию, которая принимает массив строк и возвращает массив тех строк, 
// которые содержат подстроку 'abc'.

const arr = ['rfdabcyuoijp', 'abcjhygu', 'gresehjryyuuou', 'gj'];
const background = 'abc';




// 2
const result_2 = () => arr.filter((el) => /[abc]+/gm.test(el));
console.log(result_2());


