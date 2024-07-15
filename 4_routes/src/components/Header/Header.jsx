// COMPONENTE 1. Header para pintar el menú con los enlaces a las páginas de la web. Será común a toda la web por lo que se debe renderizar en todos los componentes

import { Link, useNavigate } from "react-router-dom";

function Header({ setUserData, userData }) {
    const navigate = useNavigate(); // Hook propio de React que nos devuelve la función navigate, que nos permite hacer redirecciones programáticas de una URL al resultado de otra ruta. Se crea para redirigir al usuario a la home al realizar el logout de sesión

    const handleLogout = (e) => {
        setUserData(null);
        localStorage.removeItem('user');
        navigate('/');
    }; // Función manejadora del evento onClick del elemento <button></button> que ejecuta varias acciones en su código:
    // 1. Llama a la función de la variable de estado que tiene los datos del usuario logueado "setUserData" y los borra dándole valor vacío (null)
    // 2. Elimina el item "user" guardado en el localStorage para eliminar también los datos de acceso del navegador y se cierre la sesión por completo
    // 3. Llama la variable "navigate", la cual gracias al Hook ejecutado "useNavigate" permite renderizar el componente de la ruta indicada, en este caso la Home ("/")


    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/register">Registro</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Mi perfil</Link></li>
                    {/* Cada elemento del menú es un enlace router <Link> (al trabajar con rutas internas no se puede utilizar el elemento <a></a>). El atributo para definir el destino del enlace es to="nombreComponente". El valor del atributo "to" debe coincidir con el valor del atributo "path" del elemento <Route></Route> definido en el componente padre "App.jsx" donde está importado este comopnente <Header /> */}

                    {userData && (
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                    {/* Elemento condicional <button></button> que solo se renderizara si se cumple la condicion de que existan datos en la variable de estado userData. Es un botón para cerrar sesión que solo se mostrará en el header en caso de que la variable de estado de ese usuario esté llena */}
                </ul>
            </nav>
        </header>)
}

export default Header