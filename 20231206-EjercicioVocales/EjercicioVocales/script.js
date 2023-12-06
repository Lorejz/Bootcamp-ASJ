let inputText = document.getElementById("inputText");
let resultadoDiv = document.getElementById("resultado")


inputText.addEventListener('input', function() {
    // Obtén el valor del input y realiza el reemplazo de vocales
    let textoOriginal = inputText.value;
    let textoModificado = textoOriginal.replace(/[aeiouAEIOU]/g, '_');

    // Muestra el resultado en el div
    resultadoDiv.textContent = textoModificado;
  });