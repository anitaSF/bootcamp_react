import { Route, Routes } from "react-router-dom"; // Módulo requerido para trabajar con rutas internas al proyecto
import { useState } from "react";
import Header from "./Header/Header";
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login'
import NotFound from "./NotFound/NotFound";
import AuthRoute from "./Auth/AuthRoute";
import Profile from "./Profile/Profile";



function App() {

  const dataLocal = JSON.parse(localStorage.getItem('userData')); // Variable creada para alojar los datos de login guardados en el localStorage (que tendrán x duración). Para extraerlos se ejecuta el método .getItem('userData')
  // Además como para guardarlos se transforman en lenguaje .JSON (legible por este sistema), para extraerlos y trabajar con ellos en Js, se deben volver a convertir a su estado original (en este caso objeto) mediante el método JSON.parse().

  // Variable de estado para alojar el token de validación de acceso al usuario a las rutas privadas. Se debe pasar como props a las funciones de los componentes que vayan a utilizarla y como argumento al elemento html aquí importado:
  // La función asociada "setUserData" se pasará al componente "Login" como props para que cambie su estado inicial con los datos introducidos por el usuario y se produzca la verificación
  // Como valor inicial a la variable de estado se le asigna los datos guardados en el localStorage (alojados en la variable arriba creada "dataLocal"), que tendran x duración definida por cada API. De esta forma el usuario permanecerá logueado ese tiemo y no se pedirá de nuevo el login para acceder a las rutas privadas. Una vez pasado ese tiempo, los datos se borran del localStorage y se deberá repetir de nuevo todo el proceso de login y peticion API
  // La variable de estado "userData" se pasará al componente "AuthRoute" como props de su función para que valide los datos enviados por el usuario y alojados en esta variable
  const [userData, setUserData] = useState(dataLocal);

  return (
    <>
      <Header setUserData={setUserData} userData={userData} />

      {/* El elemento html <Routes></Routes> hará que se renderice el contenido del componente seleccionado mediante el enlace del Header (o en cualquier otro componente). Este elemento siempre se debe crear en el componente general de la web.
      El componente <Header /> en este caso queda fuera, es un elemento fijo, común a toda la web, se renderice un componente u otro */}
      <Routes>

        {/* Los componentes se importan encerrados en el elemento html que define su ruta <route path="nombreComponente" element={<nombreComponente />}. La ruta (path) de la hone siempre sera "/" ya que es la pñagina de inicio y está en la raíz del servidor */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setUserData={setUserData} />} />
        {/* Se define el atributo de la función de la variable de estado donde se alojan el token de acceso "userData" para pasarla por props al Login, para que cambie su estado inicial vacio (null) con los datos introducidos por el usuario al enviar el formulario, y se ejecute la validación */}

        <Route
          path='/profile'
          element={
            <AuthRoute userData={userData} component={<Profile userData={userData} />} />} />
        {/* Ruta privada: Para ello se define como elemento a renderizar el componente creado para validar el acceso  <AuthRoute /> y se le pasan como atributo las props que va a necesitar su función para hacer la validación: la variable de estado "userData" donde se han alojado los datos enviados en el formulario de login, y el componente que se debe renderizar si el login es ok. Este componente debe llevar a su vez el atributo "token={userData.token}" que relaciona con la propiedad que se va a utilizar para hacer la petición a la API de los datos de ese usuario   */}

        {/* Ruta definida para renderizar el componente "NotFound" de "página no encontrada", al que se redirige al usuario cuando introduce una ruta no definida en su código. Debería crearse en todos los sitios web para evitar que se rompa la web cuando se introduzca la URL errónea. Como parámetro para la url que recibe, se define "*" (path='*') que asume cualquier valor introducido */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App 
