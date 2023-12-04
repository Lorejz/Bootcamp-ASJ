let acumPrecio = 0;
let acumProducto = '';

while (true) {
    let numero = parseInt(prompt("Bienvenido al Bar MendoBar:\nListado de Productos:\n1. Coca Cola - $150\n2. Tostado - $200\n3. Factura - $120\n4. Chiste\n5. Cuenta\nIngrese el número de su elección:"));

    switch (numero) {
        case 1:
            alert("Gracias por pedir una Coca Cola, enseguida se la acercamos.");
            acumPrecio += 150;
            acumProducto += '\n 1 - Coca Cola'
            break;

        case 2:
            alert("Gracias por pedir un tostado, enseguida se lo acercamos.");
            acumPrecio += 200;
            acumProducto += '\n 1 - tostado'
            break;

        case 3:
            alert("Gracias por pedir una factura, enseguida se la acercamos.");
            acumPrecio += 120;
            acumProducto += '\n 1 - factura'
            break;

        case 4:
            alert("¿Usted ha probado las empanadas sin relleno?...\nSon una masa :)");
            break;

        case 5:
            // Mostrar la cuenta y salir del bucle
            alert("Detalle Cuenta:\n El total de su gasto fue de $" + acumPrecio+" \n "+acumProducto);

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
            break;

        default:
            alert("Ingrese una opción correcta.");
            break;
    }
}

