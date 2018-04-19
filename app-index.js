var name = prompt('¿Cual es tu nombre?');
name = name.toUpperCase();

var elemento = document.getElementById('nombre');
elemento.innerHTML = "Bienvenido " +name;


function myFunction() {
	if (confirm("¿Quieres Jugar?")) {

		document.getElementById("push").style.visibility = "visible";
		document.getElementById("demo").style.visibility = "hidden";

	}
	else {

		document.getElementById("demo").style.visibility = "visible";
		document.getElementById("push").style.visibility = "hidden";
	}
}
