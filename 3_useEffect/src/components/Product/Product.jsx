// COMPONENTE 4. Componente para pintar el formulario de creación de nuevo producto

const INITIAL_STATE = {
    id: '',
    category: '',
    title: '',
    price: '',
    image: '',
} // Variable creada para resetear el formulario cada vez que se haya añadido un nuevo producto (evento onSubmit), por ello es un objeto con la misma estructura que "newProduct" pero vacío. Deberá ejecutarse mediante la función "setNewProduct" de la variable de estado que aloja los nuevos objetos y dentro del evento onSubmit. De esta forma, una vez añadido el producto al array original mediante la función previa "addNewProduct", se resetea a un array vacio (gracias a su función "setNewProduct" a la cual se le da el valor de esta nueva variable "INITIAL_STATE")

function Product({ changeNewProduct, addNewProduct, newProduct, setNewProduct }) {
    // Función manejadora del evento "onChange". Cuando se modifica cualquier elemento html del <form></form> ejecuta el código: llama la función "changeNewProduct" creada en el elemento padre "App.jsx" para crear la copia del nuevo objeto y añadirlo al array original alojado en la variable "listProduct"
    const handleInput = (e) => {
        changeNewProduct(e.target.id, e.target.value);
    };

    // Función manejadora del evento onSumbit, también definido sobre el elemento <form></form>. 
    const handleForm = (e) => {
        e.preventDefault(); // Método para evitar que el formulario se recargue automáticamente al enviarse.
        addNewProduct(); // Llama a la función "addNewProduct" creada en el componente padre para ejecutarla y que se cree la copia del array original "listProduct" con el nuevo producto añadido.
        setNewProduct(INITIAL_STATE); // Llama a la función de la variable de estado creada para alojar el nuevo objeto introducido en el formulario "setNewProduct" y le da el valor de la variable "INITIAL_STATE" arriba creada como objeto vacío, para que una vez añadido el objeto nuevo al array original mediante la función previamente ejecutada por el mismo evento (addNewProduct), se limpie tanto el formulario como el objeto asociado "newProduct" y se quede vacío para poder volver a alojar un nuevo item cuando el usuario lo introduzca
    };

    // Función manejadora del evento onClick definido sobre el <button>Reseet</button> para que limpie el contenido introducido en el formulario y en la variable de estado asociada (newProduct) volviendola a objeto vacio como se ha definido en la variable INITIAL_STATE. Pero en este caso no se añade al array original, es un método para limpiar de una el contenido introducido.
    const handleReset = (e) => {
        e.preventDefault(); // Método para evitar que el formulario se recargue automáticamente al enviarse.
        setNewProduct(INITIAL_STATE);
    };

    return (
        <>
            {/* Formulario para introducir un nuevo producto. La estructura debe corresponder con las propiedades de los objetos (item) del array importado de la API.
            La variable de estado para alojar los datos introducidos, es un objeto y está definida en el componente padre "App.jsx" ya que es ahí donde esta la variable de estado que aloja la lista general de productos (listProduct) donde se debe añadir el nuevo item (objeto).
            Esta nueva variable de estado debe ser un objeto con las mismas propiedades que el array importado de la API, y cada propiedad se debe relacionar con el campo <input> mediante su atributo "value". Esto se define como "controlar los elementos formulario" */}
            <form action="" onSubmit={handleForm} onChange={handleInput}>
                <fieldset>
                    <legend><strong>Añadir nuevo producto</strong></legend>
                    <div>
                        <label htmlFor="id">Numero Ref.</label>
                        <input type="number" name="id" id="id" value={newProduct.id} />
                    </div>
                    <div>
                        <label htmlFor="title">Nombre</label>
                        <input type="text" name="title" id="title" value={newProduct.title} />
                    </div>
                    <div>
                        <label htmlFor="title">Precio</label>
                        <input type="number" name="price" id="price" value={newProduct.price} />
                    </div>
                    <div>
                        <label htmlFor="category">Categoría</label>
                        <input type="text" name="category" id="category" value={newProduct.category} />
                    </div>
                    <div>
                        <label htmlFor="image">Imagen</label>
                        <input type="text" name="image" id="image" value={newProduct.image} />
                    </div>
                    <button>Añadir</button>
                    <button onClick={handleReset}>Reset</button>
                </fieldset>
            </form>
        </>
    );
}

export default Product