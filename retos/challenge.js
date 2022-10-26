const arrFib = [0,1];

function functiion(limit){
for (let i = 2; i <= limit; i++) {
    arrFib.push(arrFib[i - 1] + arrFib[i - 2]);
    
}

return arrFib;
}

    

const rta = functiion(20);

console.log(rta);