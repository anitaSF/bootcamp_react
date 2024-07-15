import { useContext } from "react"; // Hook propio de React para poder trabajar con un contexto creado desde un componente

import { userContext } from "../userContext/userContext"; // importamos el componente que tiene el contexto creado

function Login() {
    const context = useContext(userContext); // Variable creada para alojar el contexto creado. Para ello se ejecuta el Hook "useContext" propio de React importado (que permite trabajar con un contexto creado) y se le pasa el valor de dicho contexto creado "userContext"

    const handleClick = (e) => {
        e.preventDefault();
        context.changeToken('Nuevo_token_123');
    }; // Función manejadora del evento onClick del <button></button> del formulario, que enviará la nueva información de token correspondiente a los datos de usuario introducidos

    return (
        <form>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" />

            <button onClick={handleClick}>Login</button>
        </form>
    )
}

export default Login