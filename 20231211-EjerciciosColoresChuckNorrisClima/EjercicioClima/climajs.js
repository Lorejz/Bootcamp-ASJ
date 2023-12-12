let boton = document.getElementById("boton");
let ciudad = document.getElementById("ciudad");
let temperatura = document.getElementById("temperatura");
let wicon = document.getElementById("wicon");
let descripcion = document.getElementById("descripcion");

function cargarCiudad(){
    let input = document.getElementById("usuarioInput");
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid=fdd533266e28101881f610f2b8f1ebe1")
    .then((response) => response.json()) 
    .then((json) => {
      console.log(json);
      ciudad.textContent = json.name;
      temperatura.textContent = json.main.temp;
      wicon.src = "https://openweathermap.org/img/wn/"+json.weather[0].icon+"@2x.png"
      descripcion.textContent = "Principal "+json.weather[0].main+" desc. "+json.weather[0].description;
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
}

boton.addEventListener("click",()=>{
    cargarCiudad();
    document.querySelector(".container").style.visibility = "visible"
});