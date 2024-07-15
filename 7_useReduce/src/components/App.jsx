import { useFilterContext, FilterContext } from "./FilterContext/FilterContext";
import Filters from "./Filters/Filters";
import Address from "./Address/Address";

function App() {

  const context = useFilterContext(); // variable creada para alojar el contexto creado en el componente "FilterContext". Para ello se llama a la fución Hook definida en el contexto que aloja todo su código a ejecutar "useFilterContext()"

  // Esta variable da valor a la etiqueta html <nombreContext.Provider></nombreContext.Provider> que debe englobar todo el código de la aplicacion para poder usar todas las variables y funciones alli definidas

  return (
    <main>
      <FilterContext.Provider value={context}>
        <h1>Listado productos</h1>
        <Filters />
        <Address />

      </FilterContext.Provider>
    </main>
  )
}

export default App; 
