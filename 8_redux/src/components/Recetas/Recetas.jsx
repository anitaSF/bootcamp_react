import { useDispatch, useSelector } from "react-redux";


function Recetas() {
    const listaReceta = useSelector((state) => state.recetas); // Variable para alojar el contenido seleccionado mediante el Hook "useSelector" de otro archivo del store, en este caso el stado general creado en la funcion que combina los reducer "rootReducer" definida en el archivo "index.js". Esta nueva variable será un array

    const dispatch = useDispatch(); // Variable para alojar el Hook "useDispatch" que disparará los reducers asociados al caso llamado en la función manejadora del evento que lo activa evento, en este caso handleClick

    const handleClick = (e) => {
        dispatch({ type: 'REMOVE_RECETA', payload: e.target.id });
    } // Función manejadora del evento onClick definido sobre el <button>X</button> para eliminar receta. Esta función llama mediante el "dispatch" al "case type: REMOVE_RECETA" y le pasa el "id" del item seleccionado en el "payload" para que se ejecute el reducer respectivo (mediante el método .filter elimina el item)


    return (
        <div>
            <ul>
                {/* Método .map aplicado sobre el array "listaReceta" creado arriba con el contenido importado del "store", para pintar el listado de recetas. Al ser un método .map requiere el atributo "key" que se define con la propiedad id del objeto receta (rec.id) */}
                {listaReceta.map((rec) => (
                    <li key={rec.id}>
                        {rec.nombre}
                        <button id={rec.id} onClick={handleClick}>X</button></li>
                ))}
            </ul></div>
    )
} ''

export default Recetas