const array1 = [1, 1, 1];

let sum = 0

const array2 = [2, 4, 8];

const reducer = array1.reduce((sum, item)=> sum + item);
const reducer2 = array2.reduce((sum, item)=> sum + item);

console.log(reducer);
console.log(reducer2);