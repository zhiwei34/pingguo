function calcularDescuento(precio, descuento) {
    const desc = (precio * descuento) / 100;
    const preciocondescuento = precio - desc;
    return preciocondescuento;
}

const precioprenda = 10500;
const descuentohoy = 35;

const preciofinal = calcularDescuento(precioprenda, descuentohoy);

console.log(`El precio final con descuento es: $${preciofinal}`);
console.log(`La prenda tiene el siguiente precio: $${precioprenda}`);
console.log(`El precio de la prenda es: ${precioprenda} y vamos a aplicarle el descuento del ${descuentohoy}%`);



