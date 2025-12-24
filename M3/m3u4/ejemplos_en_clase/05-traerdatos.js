// Vemos cómo hago para traer la información.
// Usamos fetch para hacer una petición a un archivo JSON y obtener datos.
// Vemos una estructura de datos en una api de una serie. A veces recibimos mucha información, en este caso una estructura de objeto. 
// Podría hacer un destructuring y quedarme con el name, status y type nomas. Es una información que la tengo de manera externa.
// Ahora no vamos a imprimir los datos, más adelante, pero para ver, en el html, cómo trae en la consola toda la información.
// Declaramos una función sincrónica porque no sabemos cuándo vamos a conectar o traer esos datos.
// En este caso hay un manejo de errores con try catch, porque a veces la petición puede fallar, puede pasar que no se conecte, sería un error.
// Te dice, no me puedo conectar con, el nombre de la variable que trae tal información. En este caso, mostrame y decime cuál es el console.log
// del error que se produjo.
// Cuando trabajemos con la base de datos, se va a encargar el backend de procesar la información y el resultado va a ser una estructura jason.
// Una estructura jason para q lo pueda recibir next. Next no se va a comunicar, lo va a procesar node y se lo va a dar, le va a devolver una
//estructura de jason. Por ahora no tenemos esos temas y vamos a usar la api que ya está armada, una página q me está devolviendo una información.
// Declaro respuesta, como es una fc asincrónica, con el await me va a traer la información, va a decir cuando se procese respuesta me voy a 
// comunicar y traigo la info a traves del fetch. Trae la info pero todavía la tengo q procesar. Sólo generé la variable q se comunica con la url.
// Después, para procesar la info, uso el método .json() que me permite transformar esa información en una estructura jason.
// Esa estructura jason la voy a guardar en data. Y después hago un console.log de data para ver qué info me trajo.
// Finalmente llamo a la función para que se ejecute.
// Al abrir el html, con el inspector me muestra la info que trajo de la api.

async function traerDatos() {
    try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character/');
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log('No se pudo conectar con la API', error);
    }
}
traerDatos();