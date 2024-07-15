// COMPONENTE 2. Componente creado para pintar el buscador de la web. 

// La función del componente recibe en su argumento como props, por un lado la variable de estado creada para alojar el contenido introducido "search" para dar el valor al atributo "value" del formulario y de esta forma tenerlo controlado, y por otro la respectiva función "setSearch" para enviar el valor introducido pr el usuario en el input,. Estas a su vez serán los atributos del elemento html que se importará en el elemnto padre "App.jsx"
function Filters({ setSearch, search }) {


    const handleInput = (e) => {
        setSearch(e.target.value);
    };
    // Función manejadora del evento onChange. Como argumento recibe el evento (e) y como código a ejecutar se llama a la función de la variable de estado "setSearch" (definida en el componente padre App.jsx donde se importará este componente) para alojar en esta el valor recogido por el evento en el <input> del formulario

    return (
        <form action="">
            <label htmlFor="search">Indica nombre</label>
            <input type="text" id="search" name="search" value={search} onChange={handleInput} />
            {/* Evento aplicado sobre el elemento <input> para que cuando se aplique un cambio (el usuario introduzca un valor) se active su función manejadora "handleInput" */}
        </form>
    )
}

export default Filters