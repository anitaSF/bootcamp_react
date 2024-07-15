PRACTICA ONLINE STORE
Hacer una peticion a un API para importar productos y pintarlos en un listado.
Añadir un buscador por palabras para filtrar productos
Añadir un selector de categorias de productos para filtrar productos
Crear un formulario de nuevo producto

1- Pedir datos de la API con useEffect() --> hook permite controlar cuantas veces se va a ejecutar un bloque de instrucciones [] --> indica que el bloque se ejecuta una sola vez

2- Crear un componente para pintar el listado de productos, utilizando el método .map sobre el array importado (para pintar un listado un listado de datos simpre hay que usar .map)

3- Crear un componente para el buscador: pintar formulario con el campo de entrada donde el usuario a hacer el filtro, con un input donde el usuario indique el término por el que filtrar la búsqueda.

4- Crear una variable de estado donde guardar el valor introducido por el usuario en el search (esta variable suele estar en el componente principal). Y ejecutar un método .filter sobre el array principal importado, definiendo las condiciones necesarias para el filtro, en este caso que el valor introducido por el usuario este incluido en el título del producto

5- Crear un nuevo componente para el desplegable de categorías, con un elemento select. Hacer nueva peticion a la API desde este componente para importar las categorías de producto existentes y alojarlas en una nueva variable de estado en este componente. Utilizara método .map para pintar el listado de categorías y mostrarlas en cada opción del select.

6- Crear un variable de estado para guardar el valor seleccionado por el usuario (categoria) y añadir un nuevo método .filter a la función anterior (filtros encadenados), en este caso con un condicional para devolver los productos de una categoría si la variable de estado creada para ello ha variado (el usuario ha elegido una nueva categoria)

7- Añadir un nuevo producto a mi listado:
    - Crear un componente con el HTML del form (precio, imagen, nombre categoria)
    - Crear un variable de estado con el nuevo producto. Debe ser un objeto {} y debe ir en el componente principal App.jsx donde está el array original de lista de productos importado de la API, ya con ella voy a modificarlo
    - Crear las 2 funciones auxiliares para modificar el array de productos original (las variables de estado que contienen array u objetos requieren de un proceso más complejo): una función creará una copia del objeto nuevo creado y otra función creará una copia del array original de lista de productos pero ya con el nuevo objeto añadido
    - Ejecutar el evento onChange sobre el formulario para que la variable de estado del nuevo producto se cambie cada vez que el usuario introduce un nuevo valor en cada input, y llama a la función auxiliar 1 definida para que se cree la copia. Estos valores se pasan al componente principal donde está la variable de estado mediante la función manejadora del evento
    - Ejecutar el evento onSubmit sobre el formulario para que cuando el usuario punse el botón "Añadir" y envíe el formulario se ejecute la función auxiliar 2 para que se cree la copia del array con el nuevo objeto ya añadido

    
Evento onclick- onsubmit para enviar los datos y modificar la lista de productos con el nuevo producto