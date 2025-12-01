document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciono los elementos del DOM
    const textArea = document.getElementById('textoArea');
    const contadorElemento = document.getElementById('contador');
    
    // Obtengo el límite máximo de caracteres definido en el HTML
    const limiteMaximo = textArea.getAttribute('maxlength');

    // 2. Defino la función que actualiza el contador
    function actualizarContador() {
        // Obtengo la longitud actual del texto
        const longitudActual = textArea.value.length;
        
        // Actualizo el contenido del span con la longitud
        contadorElemento.textContent = longitudActual;
        
    }

    // 3. Asigno el evento 'input' al textarea
    // El evento 'input' se dispara inmediatamente cuando el valor de un elemento cambia.
    textArea.addEventListener('input', actualizarContador);
    
});