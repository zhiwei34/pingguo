'use client';
import React, {useState} from "react";

// Componente del Cliente: necesita interacción y estado 46'40
export function BotonLuz() {
    // Inicialización del Estado
    const [isOn, setIsOn] = useState (true); // true > encendido

    // Manejo del click
    const handleToggle = () => {

        // operador ! > negación
        setIsOn(!isOn); // false > apagado
    };

    return (
        <button onClick={handleToggle}>
            {/* Texto dinámico basado en el Estado */}
            {isOn ? 'Encendido' : 'Apagado'}
        </button>
    )
}