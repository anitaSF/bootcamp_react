// Los reducers no son componentes, son funciones que ejcutan acciones determinadas sobre un "initial state" (variable de estado inicial) que define un estado global de una apliacion
// Los reducers son activados por los "dispatch" o disparadores/eventos definidos sobre diferentes elementos de la web.
// Este entorno global creado se guarda en un entorno que define como "STORE" y es un módulo propio de Redux que se debe importar en el archivo "main.jsx" de la app (import { Provider } from 'react-redux';) y se debe añadir como elemento html en el return <Provider></Provider> englobando toda la <App />
// En este estado global solo se definen las funciones que afectan a toda la app de forma global. Para acciones sobre componentes individuales o grupo pequeño de componentes que no afectan a todo el conjunto de la app, se siguen utilizando las variables de estdo
// Llevan la extensión .js

import { combineReducers } from "redux"; // Modulo de Redux importado para poder ejecutar el método "combineReducers" en la variable o función creada para combinar los diferentes reducers a utilizar en el STORE global
import recetaReducer from "./recetasReducers"; // Importar la función "recetaReducer" creada con el reducers que define los diferenres casos que se ejecutarán según el disparador activado

// Variable objeto creada para combinar todos los reducers utilizados en este store global, y que se pasará al archivo raiz del proyecto "main.jsx" como contenido de la función que ejecuta el método {createStore}
const rootReducer = combineReducers({
    recetas: recetaReducer,
});

export default rootReducer