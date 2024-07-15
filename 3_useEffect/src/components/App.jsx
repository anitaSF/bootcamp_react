import { useEffect, useState } from "react";
import ListProduct from "./ListProduct/ListProduct";
import Filters from "./Filters/Filters";
import FilterCategory from "./FilterCategory/FilterCategory";
import Product from "./Product/Product";
import CategoryCheckbox from "./CategoryCheckbox/CategoryCheckbox";


function App() {
  const [listProduct, setListProduct] = useState([]); // PASO 1.1. Variable de estado creada para alojar los datos importados de la peticion a la API. Es otro uso de este tipo de variables, siempre que se haga una petición fetch a una API se alojará en una variable de estado.

  const [search, setSearch] = useState(''); // PASO 2. Variable de estado para alojar el contenido introducido en el formulario de búsqueda definido en el componente "Filter" importado. Su valor es un string vacío ya que tomará el valor introducido por el usuario en el formulario pintado en el componente importado

  const [filterCategory, setFilterCategory] = useState('');
  // PASO 3. Variable de estado para alojar el valor seleccionado en el formulario a traves del elemento html <select></select> del componente importado "FilterCategory". Este valor se pasa cuando le llega contenido a la función de la variable "setFilterCategory" a través del evento onChange aplicado al elemento <select></select> y su función manejadora "handleSelect"

  const [newProduct, setNewProduct] = useState({
    id: '',
    category: '',
    title: '',
    price: '',
    image: '',
  });
  // PASO 4.1. Variable creada para alojar los datos introducidos en el formulario de creacion de nuevo objeto defijido en el componente importado <Product />. El nuevo objeto creado deberá tener la misma estructura que el resto de items del array "listProduct" importado de la API al que se va a añadir. 
  // Pero para añadir el item se necesitan 2 funciones auxiliares (PASO 4.2 y 4.3), una que haga una copia de este objeto (changeNewProduct) y otra función que modifique el array original creando también una copia pero en este caso del array completo (addNewProduct)
  // Las variables de estado que alojan arrays u objetos requieren este proceso más complejo para modificarse. 

  const [categoryCheckbox, setCategoryCheckbox] = useState([]);
  // PASO 5.1. Variable creada para alojar el/los valores seleccionados en el formulario del componente <CategoryCheckbox /> importado. Es un array vacío, ya que recoge la lista de categorías que el usuario seleccione

  // PASO 1.2. UseEffect: Función propia de React (Hook) para ejecutar un determinado código (for, if, peticiones al servidor, ejecutar una función, cambiar variable estado), un determinado número de veces.
  // La función se compone de estos dos elementos: useEffect(() => {código a ejecutar}, [veces que se ejecuta]). Si el segúndo valor [repeticiones] está vacío, solo tiene una repetición
  useEffect(() => {
    // petición fetch para importar datos desde una API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json()) // Recoge los datos de la petición y los traduce a lenguaje .json legible por js
      .then((data) => {
        console.log(data);
        setListProduct(data);
      }); // Utiliza los datos recogidos de la API y ejecuta el código definido en su interior, en este caso ejecutar la función setListProduct correspondiente a la variable de estado listProduct creada para alojar la información. Al ejecutar su función pasa esta información
  }, []);

  // PASO 2-3. Función para devolver los resultados (items) resultantes del valor introducido por el usuario tanto en el buscador "Filters", como la opción de categoría seleccionada en "FilterCategory". Se ejecuta el método array .filter sobre "listProduct", que crea un nuevo array con los items (product) que cumplan las condiciones incluidas en el callback.
  // En este cas se han aplicado dos filtros encadenados:
  //1. Filtrará los item importados de la API cuya propiedad "title" incluya/coincida con el valor de la variable de estado search (valor introducido por el usuario en el formulario Filters). Para ello, se aplica otro método array .includes: arrayName.propName.includes(useState), en este caso product.title.includes(search)
  // Tambien se ha ejecutado el método .toLowerCase sobre ambos valores para convertirlos a mayúscula y que la comparación sea de igual a igual
  // 2. Filtra los item (product) cuya propiedad "product.category" coincida con el contenido de la variable de estado "filterCategory" que proviene del select definido en el componente hijo "FilterCategory". Además, para que aparezcan todos los productos si no se selecciona categoría, se ha definido un condicional: if {si hay seleccion de categoria (se activa el evento onChange del select) devuelve (return) los items con la propiedad product.category que coincida con la selección}; else {si no hay selección de categoría, devuelve (return) todos los items (true)} 
  const getDataFiltered = () => {
    const filteredProducts = listProduct.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
      .filter((product) => {
        if (filterCategory) {
          return product.category === filterCategory;
        } else {
          return true;
        }
      });
    return filteredProducts; // Esta función requiere método return para que devuelva el nuevo array creado solo con estos item filtrados, que igualmente se alojarán en la variable de estado filteredProducts (ya que las variables de estado pueden estar cambiando su contenido todo el rato). De este modo, al pasar como atributo del elemento html la función ejecutada "getDataFiltered()", solo se pintarán los items filtrados
  };


  const changeNewProduct = (key, value) => {
    setNewProduct({ ...newProduct, [key]: value });
  }; // PASO 4.2. Funcion auxiliar 1 para crear una copia del nuevo producto (objeto) insertado a través del formulario definido en el componente importado <Product /> y poderlo despues añadir al array original alojado en la variable "listProduct".
  // Esta función changeNewProduct recibe como argumento la "key" y su valor del nuevo item (key,value) y ejecuta la función de la variable de estado que aloja este nuevo producto "setNewProduct", para crear una copia mediante el spreed operator "...", con el contenido del objeto correspondiente al valor de la key definida en el argumento de la función (...newProudct, [key]: value).
  // Esta función creada para la copia será la que se llame en el elemento html importado <Product /> como atributo, y la que se pase como props a la función del componente

  const addNewProduct = () => {
    setListProduct([...listProduct, newProduct]);
  };
  // PASO 4.3. Función auxiliar 2 para modificar la variable de estado "listProduct" y añadirle el nuevo item (objeto) copiado en la primera función auxiliar "changeNewProduct". Para ello se debe ejecutar igualmente el spreed operator "..." sobre el array original "listProduct" para hacer una copia pero ya con el nuevo producto añadido. 
  // En este caso solo es necesario definir en el objeto de la función, la variable a copiar y el item a añadir separados por coma[...listProduct, newProduct]. Si la variable del nuevo item se coloca delante del spreed operator, el nuevo producto aparecerá al principio del listado, y si se coloca detrás, aparecerá al final.

  const changeCategoryCheckbox = (value) => {
    if (categoryCheckbox.includes(value)) {
      const extraerCat = categoryCheckbox.filter((cat) => cat !== value);
      setCategoryCheckbox(extraerCat);
    } else {
      setCategoryCheckbox([...categoryCheckbox, value]);
    }
  };
  // PASO 5.2. Función para crear un nuevo array con las categorías seleccionadas en el formulario de checkbox creado en el componente "CategoryCheckbox", a partir de la variable de estado "categoryCheckbox" donde se aloja el valor de esta selección.
  // El objeto de la función será el valor obtenido de los chekcbox seleccionados (value), y el código a ejecutar será un condicional: si (if) se encuentra el valor de un checkbox en la variable de estado (categoryCheckbox.includes(value)), lo extrae con el método filter (categoryCheckbox.filter((cat) => cat !== value);) de la variable de estado original (setCategoryCheckbox(extraerCat);); y si no (else), se crea una copia de este array original (...categoryCheckbox) con este valor del checkbox no seleccionado añadido


  return (
    <>
      <h1>Online Store</h1>

      {/* PASO 5. Elemento html para importar el componente CategoryCheckbox con el formulario tipo checkbox para seleccionar categorías de producto también. Con este elemento se pueden seleccionar varias a la vez.
      Se definen como atributo la variable de estado donde se aloja el valor de la selección "categoryCheckbox" que será utilizada para definir el atributo "checked" de cada elemento checkbox y controlar el formulario. También se da como atributo la función que crea el nuevo array de categorías a partir de la selección realizada por el usuario "changeCategoryCheckbox" */}
      <CategoryCheckbox changeCategoryCheckbox={changeCategoryCheckbox} categoryCheckbox={categoryCheckbox} />

      {/* PASO 4. Elemento html para importar el componente Product con el formulario para añadir un nuevo prodcto. La estructura html del fornulario corresponde con la del objeto (cada input recoge una propiedad)
      Como atributo se definen las 2 variables auxiliares creadas para modificar el array alojado en la variable de estado original importada de la API: changeNewProduct (para copiar el nuevo objeto creado "newProduct") y addNewProduct (para copiar el array original "listProduct" pero con el nuevo objeto añadido).
      También se añade como atributo la variable de estado creada para alojar el nuevo producto, ya que cada propiedad del objeto va a dar valor al atributo "value" de los <input> del formulario; y a su función "setNewProduct" que se ejecuta en el evento onSumbit para resetear el contenido del objeto una vez añadido al array */}
      <Product changeNewProduct={changeNewProduct} addNewProduct={addNewProduct} newProduct={newProduct} setNewProduct={setNewProduct} />

      {/* PASO 2. Elemento html para importar el componente Filters con el formulario search. Como atributo se define la variable de estado que alojará el valor introducido por el usuario para la búsqueda. Esta variable se pasa al componente importado como props para enlazarlos ya que contiene el formulario de búsqueda */}
      <Filters setSearch={setSearch} search={search} />

      {/* PASO 3. Elemento html para importar el componente FilterCategory donde está definido el formulario para selecionar la categoría de productos a mostrar. 
      // Para enviar a este componente hijo importado la variable de estado "filterCategory" creada para alojar el contenido filtrado por el <select></select> definido en su html, se llama a su función "setFilterCategory" como atributo del este elemento html y se incluye en el argumento de la función del elemento hijo como props. También lleva como atributo la propia variable de estado para ser utilizada como valor del atributo "value" del <select></select>  */}
      <FilterCategory setFilterCategory={setFilterCategory} filterCategory={filterCategory} />

      {/* PASO 1. Elemento html para importar el componente ListProduct donde está definida la estructura html asociada al contenido de cada item importado de la API (listado de productos). Como atributo se le da la función "getDataFiltered" definida para aplicar los métodos .filter sobre la variable de estado con la lista original de productos "listProduct". Esta función asimismo se pasará como props a este componente hijo como argumento de su function */}
      <ListProduct listProduct={getDataFiltered()} />
    </>
  )
}

export default App 
