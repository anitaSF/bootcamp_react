// COMPONENTE 3. Componente para pintar la información más extensa y en detalle de cada personaje. A este componente se accede desde un elemento <Link> creado en cada tarjeta de personaje "CharacterCard".
// Este link tiene la ruta relativa, es decir, tiene un endpoint definido por la propiedad id de cada personaje, por lo que se abrirá este componente "CharacterDetail" renderizando ese personaje 
// Para pintar esta información detalle, se necesita acceder al array primero donde se importaron los datos de la API, por lo que se debe pasar como props la variable de estado que aloja este array "listCharacter" y pasarlo como atributo en este elemento html al importar el componente en el general "App.jsx", <CharacterDetail listCharacter={listCharacter} />

import { Link, useParams } from "react-router-dom";

function CharacterDetail({ listCharacter }) {
    const { idCharacter } = useParams(); // Variable para alojar la ruta de cada item. Para obtenerla, se aplica el hook de React "useParams()" que permite acceder desde un componente a los parámetros dinámicos de la URL (se obtienen en forma de objeto). Se aplica el destructuring para solo coger la propiedad { idCharacter } del objeto de cada item (a esto podemos acceder mediante un console.log(variable);). Esta propiedad normalmente define el endpoint del atributo "path" de la ruta definida en el componente padre (en este caso path="/characterdetail/:idCharacter") 

    const findCharacter = listCharacter.find((char) => char.id === idCharacter); // variable para alojar el item obtenido tras ejecutar el método .find sobre el array original de la variable de estado "listCharacter". Este método devuelve el primer item del array, cuya propiedad "char.id" se corresponda con la propiedad "idCharacter" alojada en la variable con el mismo nombre y obtenida del objeto de la ruta seleccionada.

    return (
        <div>
            {/* Condicional definida con operador ternario para pintar el contenido del item seleccionado si existe (findCharacter ? (contenido a mostrar)), y sino, no pasa nada (null). Esta condicional se aplica para evitar que la página de error si la respuesta de la API tarda más que en cargarse la página e intentar renderizar el contenido */}
            {findCharacter ? (
                <>
                    <h2>Detalle del personaje</h2>
                    <img src={findCharacter.image} />
                    <h3>{findCharacter.name}</h3>
                    <h4>Género: {findCharacter.gender === 'female' ? '💃' : '🕺'}</h4>
                    {/* Se llama a cada propiedad del item renderizado en el componente creado "CharacterDetail" a través de la variable "findCharacter" definida para alojar al item cuyo id se corresponde con la URL clicada */}
                </>
            ) : null}

            <Link to={'/'}>Volver a Inicio </Link>
        </div>
    )
}

export default CharacterDetail