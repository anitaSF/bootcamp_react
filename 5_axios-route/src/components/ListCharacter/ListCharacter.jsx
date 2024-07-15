// COMPONENTE 2.1. Componente para pintar la lista de personajes de cada casa (datos que se reciben por la petición a la API definida en el componente principal "App.jsx" cada vez que el usuario selecciona una casa diferente). 
// Estos datos están alojados en la variable de estado "listCharacter" y se pasan a este componente mediante props a la función ({ listCharacter }). En el componente padre van como atributo del elemento html correspondiente a este componente <ListCharacter listCharacter={listCharacter} />

import CharacterCard from "../CharacterCard/CharacterCard";
import './listCharacter.scss';

function ListCharacter({ listCharacter }) {
    return (
        <section className="list-character">
            {/* Método .map aplicado sobre el array de datos importado de la API y alojado en la variable de estado "listCharacter" para obtener cada item u objeto y renderizarlo en el componente <CharacterCard /> donde está pintada la estructura html que define los datos (propiedades) que se muestran de cada personaje (item).
            Cada item se aloja en la variable creada en el objeto del método "lisCharacter.map(char)". Para pasar estos datos se define al elemento html el atributo correspondiente a esta variable "char={char}" que se pasará como props a la función del componente "CharacterCard" */}
            {listCharacter.map((char) => (
                <CharacterCard char={char} key={char.id} />
            ))}
        </section>
    );
}

export default ListCharacter;