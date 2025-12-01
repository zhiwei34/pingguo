const contenedor = document.querySelector('.contenedor');
console.log(contenedor);

const boton = document.getElementById('btn');
console.log(boton);

contenedor.addEventListener('mouseover', function() {
    contenedor.style.backgroundColor = 'lightblue';
});

contenedor.addEventListener('mouseout', function() {
    contenedor.style.backgroundColor = 'red';
});

boton.addEventListener('click', function() {
    if (contenedor.style.display == '') { //uso if porque no se si el boton está apretado o no, si display es vacío, es decir q no tengo nada aplicado, entonces cuando hago click en el botón, oculto el contenedor:
        contenedor.style.display = 'none';
    } else { // si ya está oculto, lo vuelvo a mostrar:
        contenedor.style.display = '';
    }
    });