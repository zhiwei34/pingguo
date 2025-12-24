//métodos que sirven para generar nuevos arrays a partir de otros

const numeros = [1,3,5,7,9]; //a partir de este array de numeros impares
// console.log(numeros);

//genero un nuevo array con los dobles de los numeros impares
const dobles = numeros.map(num => num * 2); 
// console.log(dobles); // [2,6,10,14,18]

//genero un nuevo array con los mayores a 5
const mayores = numeros.filter(num => num > 5);
// console.log(mayores); // [7,9]

//genero que busque el primer numero mayor a 5, siempre devuelve un único valor, la primera coincidencia
const numeros2 = [11,3,5,7,9];
const encontrar = numeros2.find(num => num > 5);
// console.log(encontrar); // 11

//metodo sort: permite, a partir de un array desordenado, generar un nuevo array ordenado
const frutas = ['banana', 'manzana', 'kiwi', 'pera', 'uva', 'naranja'];
frutas.sort();// ordena alfabeticamente
// console.log(frutas); // ordeno el array frutas: ['banana', 'kiwi', 'manzana', 'naranja', 'pera', 'uva']
const frutasOrdenadas = frutas.sort();
// console.log(frutasOrdenadas); // genero un nuevo array con frutas ordenadas: ['banana', 'kiwi', 'manzana', 'naranja', 'pera', 'uva']

const numerosDesordenados = [4,2,9,1,5,6];
numerosDesordenados.sort((a,b) => a - b); // ordeno de menor a mayor
console.log(numerosDesordenados);