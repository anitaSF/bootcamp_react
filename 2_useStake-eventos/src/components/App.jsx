import { useState } from "react";
import Register from "./Register/Register"
import './app.scss';

function App() {
  // Variables a utilizar en el html (return()) de este componente o de un componente importado (en este caso Register). 

  // Para que se muestre en el html o en el componente, cada variable se debe definir como atributo del elemento html o del componente. En caso de los componentes importados, el nombre del atributo se debe corresponder con la prop dada en el argumento de la function del componente. No tiene porque ser el mismo que la variable que lo aloja.
  // este caso los atributos del componente son <Register title={title} textMessage={message}>, y las props pasadas a la function Register ({ title, textMessage }), aunque la variable creadas sean "title" y "message" respectivamente (la segunda no es igual)

  const title = 'Registro de usuario';
  const message = {
    msg: 'Registro con éxito',
    error: 'Error al registrarse',
  };

  // Otro uso de las Variables de estado, es cuando el componente debe cambiar de estado, por ejemplo en este caso de aspecto, mediante cambio de clase css
  // Como en este caso, la variable se define en el componente padre, que es al que aplica todo el cambio, pero el elemento html que la llama está en el componente importado Register. El valor se pasa al componente hijo (Register) mediante atributo, pero en vez de el nombre de la variable, se utiliza la funcion que la ejecuta, setVariable (en este caso setIsLight)
  const [isLight, setIsLight] = useState(true);

  return (
    <>
      <section className={isLight ? "light" : "dark"}>
        {/* El componente <section></section> tiene el atributo de clase definido con la variable de estado "isLight" enlazada con el evento OnClick de los <button></button> del componente "Register". De esta forma será este elemento html el que cambie de estado, aunque los button estén en un componente importado.
        Para ejecutar el cambio, el atributo className deberá englobar junto con la variable, una condición: si el valor de la variable "isLight(true)" (activado por defecto o por activación del evento Onclick del button id="light") cogerá la clase css "light" y si el valor de la variable "isLight(false)" (activado por el evento Onclik del button id="dark") cogerá la clase css "dark" */}
        <h1>Eventos</h1>
        <Register title={title} textMessage={message} setIsLight={setIsLight} ></Register>
        {/* Elemento html que llama al componente importado <Register></Register>. Los atributos title={title} textMessage={message} son atributos de contenido, llaman a las varaibles declaradas arriba y devuelven el contenido definido en la estructura html del Register. El atributo setIsLight={setIsLight} llama a la variable de estado declarada también arriba, pero en este caso devuelve un cambio de clase css que se ejecuta desde el elemento html Register por un evento onClick definido en 2 elementos <button></button>, uno para activar el modo oscuro y otro para desactivarlo */}
      </section>
    </>
  )
}

export default App 
