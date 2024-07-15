import { Route, Routes } from "react-router-dom";
import { API } from "./Services/api"; // Componente donde se aloja la configuración de la petición API. Se deberá importar en cualquier otro componente desde el que se quiera realizar una petición API, en vez del modulo "axios"
import { useEffect, useState } from "react";
import Select from "./Select/Select"
import ListCharacter from "./ListCharacter/ListCharacter";
import CharacterDetail from "./CharacterDetail/CharacterDetail";

function App() {
  const [house, setHouse] = useState('Gryffindor'); // PASO 1. Variable de estado para alojar el valor seleccionado en el elemento <select></select> definido en el componente importado <Select />. Se le ha dado el valor "Gryffindor" para que por defecto salgan los personajes de esta casa hasta que el usuario seleccione otra y varíe el valor de la variable

  const [listCharacter, setListCharacter] = useState([]);
  // PASO 2.1. Variable de estado para alojar el array de personajes importado mediante la petición a la API. Debe ser un array vacío para que se llene con los objetos (item/personajes) importados de la API. Este array variará cada vez que se seleccione una casa y se repita la petición a la API al endpoint correspondiente

  // PASO 2.2. Petición API tipo AXIOS con "useEeffect" 
  // Las peticiones de tipo AXIOS reciben siempre los datos en un objeto con igual estructura y no necesitan método .json para convertir la información. Los datos para trabajar siempre están dentro de la propiedad "data" por lo tanto para acceder a ellos será (response.data). 
  // Para mostrar solo los personajes de la casa seleccionada, se define el endpoint de la URL de la API de forma dinámica mediante la variable ${house}
  // La función de React "useEffect" permite definir las veces que se ejecuta entre los corchetes del segundo valor []. En este caso en vez de dejarla vacía para que se ejecute una vez, se pone la variable de estado "house", de forma que la petición a la API se ejecutará cada vez que la variable "house" reciba un nuevo valor
  useEffect(() => {
    // En este caso, como se ha configurado la petición a la API en un componente específico "api.jsx" para que pueda ser utilizado desde cualquier componente, se aplica el método .get sobre la variable exportada desde este componente (API.get) que contiene todos los datos configurados, entre ellos la base de la ruta (baseURL), a partir de la cual se puede variar el endpoint para hacer diferentes peticiones.
    API.get(`/characters/house/${house}`).then(
      (response) => {
        console.log(response);
        setListCharacter(response.data); // El código a ejecutar cada vez que se hace una petición a la API es llamar a la función "setListCharacter" de la variable de estado "listCharacter" (creada para alojar el array de personajes (objetos/items)), para que se actualice su contenido y se rendericen los personajes de esa casa en el componente "listCharacter" creado para ello (en este componente está pintada la estructura html para mostrar las propiedades)
      },
      (error) => {
        console.log(error);
      }
    )
  }, [house]);

  return (
    <>
      <h1>Listado de personajes de Harry Potter</h1>
      {/* 0. Elemento html necesario para trabajar con rutas internas al proyecto. Hay que importarlo arriba en import (import { Route, Routes } from "react-router-dom";).
        Tambien hay que editar el archivo "main.jsx" añadiendo el elemento html <BrowserRouter> envolviendo el elemento general <App />. En este archivo se debe importar el módulo { BrowserRouter } */}
      <Routes>

        {/* 0. Los componentes se importan encerrados en el elemento html que define su ruta <route path="nombreComponente" element={<nombreComponente />}. la ruta (path) de la hone siempre sera "/" ya que es la pñagina de inicio y está en la raíz del servidor */}
        <Route path="/" element={
          <main>
            <Select setHouse={setHouse} />
            <ListCharacter listCharacter={listCharacter} />
          </main>}
        />
        {/* PASOS 1-2. Para renderizar más de un componente en una ruta, en el atributo de <Route element=""> se deben de englobar en un mismo elemento html, por ejemplo <main>
        Cada elemento html correspondiente al componente importad, tiene como atributo la variable de estado o función que aloja los datos que se deben pasar a la función del componente como props */}

        <Route path="/characterdetail/:idCharacter" element={<CharacterDetail listCharacter={listCharacter} />} ></Route>
        {/* PASO 3. Ruta dinámica para mostrar el componente "CharacterDetail" del item seleccionado desde el <Link> definido en el componente "CharacterCard" renderizado en el componente "ListCharacter". 
        Para ello, el atributo path debe definirse con el componente que se abre y un endpoint que se corresponda con la propiedad elegida en el <Link to="nombreComponente/:propiedad"> (en este caso path="/characterdetail/:idCharacter")
        Para pasar los items y sus propiedades del array "listCharacter" al componente importado "CharacterDetail" donde se define la estructura html, se da el elemento thml <CharacterDetail /> el atributo listCharacter={listCharacter} que se pasa como props a la función del componente */}

      </Routes>
    </>
  )
}

export default App 
