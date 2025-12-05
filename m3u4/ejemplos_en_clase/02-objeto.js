//JSON java script object notation, se pueden agrupar propiedades y valores de un objeto

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador',
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Springfield',
    },
    hobbies: ['futbol', 'cine', 'lectura']    
};
// console.log(persona);
// console.log(persona.hobbies); // accedo a la propiedad hobbie
console.log(`Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`);
    