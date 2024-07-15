import { TranslationContext } from "../context/intl.context";
import { useContext } from "react";
import Header from "./Header/Header";

function App() {
  const { changeLocale } = useContext(TranslationContext);

  const handleSelect = (e) => {
    changeLocale(e.target.value);
  }; // Función manejadora del evento OnChange, para pasar el valor introducido por el usuario en el select, a la variable "changeLocale". Esta variable está creada en el contexto importado para asignar el nuevo valor a las funciones "setLocale" y "setMessages" correspondientes a las variables de estado que definen el idioma que renderizará la web (locale, messages)


  return (
    <>
      <h1>Multilenguaje</h1>
      <form>
        <select id="lang" name="lang" onChange={handleSelect}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>
      </form>
      <Header />
    </>
  )
}

export default App 
