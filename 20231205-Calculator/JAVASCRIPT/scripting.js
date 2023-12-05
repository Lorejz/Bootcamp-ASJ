


//boton1
let boton1 = document.getElementById("btn_1");

boton1.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 1;
});

//boton2
let boton2 = document.getElementById("btn_2");

boton2.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 2;
});


//boton3
let boton3 = document.getElementById("btn_3");

boton3.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 3;
});

//boton4
let boton4 = document.getElementById("btn_4");

boton4.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 4;
});

//boton5
let boton5 = document.getElementById("btn_5");

boton5.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 5;
});

//boton6
let boton6 = document.getElementById("btn_6");

boton6.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 6;
});

//boton7
let boton7 = document.getElementById("btn_7");

boton7.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 7;
});

//boton8
let boton8 = document.getElementById("btn_8");

boton8.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 8;
});

//boton9
let boton9 = document.getElementById("btn_9");

boton9.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 9;
});

//boton0
let boton0 = document.getElementById("btn_0");

boton0.addEventListener("click", function () {
    let display = document.getElementById("display");
    display.value += 0;
});


let display = document.getElementById("display");
//Operadores

let botonesOperador = document.querySelectorAll('.operador');

botonesOperador.forEach(function(boton) {
    boton.addEventListener('click', function() {
        
        let operadorClickeado = this.id;
        
        switch (operadorClickeado) {
            case "resultado":
                if(operadorUsado="suma"){
                    display.value = display.value + auxiliarDisplay; 
                }
                break;

            case "suma":
                let operadorUsado = "";
                let auxiliarDisplay = 0;
                auxiliarDisplay = display.value;
                display.value = 0;
                operadorUsado = "suma";

                break;
        
            case "resta":

                break;
        
            case "multiplicacion":

                break;
        
            case "division":
  
                break;
        
            default:
                alert("Operador no reconocido");

                break;
        }
    });
});





///////////////////////////////////////////////////////////////////////////
//suma
let botonSuma = document.getElementById("suma");

botonSuma.addEventListener("click", function () {
    let display = document.getElementById("display");
    auxiliarDisplay = display.value;
    display.value = "";
});


//igual-resultado
let botonResultado = document.getElementById("equal");

botonResultado.addEventListener("click", function () {
    let display = document.getElementById("display");

});