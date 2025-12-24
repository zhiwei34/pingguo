export function Producto(props) {
    const { id, nombre, categoria, descripcion } = props;
    return (
        <div>
            <h2>{id}</h2>
            <h3>{nombre}</h3>
            <h5>{categoria}</h5>
            <p>{descripcion}</p>
        </div>
    );
}