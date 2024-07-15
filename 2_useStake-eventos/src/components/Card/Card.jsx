import { useState } from 'react'
import './card.scss'

function Card({ user }) {

    // Variable de estado creada para alojar la propiedad css definida el el archivo "card.scss" para el atributo className del elemento html <section></section>. Por defecto al cargar la página tendrá el valor "hidden" (section estará oculto)
    const [stylecss, setStylecss] = useState('hidden');

    // Función manejadora del evento "onClick={}" definido sobre el elemento html <button></button> para cambiar la propiedad css aplicada como atributo className al elemento <section></section> para hacer este elemento visible. 
    // Llama a la función de la variable de estado que aloja la información soblre la className y le cambia el valor a 'visibility'
    const handleClick = (e) => {
        setStylecss('visibility');
    }

    return (
        <>
            <button onClick={handleClick}>Previsualizar</button>
            <section className={stylecss}>
                <h3> {user.name} {user.surname} </h3>
                <h4> {user.email} </h4>
            </section>
        </>
    )
}

export default Card