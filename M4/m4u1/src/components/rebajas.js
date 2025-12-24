'use client';
import React, { useState } from "react";

export function BotonRebajas() {
    // Inicialización del Estado
    const [isOn, setIsOn] = useState(true); // true > rebajas activadas

    // Manejo del click
    const handleToggle = () => {

        // operador ! > negación
        setIsOn(!isOn); // false > rebajas desactivadas
    };

    return (
        <div>
            <p>Quiero hacer la compra cuando</p>
            <button onClick={handleToggle}>
                {/* Texto dinámico basado en el Estado */}
                {isOn ? 'haya Rebajas' : 'no haya Rebajas'}
            </button>
        </div>
    )
}