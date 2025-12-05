//28.02'
// Destructuring arrays sirve para extraer valores de un array y asignarlos a variables individuales

const novedades = {
    titulo: 'Nuevo producto disponible',
    subtitulo: 'Compra ahora y obtén un descuento',
    cuerpo: 'Estamos emocionados de anunciar el lanzamiento de nuestro nuevo producto. ¡No te lo pierdas!'
};

const titulo2 = novedades.titulo;
// console.log(titulo2); // 'Nuevo producto disponible'

const subtitulo2 = novedades.subtitulo;
// console.log(subtitulo2); // 'Compra ahora y obtén un descuento'

// Destructuring del objeto novedades
const { titulo, subtitulo, cuerpo } = novedades;
console.log(titulo); // 'Nuevo producto disponible'
console.log(titulo, subtitulo); // 'Nuevo producto disponible' 'Compra ahora y obtén un descuento'