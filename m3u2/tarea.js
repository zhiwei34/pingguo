//Ejercicio 1

const producto = 'Laptop';
const precio = 1200000;
const disponible = true;
console.log(`La ${producto} cuesta $${precio} y su disponibilidad es ${disponible}`);

//Ejercicio 2

const metros = 110000;
if (metros < 1000) {
    console.log('Ir a pie');
} else if (metros >= 1000 && metros < 10000) {
    console.log('Ir en bicicleta');
} else if (metros >= 10000 && metros < 30000){
    console.log('Ir en colectivo');
} else if (metros >= 30000 && metros < 100000) {
    console.log('Ir en auto');
} else {
    console.log('Ir en avión');
}

//Ejercicio 3

const productos = ['Tablet', 'Monitor', 'Mouse', 'Teclado', 'Celular'];

for (let i = 0; i < productos.length; i++) {
    console.log(`¡No te olvides de comprar: ${productos[i]}!`);
}

//Ejercicio 4

const numeros = [35, 3, 15, 95, 60];
let elmayor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > elmayor) {
        elmayor = numeros[i];
    }
}    

console.log(`El número mayor es: ${elmayor}`);