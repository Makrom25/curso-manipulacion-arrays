const totals = [1,2,3,4];


// for (let i = 0; i < totals.length; i++) {
//     const element = totals[i];
//     sum = sum + element;
// }



const rta = totals.reduce((sum, element)=> sum + element);

console.log('rta', rta);