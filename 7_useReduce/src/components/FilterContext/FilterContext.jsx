import { createContext, useReducer } from "react";
import { reducer } from "../Reducers/reducers";

// PASO 0. Variable de estado original que va a ser el objeto a modificar por las funciones useEstate definidas abajo.
const initialState = {
    category: "all",
    price: 0,
    address: {
        city: "",
        cp: ""
    }
};

export const FilterContext = createContext(); // Se crea el contexto

// Hook personalizado que se crea para modificar y acceder al contexto creado. Como los propios Hooks de React, lo nombramos con el prefijo "useNombreContexto". Será la función a llamar desde el componente general de la web para importar todo el contexto y hacerlo funcionar dentro de la estructura html que se encierre dentro de sus respectivos elementos html <NombreContext.Provider value={context}>
export const useFilterContext = () => {

    // PASO 4. Hook useReducer (función propia de React) que ejecuta la función "reducer" con el condicional de los casos de cambio sobre la variable de estado "initialState" > useReducer(funcionCasos, variableEstadoInicial). 
    // Este Hook, es un tipo de variable de estado, se compone igualmente de dos valores, la variable en sí (donde se alojan los valores enviados del formulario) y su función, pero en este Hook, esta función es multiple, es decir tiene el valor de "dispatch" que puede ser cualquiera de los disparadores definidos en las funciones manejadoras de los eventos
    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, dispatch }; // Todas las variables y funciones se deben ejecutar en un return para que se guarden y se puedan utilizar en el resto de componentes
}
