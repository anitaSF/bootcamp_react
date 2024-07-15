import PropTypes from "prop-types"

// Para utilizar un componente en otros diferentes, y con valores dinámicos (diferentes), no se le define un valor absoluto, sino una propiedad. 

// Para ello, en el argumento de la función se define que el componente va a recibir propiedades (props) y como valor del elemento html se llama a la variable que será definida en el componente padre {props.nombreProp}
// Estas propiedades configuran un array tipo objeto, de ahí que para llamarlas dentro del elemento html se utilice la nomenclatura props.nombreProp

function Button(props) {

    return (
        <button>{props.text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button // exportar componente para poder utilizarlo en otros