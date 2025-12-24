'use client';
import React, {useState} from "react";

// Componente del Cliente: necesita interacción y estado 41'
export function Contador() { 
    const [ contador, setContador] = useState(0); // Estado inicial
    const handleClick = () => {
        setContador (contador +1); //Actualiza el estado (exclusivo de cliente)
    };

    return (
        <div>
            <p>Has hecho click {contador} veces.</p>
            {/* Manejo de evento del lado del cliente */}
            <button onClick={handleClick}>
                Incrementar
            </button>
        </div>
    )
}