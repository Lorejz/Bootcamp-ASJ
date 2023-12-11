

const colors = [
  "rgb(255, 0, 0)", // Rojo
  "rgb(0, 255, 0)", // Verde
  "rgb(0, 0, 255)", // Azul
  "rgb(255, 255, 0)", // Amarillo
  "rgb(255, 0, 255)", // Magenta
  "rgb(0, 255, 255)", // Cian
];

const colorDisplay = document.getElementById("colorDisplay");

const titulo = document.getElementById("h1");

//   colorDisplay.value = innerText;

let pickedColor = pickedColorChanger();

colorDisplay.innerText = pickedColor;

const square = document.querySelectorAll(".square"); //Devuelve un arreglo

for (let i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];

  console.log(square[i]);
}

square.forEach(function (elem) {
  elem.addEventListener("click", function () {
    const clickedColor = elem.style.backgroundColor;
    if (clickedColor === pickedColor) {
      alert("Felicitaciones ganaste");
      for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = pickedColor;
      }
      titulo.style.color = pickedColor;
    } else {
      alert("Fallaste. Intentalo de nuevo");

      elem.style.backgroundColor = "#232323";
    }
  });
});





function pickedColorChanger(){
    
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];

}


// // Función para seleccionar un color aleatorio del arreglo
// function pickColor() {
//     // Genera un número aleatorio entre 0 y la longitud del arreglo - 1
//     const randomIndex = Math.floor(Math.random() * colors.length);

//     // Devuelve el color correspondiente al índice aleatorio
//     return colors[randomIndex];
// }




// Creá una Función para asignarle a pickedColor un color aleatorio del Arreglo de colores. Para eso, creá la Función pickColor que devuelva un color random:
// Dentro de la Función pickColor creá un número aleatorio entre los Índices del Arreglo colors.
// Usá ese número para devolver un color del Arreglo.
// Asigná lo que devuelve la Función a la Variable pickedColor.