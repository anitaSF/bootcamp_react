import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Ingredientes from "../Ingredientes/Ingredientes";

function NuevaReceta() {

    const [receta, setReceta] = useState({
        nombre: '',
        instrucciones: '',
        ingredientes: [],
        tiempo: ''
    }); // Variable de estado para alojar los valores introducidos por el usuario en el formulario para añadir la nueva receta. Cada propiedad dará valor al atributo "id" del input correspondiente, para controlar el formulario

    const dispatch = useDispatch(); // Variable para alojar el Hook "useDispatch" que disparará los reducers asociados al caso llamado en la función manejadora del evento que lo activa evento, en este caso handleClick

    const listaReceta = useSelector((state) => state.recetas); // Variable para alojar el contenido seleccionado mediante el Hook "useSelector" de otro archivo del store, en este caso la variable, en este caso el stado general creado en la funcion que combina los reducer "rootReducer" definida en el archivo "index.js" para extraer su id desde la función del "dispatch" y poder añadirlo al estado global

    const [error, setError] = useState(''); // Variable de estado para alojar el mensaje de error que debe aparecer si no se rellena el <input /> nombre al enviar el formulario

    const addIngredientes = (value) => {
        const cloneIngredientes = [...receta.ingredientes]; // Se crea una variable para alojar una copia (mediante spreed operator "...") del array definido como propiedad "ingredientes" del objeto correspondiente a la variable de estado original
        if (!cloneIngredientes.includes(value)) {
            cloneIngredientes.push(value);
        } else {
            const indexIngredient = cloneIngredientes.indexOf(value);
            cloneIngredientes.splice(indexIngredient, 1);
        } // condicional para añadir los ingredientes seleccionados en el formulario importado del comonente "Ingredientes" al array que es la propiedad "ingredientes" del nuevo objeto "receta" que se añadirá al array "initialState".
        // Este condicional define que si (if) no (!cloneIngredientes) esta incluido (.includes) un item en ese array, lo añada (.push); y si ya está en el array (else), lo quite (.splice). 

        setReceta({ ...receta, ingredientes: cloneIngredientes }); // Llama a la función de la variable de estado "receta" con el objeto que se añadirá al initialState, y crea una copia (con el spreed operator "...") y le añade el valor de la anterior variable "cloneIngredientes" a su propiedad "ingredientes"
    };

    const handleInput = (e) => {
        setReceta({
            ...setReceta, [e.target.id]: e.target.value
        });
    }; // Funciuon manejadora EVENTO 1 onChange, para dar valor a la variable de estado "receta", Para ello se llama a su funcion "setReceta" y se le aplica el spreed operator "..." añadiendole un nuevo objeto, para lo que se le pasa el valor que ha recogido el evento (e.target.id)

    const handleClick = (e) => {
        e.preventDefault();
        if (receta.nombre) {
            receta.id = listaReceta.lenght + 1;
            dispatch({ type: 'ADD_RECETA', payload: receta });
            setError('')
        } else {
            setError('Campo Nombre obligatorio');
        }
    }; // Funcion manejadora EVENTO 2 que dispara el reducer correspondiente al "case" definido en el argumento "type" y le pasa el valor de la variable de estado receta que se habrá rellenado con los valores pasados del formulario. 
    // Se crea la propiedad "id" (receta.id) con el operador ".length +1" para que le de un número más que la longitud del array
    // Todo se encierra en un condicional para que el "dispatch" solo se ejecute si el input nombre (asociado a la propiedad receta.nombre) se ha llenado. Sino, aparece un campo de error, llamando a la funcion "setError" correspondiente a la variable de estado que lo aloja

    return (
        <div>
            <form action="">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={handleInput} value={receta.nombre} />
                <label htmlFor="instrucciones">Instrucciones</label>
                <input type="text" id="instrucciones" name="instrucciones" onChange={handleInput} value={receta.instrucciones} />
                <label htmlFor="tiempo">Tiempo</label>
                <input type="text" id="tiempo" name="tiempo" onChange={handleInput} value={receta.tiempo} />
                <br />
                <Ingredientes addIngredientes={addIngredientes} />

                <button onClick={handleClick}>Añadir receta</button>
            </form>
        </div>
    )
}

export default NuevaReceta