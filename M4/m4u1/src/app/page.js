import { TituloPrincipal } from "@/components/tituloPrincipal";

const titulo2 = "Aprendemos Next";

import { ListaProductos } from "@/components/listaSuper";

const productos = [
  { id: 1, nombre: "Leche", precio: 1.2 },
  { id: 2, nombre: "Pan", precio: 0.8 },
  { id: 3, nombre: "Huevos", precio: 2.5 },
];

import { NovedadItem } from "@/components/novedadItem";

const contenidoNovedad = {
  id: "1",
  titulo: "Next.js lanza componentes",
  subtitulo: "La versión 15 introduce ...",
  autor: "Flavia Ursino",
  cuerpo: "El nuevo enfoque en la arquitectura de Server Components permite ...",
}

import { Contador } from "@/components/contador";

import { BotonLuz } from "@/components/apagar-encender";

import { TituloTarea } from "@/components/tarea-ejerc0";

const titulo4 = ["Ejercicio 1: multiples propiedades + destructuring", "Ejercicio 2: estado"];
const [tituloEj1, tituloEj2] = titulo4;

import { Producto } from "@/components/tarea-ejerc1";

const contenidoProducto = {
  id: "101",
  nombre: "Camiseta",
  categoria: "Ropa",
  descripcion: "Camiseta de algodón 100%.",
}

import { BotonRebajas } from "@/components/rebajas";

export default function Home() {
  return (
    <div>
      <h2>Ejemplos props</h2>
      {/* Componente simple y que ademas se puede reutilizar */}
      <TituloPrincipal titulo="Hola curso" />
      <TituloPrincipal titulo={titulo2} />
      <hr />
      {/* componente para listar un array */}
      <ListaProductos items={productos} />
      <hr />
      {/* multiple propiedades + destructuring */}
      <NovedadItem
        title={contenidoNovedad.titulo}
        subtitle={contenidoNovedad.subtitulo}
        author={contenidoNovedad.autor}
        body={contenidoNovedad.cuerpo}
      />
      <hr />
      <h2>Estados</h2>
      <Contador />
      <hr />
      <BotonLuz />
      <hr />
      {/* Inicio de Tarea ***********************************************************************************  */}
      <TituloTarea titulo3="Tarea" />
      <TituloTarea titulo3={tituloEj1} />
      <hr />
      <Producto
        id={contenidoProducto.id}
        nombre={contenidoProducto.nombre}
        categoria={contenidoProducto.categoria}
        descripcion={contenidoProducto.descripcion}
      />
      <hr />
      <TituloTarea titulo3={tituloEj2} />
      <hr />
      <BotonRebajas />
      {/* Fin de Tarea **************************************************************************************  */}

    </div>
  );
}
