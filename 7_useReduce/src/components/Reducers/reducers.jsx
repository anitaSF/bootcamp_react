// PASO 3. Función tipo "swich-case" para definir los diferentes casos de estado que puede adquirir la variable de estado inicial "initialState", y que será disparada mediante el Hook useReducer(), cuando se ejecute el evento asociado.
// Como argumentos se pasan el estado (state) y la acción a realizar para modificarlo (action). 
// El objeto de la base del condicional (switch) es esta "action" + el tipo de acción (action.type). Esto siempre es "type" y es la variable que se llama en la función manejadora del evento asociado para definir que caso "case" de esta función se ejecuta.
// En cada caso "case" definido en el switch se llamará a un type para modificar una propiedad del objeto inicial. Para ello se devuelve (return) una copia del estado original (mediante spreed operator ...), y se le da el nuevo valor pasado en la función manejadora del evento (action.payload) > { ...state, propiedad: action.payload }
export const reducer = (state, action) => {
    switch (action.type) {
        case "changeCategory":
            return { ...state, category: action.payload }

        case "changePrice":
            return { ...state, price: action.payload }

        case "changeCity":
            return { ...state, address: { ...state.address, city: action.payload } }

        case "changeCp":
            return { ...state, cp: { ...state.address, cp: action.payload } }
        // En estos dos casos (changeCity, changeCp) se ha hecho un subdestructuring para la propiedad address de la variable de estado incial, ya que es otro objeto, y se deben modificar sus propiedades por separado

        default:
            break;
    }
};