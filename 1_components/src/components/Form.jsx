// Para importar la estructura básica de un elemento (function + return) se puede hacer mediante el atajo "rfce". La function se creará con el nombre dado al archivo .jsx, es decir, al componente

// El import React from 'react' se puede eliminar

import PropTypes from "prop-types"

// Otra forma de trabajar con variables en los componentes, en vez de trabajar con objetos completos y pasar como argumento de la function(props), es aplicar el método destructuring de Js. Con esto, cada propiedad del objeto pasará a ser una variable, y en vez de pasar como argumento (props) se pasa cada una de las variables entre {} y separadas por comas (en este caso function Form({ nombre, apellido }) {return...}).
// El nombre dado a la variable se usa para llamarla en el cuerpo del html del mismo componente (en vez de{props.nombre} o {props.apellido}, al haber convertido la propiedad en una variable independiente, será {nombre} {apellido}
// Este valor es el que igualmente se da como atributo para el elemento html del componente padre <Form nombre={name} apellido={lastname}></Form>. Se pueden utilizar tantos atributos como variables se quieran introducir en el componente

function Form({ nombre, apellido }) {
    return (
        <div>
            <h2>{nombre} {apellido} registra tu nueva mascota</h2>
            <form action=''>
                {/* El atributo de la etiqueta <label> que la asocia con el <imput /> en vez de "for", es "htmlFor */}
                <label htmlFor='name'> Nombre</label>
                <input type='text' name='name' id='name' />

                <label htmlFor='edad'> Edad</label>
            </form>
        </div>
    )
}

Form.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string
}

export default Form