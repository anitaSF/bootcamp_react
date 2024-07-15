// PASO 0. Se parte de un estado inicial (varaible que aloja datos de diferente tipo y origen: objeto, array, string y puede estar definido en un archivo .json, por petición API...)
const initialState = [
    {
        nombre: "tequeños", instrucciones: "instrucciones 1",
        ingredientes: ["queso", "harina"], tiempo: "tiempo 1", id: "1"
    },
    {
        nombre: "tortilla", instrucciones: "instrucciones 2",
        ingredientes: ["huevos", "patatas", "cebolla"], tiempo: "tiempo 2", id: "2"
    },
]

// PASO 1. Se define el reducer, tipo de variable de estado con dos argumentos que son siempre los mismos: state (variable que aloja el estado de la web, por lo que al inicio se le suele pasar la variable "initialState", que va a modificarse), y action (función asociada que engloba todos los casos "case" y sus códigos a ejecutar para modificar la variable inicial).
// Dentro del código de la función, a la base del condicional "switch" se le pasa como objeto (action.type), donde type es cada caso "case" definido, y al que se llamará con el método "dispatch" en las funciones manejadoras de eventos creadas en diferentes componentes para modificar la "initialState"   
// Los casos "case" (deben escribirse en MAYUSCULA), llaman a una propiedad del objeto del estado inicial (se le debe dar un nombre entre comillas, case "changePropiedad") y el "return" devuelve el array original con la modificación ejecutada por el reducer.
const recetaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_RECETA":
            return [...state, action.payload]; // Se aplica el spreed operator "...", la copia del array (variable initialState) con el valor nuevo que le pase el payload generado por el disparador correspondiente.
        case "REMOVE_RECETA":
            return state.filter((item) => item.id !== action.payload); // Se aplica el método .filter para hacer una copia del array "initiaState" eliminando el item cuyo id corresponda al elemento de la lista seleccionado (para ello se aplica el operador lógico !==, selecciona todos los item que no tiene este "id")

        default:
            return state;
    }
}

export default recetaReducer