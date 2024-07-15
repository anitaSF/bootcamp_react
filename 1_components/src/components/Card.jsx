import PropTypes from "prop-types"

function Card(props) {
    // Los componentes se crean con estructura html. Cada elemento html estará asociado a una variable o propiedad de objeto definido en el componente padre donde se importará. Es decir, el componente marca la estructura pero la información y valores (variables) dados a los elementos html se definen en el componente padre 

    // Si es una variable creada en el componente padre es simple se llama asi: {props.prop1}, y si es variable objeto será {props.data.prop1}, donde data corresponde al objeto completo y será la propiedad utilizada como atributo en el elemento html <Card data="{nombre_obj}"></Card> (para mostrar toda la información del objeto) y <Card data="{nombre_obj.prop1}"></Card> (para mostrar solo determinada propiedad del objeto)

    return (
        <article>
            <img src={props.data.img} alt="" />
            <h4>{props.data.name}</h4>
            <h4>La edad : {props.data.age}</h4>
        </article>
    )
}

Card.propTypes = {
    data: PropTypes.object
}
// Se deben tipar las variables utilizadas en cada componente. En caso de objetos, solo se debe asignar tipo a este, no a cada propiedad del mismo: nombre_obj: PropTypes.object;

export default Card