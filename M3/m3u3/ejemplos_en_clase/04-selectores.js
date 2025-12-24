// Vamos a seleccionar elementos del DOM utilizando diferentes selectores
// Hay varias formas de seleccionar elementos en JavaScript:
// querySelector, querySelectorAll, getElementById, getElementsByClassName, getElementsByTagName, etc.
// Tengo que tener claro qué quiero seleccionar, si quiero seleccionar el h1, que sé que tengo uno sólo en mi html, uso querySelector, que me devuelve el primer elemento que encuentra que cumple el selector, la primera coincidencia.

const unosolo = document.querySelector('h1');
// console.log(unosolo); // Me devuelve el h1

const varios = document.querySelectorAll('h2');
// console.log(varios); // Me devuelve los 2 h2, un array con los dos elementos

const slecClase = document.querySelectorAll(".destacados");
// console.log(slecClase); // Me devuelve todos los elementos con la clase destacados

const conId = document.getElementById("caja");
// console.log(conId); // Me devuelve el elemento con id caja

const ejclases = document.getElementsByClassName("destacados");
// console.log(ejclases); // Me devuelve todos los elementos con la clase destacados

const parrafos = document.getElementsByTagName("p");
console.log(parrafos); // Me devuelve todos los elementos p