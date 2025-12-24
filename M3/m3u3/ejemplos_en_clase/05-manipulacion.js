const titulo = document.querySelector('h1')
// console.log(titulo);

//Manipulación de estilos con js

//con style (color, backgroundColor, fontSize, margin, padding, etc)

titulo.style.color = 'red'

//con classList, sirve para agregar, cambiar, remover estilos

titulo.classList.add('fondo')

// Vamos a ocultar

const boton = document.getElementById('boton')
const texto = document.getElementById('texto')
// console.log(boton,texto);

boton.addEventListener('click', ()=>{
    texto.classList.toggle('invisible') //toggle agrega o remueve la clase dependiendo si ya la tiene o no
}) // lo que hace es escuchar el evento click en el boton y cuando se da click se ejecuta la función que tiene como acción alternar la clase invisible en el texto

//Métodos de classList

//.add -> agrega una clase
//.remove -> elimina una clase
//.toggle -> agrega o remueve una clase dependiendo si ya la tiene o no
//.replace -> reemplaza una clase por otra
//.contains -> devuelve true o false si el elemento tiene o no la clase
//.length -> devuelve la cantidad de clases que tiene el elemento

const aclaracion = document.getElementById('aclaracion')
console.log(aclaracion)

aclaracion.innerHTML = "<h1>Este es un nuevo texto</h1>" //innerHTML permite modificar el contenido HTML de un elemento
aclaracion.innerText = "Este es un nuevo texto sin etiquetas HTML" //innerText permite modificar el contenido de texto de un elemento sin interpretar etiquetas HTML

