import { useEffect, useState } from "react";
import { getDataUser } from "../Services/api";

// Como props se pasa la variable de estado "userData" creada en el componente general "App.jsx" donde se alojan los datos cuando un usuario ha hecho login (se le ha autorizado a acceder a su perfil con ruta privada)
function Profile({ userData }) {
    const [data, setData] = useState(null); // Variable de estado creada para alojar los datos del perfil de usuario que se reciban de la API

    // Se llama a la función definida en el archivo "api.jsx" para realizar la petición "GET" al servidor y que nos devuelva los datos del usuario correspondiente a la propiedad "token" que se ha definido como parámetro (getDataUser(token);). 
    // Una vez ejecutada la función de la peticion "getDataUser", los datos recibidos (info) pasan a la variable de estado creada arriba para ello "data", ejecutando dentro del método .then su respectiva funcion "setData" > .then((info) => { setData(info); });
    // Este código debe encerrarse dentro de un condicional, para que solo se ejecute cuando haya datos en la variable de estado original "userData" (pasada como props a la función de este componente). Esto se produce cuando un usuario cierra sesión
    // Con el Hook "useEffect" propio de React definimos que se ejecute solo una vez la petición
    useEffect(() => {
        if (userData) {
            getDataUser(userData.token).then((info) => {
                console.log(info);
                setData(info);
            });
        }
    }, []);

    return (
        <div>
            {/* La estructura html que renderiza la información importada de la API del perfil de cada usuario también debe encerrarse dentro de un condicional, para que solo se ejecute, en este caso cuando haya datos en la variable de estado definida en este componente "data" (que será la que se llene cuando se ejecute la función de arriba "getDataUser"), y sino, no pasa nada. De esta forma evitamos que la página se rompa. Esto lo hacemos con un operador ternario: {nombreVariableEstado ? <html></html> : null}
             Es decir, la información del perfil de cada usuario solo se mostrará cuando el usuario haga login (petición POST previa "getDataFromApi"), se reciban los datos de perfil de un usuario alojandose en la variable de estado original "userData", se realice la segunda petición a la API de forma correcta (petición GET "getDataUser"), y se pasen los datos a la variable de estado "data" creada en este componente para alojar toda la información.  */}
            {data ?
                <article>
                    <h3>{data.firstName} {data.lastName} </h3>
                    <p>{data.university}</p>
                </article>
                : null}
        </div>
    )
}

export default Profile