//******************  Ejercicio 1 *********************

// Solución creando función promedio
function promedio(a, b) {
    return (a + b) / 2;
}

const resultado = promedio(10, 5);
console.log(resultado); // 7.5

// Solución creando función asignada a una variable
const promedio2 = function(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
let nota1 = (9);
let nota2 = (8);
console.log("El promedio es: " + promedio2(nota1, nota2));// El promedio es: 8.5

// Solución creando función flecha
const promedio3 = (n1, n2) => (n1 + n2) / 2;
console.log(promedio3(7, 6)); // 6.5

