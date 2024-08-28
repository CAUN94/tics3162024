// Mostrar datos por pantalla usando console.log y innerHTML
console.log("Este es un mensaje en la consola.");

// Usar innerHTML para mostrar contenido en la página
document.getElementById('contenido').innerHTML = "<h2>Este contenido se muestra usando JavaScript y innerHTML</h2>";

// Declaración de variables
let edad = 25;

// Mostrar el valor de la variable usando innerHTML
document.getElementById('contenido').innerHTML += "<p>La edad es: " + edad + "</p>";

// Condicional If/Else
if (edad >= 18) {
    document.getElementById('contenido').innerHTML += "<p>Eres mayor de edad.</p>";
} else {
    document.getElementById('contenido').innerHTML += "<p>Eres menor de edad.</p>";
}

// Bucle For para mostrar una lista del 1 al 20
document.getElementById('contenido').innerHTML += "<h3>Lista del 1 al 20:</h3>";
for (let i = 1; i <= 20; i++) {
    document.getElementById('contenido').innerHTML += "<p>Número " + i + "</p>";
}

// Selección y modificación de divs específicos
// Asumimos que ya creaste la página de Tailwind
document.querySelector("header").style.backgroundColor = "lightblue";

// Creación y uso de objetos en JavaScript
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30
};

// Mostrar el objeto en la consola
console.log(persona);

// Mostrar los datos del objeto en la página
document.getElementById('contenido').innerHTML += "<p>Nombre: " + persona.nombre + "</p>";
document.getElementById('contenido').innerHTML += "<p>Apellido: " + persona.apellido + "</p>";
document.getElementById('contenido').innerHTML += "<p>Edad: " + persona.edad + "</p>";
