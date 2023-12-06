
let operando;
let operador= "";

//numeros
let display = document.getElementById("display");

let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");

//Operadores
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");

let limpiar = document.getElementById("limpiar");
let igual = document.getElementById("igual")


uno.addEventListener("click", function(){
    display.value = display.value + 1;
})
dos.addEventListener("click", function(){
    display.value = display.value + 2;
})
tres.addEventListener("click", function(){
    display.value = display.value + 3;
})
cuatro.addEventListener("click", function(){
    display.value = display.value + 4;
})
cinco.addEventListener("click", function(){
    display.value = display.value + 5;
})
seis.addEventListener("click", function(){
    display.value = display.value + 6;
})
siete.addEventListener("click", function(){
    display.value = display.value + 7;
})
ocho.addEventListener("click", function(){
    display.value = display.value + 8;
})
nueve.addEventListener("click", function(){
    display.value = display.value + 9;
})
cero.addEventListener("click", function(){
    display.value = display.value + 0;
})


suma.addEventListener("click", function(){
    operando = display.value;
    display.value = null;
    operador = "+"
})

resta.addEventListener("click", function(){
    operando = display.value;
    display.value = null;
    operador = "-"
})

multiplicacion.addEventListener("click", function(){
    operando = display.value;
    display.value = null;
    operador = "*"
})

division.addEventListener("click", function(){
    operando = display.value;
    display.value = null;
    operador = "/"
})

igual.addEventListener("click", function(){
    resolver(operador);
})

limpiar.addEventListener("click", function(){
    ce();
})

function resolver (){
    if(!isNaN(operando) && !isNaN(display.value)){
        switch(operador){
            case "+":
                display.value = parseFloat(operando) + parseFloat(display.value)
                break;
            case "-":
                display.value = parseFloat(operando) - parseFloat(display.value)
                break;  
            case "*":
                display.value = parseFloat(operando) * parseFloat(display.value)
                break;   
            case "/":
                if( parseFloat(display.value) === 0 ){
                    alert("No se puede divir por cero")
                }else{
                    display.value = parseFloat(operando) / parseFloat(display.value)
                }
                break;
            default:
                alert("operador no conocido");
                break;
        }
    }else{
        alert("operandos no numericos")
    }
}

function ce(){
    display.value = null;
    operador = null;
    operando = null;
}