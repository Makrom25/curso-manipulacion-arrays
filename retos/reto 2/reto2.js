const numbers = [2, 4, 5, 6];
function solution(array) {
	return array.map(array => array * 2)
}; 
const output = solution(numbers)
console.log(`solution([${numbers}])`)
console.log(output)
