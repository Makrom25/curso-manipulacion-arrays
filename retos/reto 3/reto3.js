function solution(array){
 	return array.map(item => ({
 		...item,
 		taxes: Math.trunc(item.price * .19)
 	}))
}; 