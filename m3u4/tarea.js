// Ejercicio1:

const alumnos = [
{
nombre: 'Juan Gomez',
nota: 7
}, {
nombre: 'Pedro Rodriguez',
nota: 4
}, {
nombre: 'Roxana García',
nota: 8
}, {
nombre: 'Luciano Lopez',
nota: 5
}, {
nombre: 'Fernanda Gimenez',
nota: 6
}, {
nombre: 'Florencia Martinez',
nota: 10
}, {
nombre: 'Raul Sanchez',
nota: 7
}, {
nombre: 'Sandra Figueroa',
nota: 8
}
];

// Genero un nuevo array con los q aprobaron (nota mayor o igual a 7)
const alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7);
// console.log('Alumnos aprobados:', alumnosAprobados);

//********************************************************************************* */
// Ejercicio 2

const producto = {
id: 123,
nombre: "Auriculares inalámbricos",
precio: 120000,
stock: 25,
categoria: "Electrónica"
};

// Desestructuro el objeto para obtener nombre, precio y stock
const { nombre, precio, stock } = producto;
console.log(`El producto es: ${nombre}, su precio es: $${precio} y el stock disponible es: ${stock} unidades.`);


pelota = {color: 'rojo', radio: 25};
const {color} = pelota;
console.log(color);