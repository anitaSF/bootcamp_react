import { useContext } from "react";
import { FilterContext } from "../FilterContext/FilterContext";

function Filters() {

    const context = useContext(FilterContext);

    // PASO 2. Ocurre el evento y se ejecuta su función manejadora: coge el tipo (type: "changeCategory" / type: "changePrice"), definido en la función switch-case "reducer", y le pasa un nuevo valor a la propiedad del objeto category / price, enviada por el valor introducido por el usuario en el formulario (e.target.value). El valor genérico para llamar a la propiedad que cambia es "payload" (podría ser category / price, pero para unificar se pone siempre payload)
    // Esto se hace gracias al método "dispatch" (disparador).
    const handleSelect = (e) => {
        context.dispatch({ type: 'changeCategory', payload: e.target.value });
    };

    const handleInput = (e) => {
        context.dispatch({ type: 'changePrice', payload: e.target.value });
    }

    return (
        <div>
            <form>
                {/* PASO 1. Definir los eventos que harán ejecutarse sus repectivas funciones manejadoras "handleSelect" / "handleInput" que tienen el disparador (dispatch) del Hook useReducer, que provocará el cambio en la variable de estado inicial 
      Para controlar el formulario, se añade a los elementos el atributo "value" cuyo valor se corresponde con la propiedad de la variable de estado a modificar */}
                <select onChange={handleSelect} value={context.state.category} >
                    <option value="all">All</option>
                    <option value="electronics">Electrónica</option>
                    <option value="books">Libros</option>
                </select>
                <h3>La categoria seleccionada es</h3>

                <label htmlFor="price">Indicar precio</label>
                <input type="text" id="price" name="price" onChange={handleInput} value={context.state.price} /> Precio
            </form></div>
    )
}

export default Filters