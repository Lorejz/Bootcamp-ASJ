

/* let numero = parseInt(prompt("Ingrese el tamaño máximo de la pirámide"));

let ast = '*';

//  pirámide creciente
for (let i = 1; i <= numero; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row = row + ast;
    }

    console.log(row);
}

// piramide decreciente
for (let i = numero - 1; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row =row + ast;
    }

    console.log(row);
} */


let numero = parseInt(prompt("Ingrese el número del cual desea calcular el factorial"));
let acumNumero = 1;

for (let i = 1; i <= numero; i++) {
    acumNumero = (acumNumero*i) ;
}

alert("El factorial de " + numero + " es: " + acumNumero);
