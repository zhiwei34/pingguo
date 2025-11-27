// for: se usa para recorrer un bloque de código un número determinado de veces. Por ejemplo, recorrer los elementos de un array, los registros de una base de datos, etc.

const frutas = ['manzana', 'banana', 'cereza', 'durazno'];

// console.log(frutas)
// console.log(frutas[2]); // devuelve 'cereza' porque es el elemento en la posición 2 del array (empezando desde 0)
console.log(frutas.length); // devuelve 4 porque hay 4 elementos en el array

for (let i = 0; i < frutas.length; i++) {
    console.log(`Tenemos ${frutas[i]}`);
}