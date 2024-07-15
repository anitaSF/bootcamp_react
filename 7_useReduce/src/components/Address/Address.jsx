import { useContext } from "react"
import { FilterContext } from "../FilterContext/FilterContext"

function Address() {
    const context = useContext(FilterContext);

    // Función manejadora del evento onChange de los elementos <input /> del formulario para pasar los valores introducidos y cambiar el estado inicial de la variable de estado. 
    // En este caso como los campos del formulario corresponden a propiedades de la propiedad "address" un nivel superior, se debe hacer un condicional con operador ternario: si el "id" del input cambiado es "city", cambia el estado "changeCity", sino, cambia "changeCp", que actualizaran las propiedades respectivas del objeto
    const handleInput = (e) => {
        const type = e.target.id === 'city' ? 'changeCity' : 'changeCp';
        context.dispatch({ type: type, payload: e.target.value });
    }

    return (
        <div>
            <h3>Dirección de envio</h3>
            <form>
                <label htmlFor="city">Indica Ciudad</label>
                <input type="text" id="city" name="city" onChange={handleInput} />
                <label htmlFor="cp">Indica Código Postal</label>
                <input type="text" id="cp" name="cp" onChange={handleInput} />
                <button>Actualizar</button>
            </form>
        </div>
    )
}

export default Address