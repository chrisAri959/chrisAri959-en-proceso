

var titulo = document.querySelector(".titulo");
titulo.setAttribute("title", "Por tiempo limitado");

             /*      PROMO       */   
var x = document.getElementById("myBtn2");
x.addEventListener("click", functionUno);
x.addEventListener("click", functionDos);
x.addEventListener("click", functionTres); 

function functionUno() {
	alert("Ganaste una tirada de Tarot!");
}

function functionDos() {
	alert("No te olvides de compartir la página, gracias")
}

function functionTres() {
	alert("Muchas gracias por tu visita, NAMASTE")
}