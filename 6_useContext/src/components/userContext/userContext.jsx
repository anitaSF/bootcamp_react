// CONTEXTO DE UNA WEB
// Entorno creado para alojar las funciones, variables y código a ejecutar generales a todo el sitio web y que van a poder ser utilizadas desde cualquier componente, sin tener en cuenta el nivel de jerarquía que tenga.

import { createContext, useState } from "react";

export const userContext = createContext(); // Función creada para alojar el contexto de una web. Se crea ejecutando el método propio de React "createContext"

// Hook personalizado que se crea para modificar y acceder al contexto creado. Como los propios Hooks de React, lo nombramos con el prefijo "useNombreContexto".
// Las acciones a ejecutar sobre este contexto son conocidas en programación como "CRUD", y son las siguientes: create, read, update, delete
export const useUserContext = () => {

    const [state, setState] = useState({
        token: '',
        email: '',
    }); // Variable de estado para alojar las propiedades (datos) con las que se va a trabajar en el contexto, y que se exportaran a cualquier componente de la web. Para modificar cada propiedad es necesario una función que será definida justo abajo:

    const changeToken = (tokenValue) => {
        setState({ ...state, token: tokenValue });
    }; // Función creada para modificar la propiedad "token", que cogerá un nuevo valor cuando el usuario haga login y se pasen los datos verificados.
    // Para modificar la variable de estado, como es un objeto, se debe ejecutar un spreed operato "..." para que haga una copia del objeto con las propiedades originales (...state), y el segundo parámetro indica el cambio, en este caso modificar el valor del token (token: tokenValue)

    return { state, changeToken }; // Todas las variables y funciones se deben ejecutar en un return para que se guarden y se puedan utilizar en el resto de componentes

}; 