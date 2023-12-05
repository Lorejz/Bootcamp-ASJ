/* //nombre de etiqueta
const parrafos = document.getElementsByTagName("p");


parrafos[0]; //lorem

parrafos[1]; //hola

//atravez del name

let elem = document.getElementsByName("edad");


//atravez de ID

let elem2 = document.getElementById("boton1");

//atravez de class

let elem3 = document.getElementsByClassName("clase");

//QuerySelector

let elem4 = document.querySelector(".mensaje"); //puedo hacer referencia a la clase que necesitam


//ejemplos


let enlace = document.getElementById("link")

console.log(enlace.href);

 */


/* //selecciono elemento

let btn_submit = document.getElementById("enviar");

//eventlistener = escuchador de eventos
btn_submit.addEventListener("click", function(){

    let input_txt = document.getElementById("text");
    console.log(input_txt.value);

})
 */


let btn_submit = document.getElementById("enviar");

let nombreh1 = document.getElementById("nombre1");
let nombreh2red = document.getElementById("apellido2")

btn_submit.addEventListener("click", function(){

    let input_name = document.getElementById("nombre");
    let input_lastname = document.getElementById("apellido");

    nombreh1.innerHTML = input_name.value;
    nombreh2red.innerHTML = input_lastname.value;


})