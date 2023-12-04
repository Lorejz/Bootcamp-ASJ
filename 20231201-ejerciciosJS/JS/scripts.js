
// Ejercicio "Cantidad De Caracteres"
 //var mensajeEjercicio_1 = "Ingrese un texto";
 //var inputTexto = prompt(mensajeEjercicio_1); //input usuario 
 //console.log(inputTexto.length); //print en consola de cantidad de caracteres

// Ejercicio "Calculadora De Edad"
 //var mensajeEjercicio_2 = "Ingrese su edad";
 //var inputEdad = prompt(mensajeEjercicio_2); //input usuario
 //var calculoDias = inputEdad * 365.

 //alert("Tiene "+calculoDias+" dias");

// Ejercicio "Suma De Valores"
 //var mensajeEjercicio_3_1 = "Ingrese un valor, num1"
 //var mensajeEjercicio_3_2 = "Ingrese un valor, num2"   
 //var inputNum1 = parseInt(prompt(mensajeEjercicio_3_1)); //input num1
 //var inputNum2 = parseInt(prompt(mensajeEjercicio_3_2)); //input num2
 //var resultado = inputNum1 + inputNum2;

 //alert("El resultado de num1 y num2 es: "+resultado);

// Ejercicio "Calculador de abastecimiento de por vida"
 // Ejercicio 1
    //var miEdad = 23;
    //var miEdadMaxima = 85;
    //var snackFavorito = "Chetos";
    //var snackXdia = 5;
    //var snackQueComere = (miEdadMaxima-miEdad)*snackXdia

   // alert("Comere "+snackQueComere+" "+snackFavorito+" antes de morir")
 
 // Ejercicio 2
 //var cantDiasVacas = 15;
 //var presupuestoVacas = 150000;
 //var comida = 30;
 //var presupuestoXcomida = presupuestoVacas/(cantDiasVacas*comida)

// alert("Podés gastar "+presupuestoXcomida+" pesos en cada comida para que te alcance la plata durante los "+cantDiasVacas+" días de viaje.");

//let edad = 20;

// Evaluación condicional
//if (edad >= 18) {
  // Código a ejecutar si la condición es verdadera
//  console.log("Eres mayor de edad");
//} else {
  // Código a ejecutar si la condición es falsa
//  console.log("Eres menor de edad");
//}

//let num = parseInt( prompt("ingrese un numero"));


//switch(num % 2){
//  case 0:
//    alert(num + " es un número par.");
  //  break;

  //case 1:
   // alert(num + " es un número impar.");
    //break;

  //default:
   // alert("Ingrese un valor correcto")
    //break;

//}

/*
let inputWord = prompt("ingrese una palabra de las establecidas");

switch(inputWord){
  case 'casa': 
    alert("house")
    break;

  case 'perro':
    alert("dog")
    break;

  case 'pelota':
    alert("ball")
    break;

  case 'arbol':
    alert("tree")
    break;

  case 'genio':
    alert("smarter")
    break;

  default:
    alert("Ingrese una palabra de las establecidas por favor")
}

*/
/*
let inputWord = prompt("ingrese una valoracion para la pelicula, 'Muy Mala','Mala','Mediocre','Buena','Muy Buena'");

switch(inputWord){
  case 'Muy Mala': 
    alert("Calificaste la pelicula "+inputWord+" te pedimos disculpas")
    break;

  case 'mala':
    alert("Calificaste la pelicula "+inputWord+" te pedimos disculpas")
    break;

  case 'Mediocre':
    alert("Calificaste la pelicula "+inputWord+" te pedimos disculpas")
    break;

  case 'Buena':
    alert("Calificaste la pelicula "+inputWord+" muchas gracias")
    break;

  case 'Muy Buena':
    alert("Calificaste la pelicula "+inputWord+" muchas gracias")
    break;

  default:
    alert("Ingrese una palabra de las establecidas por favor o valide mayus")
}

alert("Muchas gracias por valorar el sitio.")
*/

/*
while(condicion){
  //mientras se cumpla la condicion se repite
}
*/

/*
let num = 1;

while(num <= 5){
  console.log(num);
  num++;
}
*/
/*
let num = parseInt( prompt("ingrese un numero"));

let numInicio = num;

let acum = 0;

while(numInicio >= num){
  acum = acum + numInicio;
  numInicio--;
}

let promedio = (acum / num);

alert("el promedio es"+promedio)
alert(acum)

*/

/*
let num = parseInt(prompt("Ingrese un número"));
let numInicio = 1;
let acum = 0; 

  if (num > 0 ) {

  while (numInicio <= num) {
    acum = acum + numInicio; 
    numInicio++;
  }

  let promedio = acum / num;


  alert("La suma de los números hasta " + num + " es " + acum + " y el promedio es " + promedio);

  } else {
    alert("Ingrese un valor positivo")
}
*/

/*
let contadorPositivos = 0;

while (true) {
  let numero = parseInt(prompt("Ingrese un número entero (ingrese un número negativo para salir o cero):"));

  if (numero <= 0) {
    break; 
  }

  if (numero > 0) {
    contadorPositivos++; 
  }

}

alert("Ha ingresado " +contadorPositivos+ " número(s) positivo(s)");

*/


/*
OPERADORES DE COMPARACION

< > >= <= == != 

OPERADORES LOGICOS

&& ---> AND
|| ---> OR
!  ---> NOT

*/





// var/let/const nombre_variable;

//utilizar camel case, ej: listadoClientes