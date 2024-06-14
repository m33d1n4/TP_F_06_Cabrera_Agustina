let boton = document.getElementById("miBoton");
let contador = document.getElementById("contador");

var likes = 0;

boton.addEventListener("click", function(){
    likes++;
    contador.textContent = likes + " Likes";

});

