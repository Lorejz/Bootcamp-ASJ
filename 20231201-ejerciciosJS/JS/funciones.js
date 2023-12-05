/* //funciones
//no es obligatorio que tenga parametros
function nombre_apellido( nombre, apellido ) { 

    let nombre_completo = nombre + ' '+ apellido;
    
    return nombre_completo; 
}

let nombre = nombre_apellido("Juan", "Dominguez");

console.log("mi nombre es "+nombre)

//Arrow function
// () =>{}

//let saludo = () => { console.log("Hola mundo")} */


//diferencia entre VAR, LET y CONST

// let ambito de bloque
// var ambito global

//const se declara un aconstate





























// MODIFICACION SISTEMA BAR

l/* et acumPrecio = 0;
let acumProducto = '';

function casoCoca() {
    alert("Gracias por pedir una Coca Cola, enseguida se la acercamos.");
    acumPrecio += 150;
    acumProducto += '\n 1 - Coca Cola'
}

function casoTostado() {
    alert("Gracias por pedir un tostado, enseguida se lo acercamos.");
    acumPrecio += 200;
    acumProducto += '\n 1 - Tostado'
}

function casoFactura() {
    alert("Gracias por pedir una factura, enseguida se la acercamos.");
    acumPrecio += 120;
    acumProducto += '\n 1 - Factura'

}

function chiste() {
    alert("¿Usted ha probado las empanadas sin relleno?...\nSon una masa :)");
}

function pedirCuentaPropina() {
    // Mostrar la cuenta y salir del bucle
    alert("Detalle Cuenta:\n El total de su gasto fue de $" + acumPrecio + " \n " + acumProducto);

    // Pedir propina
    let propina = parseInt(prompt("Si desea dejar propina, introduzca la cantidad que quiere dejar (si no, ingrese 0):"));

    if (propina !== 0) {
        acumPrecio += propina;
        alert("Sumando la propina, su total sería de $" + acumPrecio);
    }

    // Salir del bucle
    alert("Gracias por su visita. Hasta luego.");
    acumPrecio = 0;
    propina = 0;
    acumProducto = '';
}

function opciones(numero) {
    switch (numero) {
        case 1:
            casoCoca()
            break;
        case 2:
            casoTostado();
            break;

        case 3:
            casoFactura();
            break;

        case 4:
            chiste();
            break;

        case 5:
            pedirCuentaPropina();
            break;

        default:
            alert("Ingrese una opción correcta.");
            break;
    }
    return;
}


while (true) {
    let numero = parseInt(prompt("Bienvenido al Bar MendoBar:\nListado de Productos:\n1. Coca Cola - $150\n2. Tostado - $200\n3. Factura - $120\n4. Chiste\n5. Cuenta\nIngrese el número de su elección:"));
    opciones(numero);
} */

