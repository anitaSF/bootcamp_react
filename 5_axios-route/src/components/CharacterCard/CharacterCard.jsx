// COMPONENTE 2.2. Componente para pintar la tarjeta que mostrará la información resumen de cada personaje mostrado en la lista de cada casa pintada en el componente "ListCharacter". 
// Para ello se debe importar en este componente padre, y recibir los datos de cada item o personaje mediante props ({ char }) que corresponde a la variable creada en "listCharacter" para alojar cada item obtenido al ejecutar el método .map sobre el array "listCharacter". 
// Esta props también está definida como atributo del elemento html creado en el componente padre para importarlo <CharacterCard char={char} />

import { Link } from 'react-router-dom';
import './characterCard.scss';

function CharacterCard({ char }) {
    // Los datos se pasan a este componente desde el componente padre "ListCharacter" mediante las props ({char}) definidas como atributo del elemento html <CharacterCard /> pintado en su interior

    const img = char.image ? char.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQR8-20v9bcVOLzJOqtivzfeIf8oyFdPQs8byFV-dO4v285zI7Oudp-Pmp_-qD4G5-g8o&usqp=CAU'; // Funcion creada para definir el valor del atributo src del elemento img. Ejecuta un condicional para que si la propiedad "image" del objeto está vacía, adquiera un valor por defecto (mostrará la misma imagen en todos los item que no tengan esta propiedad).
    // Es una solución auxiliar ya que no todos los personajes tienen imagen y queda feo

    return (
        <article className='card'>
            {/* Enlace con ruta dinámica para abrir una nueva página con el detalle de cada personaje (componente "CharacterDetail"). 
             El parámetro que determina que item/personaje se muestra en este componente está definido por la propiedad id del objeto. Para ello, en el atributo "to" se añade a la ruta del componente (/characterdetail/) el endpoint con esta variable.prop to={`/characterdetail/${char.id}`} */}
            <Link to={`/characterdetail/${char.id}`} >
                <img src={img} alt='' />
                <h4>{char.name}</h4>
            </Link>
        </article>
    )
}

export default CharacterCard