let numero = parseInt(prompt("Ingrese el numero del cual quiere la serie de Fibonacci"));

let arrayFibb = [0,1];

for(let i=2 ; i < numero ; i++){
    
    arrayFibb[i]=arrayFibb[i-1]+arrayFibb[i-2]
    
}

console.log(arrayFibb);
