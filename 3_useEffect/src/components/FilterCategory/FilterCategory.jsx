// COMPONENTE 3. Componente creado para pintar el elemento select con las categorías de producto que puede seleccionar el usuario. Requiere de una nueva petición API

import { useEffect, useState } from "react"

// La función del componente tiene como props por un lado la variable de estado creada para alojar el valor del <select></select> enviado por el usuario "filterCategory", y que será el valor dado al atributo "value" de este elemento html para controlar el formulario. También se pasa la función respectiva a la variable de estado, "setFilterCategory" para que le envíe este valor seleccionado
function FilterCategory({ setFilterCategory, filterCategory }) {
    const [categories, setCategories] = useState([]); // Variable de estado para alojar el contenido importado de la petición a la API para recoger las categorias de los productos. Por ello será un array vacío, porque se rellenará con los item incluidos en el array importado de la API

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []); // Peticion a la API para recoger las categorías de productos importados y crear el filtro. Para ello en el método segundo .then se ejecuta la función "setCategories" de la variable de estado "categories" definida como un array vacio para alojar la información importada en esta.

    const handleSelect = (e) => {
        setFilterCategory(e.target.value);
    }; // Funcion manejadora del evento onChange definido sobre el elemento html <select></select>. Como argumento se incluye el objeto del evento y como código a ejecutar llama a la función "setFilterCategory y le pasa el contenido recogido en el select para que lo aloje en su variable de estado "filterCategory" definida en el elemento padre "App.jsx"

    return (
        <div>
            <label htmlFor="category">Selecciona tu categoría</label>
            <select name="category" id="category" value={filterCategory} onChange={handleSelect}>
                <option value=''>Seleccione</option>
                {categories.map((cat, i) => (
                    <option value={cat} key={i}> {cat} </option>
                ))}
                {/* Se aplica el método array .map sobre el array original categories para crear un array nuevo partir de estos items (cat) creando un elemento <option></option> para cada uno. De esta forma se rellenan las opciones del elemento <select></select> del formulario.
                React obliga a dar un nuevo atributo único "key" a cada elemento creado meidante el método .map que suele alojar el valor de la propiedad "id". Como en este caso los item importados no tienen esta propiedad, se utiliza el valor universal key={i}>. Se le debe pasar como argumento al método junto con cat (cat, i) */}

            </select>
        </div>
    )
}

export default FilterCategory