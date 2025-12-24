//El operador spread (...) sirve para obtener todas las propiedades de un objeto o los elementos de un array. Es de suma utilidad para cuando necesitamos hacer copias de objetos o listas modifi cando alguno de los valores o agregando nuevos.

const vocales = ['a', 'e', 'i'];
// console.log(vocales); // ['a', 'e', 'i']

const vocalesCompletas = [...vocales, 'o', 'u']; // uso spread para copiar los elementos del array vocales y agregar nuevos
// console.log(vocalesCompletas); // ['a', 'e', 'i', 'o', 'u']

const numeros = [1, 2, 8];
const masNumeros = [0, 4, 5];
const total = [...numeros, ...masNumeros]; // uso spread para copiar los elementos de ambos arrays en uno nuevo
console.log(total); // [1, 2, 8, 0, 4, 5]
// sirve por ejemplo para traer datos de novedades de una base de datos y agregar una imagen [...novedades, ...imagen]

