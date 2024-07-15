// COMPONENTE 5. Componente creado para pintar un selector de categoría de producto, pero esta vez con elementos checkbox

// La funcion del componente recibe como props la variable de estado donde se aloja el valor de la selección "categoryCheckbox" que será utilizada para definir el atributo "checked" de cada elemento checkbox y controlar el formulario. También recibe la función que crea el nuevo array de categorías a partir de la selección realizada por el usuario "changeCategoryCheckbox", que se llama desde la función manejadora del evento para pasarle el valor de la selección
function CategoryCheckbox({ changeCategoryCheckbox, categoryCheckbox }) {

    const handleCheckbox = (e) => {
        changeCategoryCheckbox(e.target.value);
    }; // Función manejadora del evento onChange definido sobre el elemento formulario para enviar el valor de los checkbox seleccionado a la variable creada en el componente padre "App.jsx" que aplicará el filtro de las categorías de productos a mostrar. En este caso, no se llama a la variable de estado donde se aloja el array de categorias original "categoryCheckbox" sino a la función creada con el valor de la seleccion "changeCategoryCheckbox"

    return (
        <div>
            <form onChange={handleCheckbox}>
                <input type="checkbox" name="electronica" id="electronica" value="electronica" checked={categoryCheckbox.includes('electronica')} />Electrónica
                <input type="checkbox" name="joyas" id="joyas" value="joyas" checked={categoryCheckbox.includes('joyas')} />Joyas
                <input type="checkbox" name="ropa" id="ropa" value="ropa" checked={categoryCheckbox.includes('ropa')} />Ropa
            </form>
        </div>
    )
}

export default CategoryCheckbox