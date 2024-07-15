// COMPONENTE 1.- Componente creado para pintar el listado de productos importado de la API. Para ello se ejecuta el método .map sobre el array para devolver el detalle de cada item

import './listproduct.scss';

// La función del componente "ListProduct" recibe la prop "listProduct" como argumento para poder trabajar con los datos importados de la API en el componente principal donde será importado. Ya que este componente se crea para pintar la lista de productos
function ListProduct({ listProduct }) {

    // Método array .map para crear un nuevo array a partir de los items de un array original. Cada item del nuevo array podrá ser igual al orinigal o modificado por el código definido en el callback del método: arrayName.map((arrayItem) => (callback: código a ejecutar para definir el nuevo array));
    // En este caso, cada item aparecerá como contenido de un elmento html <li></li> que se creará por cada item. Dentro de cada <li></li> se define una nueva estructura para pintar las diferentes propiedades de cada item
    // Este nuevo array se aloja en la variable creada "dataLi" que será la utilizada como contenido del elemento html <ul></ul> definido en el return donde se pintará la lista de productos
    const dataLi = listProduct.map((product) => (
        // Estructura html creada para pintar las propiedades de cada item. Cada propiedad irá dentro de un elemento html como variable entre llaves {}.
        // React obliga a dar un nuevo atributo único "key" a cada elemento de lista creado meidante el método .map que suele alojar el valor de la propiedad "id" de cada item <li></li>
        <li key={product.id} className="card">
            <img src={product.image} className="card_image" />
            <h4>{product.title}</h4>
            <h4>Precio: {product.price}</h4>
        </li>
    ));

    return (
        <>
            <div>List Product</div>
            <ul className='product-list'>{dataLi}</ul>
            {/* Elemento <ul></ul> creado para alojar el contenido de los elementos <li></li> creados por el método .map sobre el array listProduct importado de la API desde el componente ppal de la web "App.jsx" */}
        </>
    )
}

export default ListProduct