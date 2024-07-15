import { func } from "prop-types"

function Ingredientes({ addIngredientes }) {
    const handleInput = (e) => {
        addIngredientes(e.target.id);
    }; // Funcion manejadora del evento onChange definido sobre cada <inpyt /> para pasar su valor a la función "addIngredientes" definida en el archivo padre "NuevaReceta.jsx" que ejecuta un condicional y añade a la propiedad (array) del nuevo item "receta" los ingredientes cuyo id aun no estén ya añadidos.

    return (
        <div>
            <form>
                <label htmlFor="ing1">Cebolla</label>
                <input type="checkbox" name="ingredientes" id="ing1" value="cebolla" onChange={handleInput} />
                <label htmlFor="ing2">Queso</label>
                <input type="checkbox" name="ingredientes" id="ing2" value="queso" onChange={handleInput} />
                <label htmlFor="huevos">Huevos</label>
                <input type="checkbox" name="ingredientes" id="ing3" value="huevos" onChange={handleInput} />
            </form>
        </div>
    )
}

export default Ingredientes