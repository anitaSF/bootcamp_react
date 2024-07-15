import { useContext, useState } from "react";
import { tasksContext } from "../tasksContext/tasksContext";

function FormTask() {

    const [titleTask, setTitleTask] = useState(''); // Variable de estado creada para alojar el contenido recibido en el formulario de nueva tarea

    const context = useContext(tasksContext); // Variable para alojar el contexto donde se alojan las variables y funciones con las que se va a trabajar en este componente. Se ejecuta el Hook "useContext" para ello

    const handleInput = (e) => {
        setTitleTask(e.target.value);
    }; // Función manejadora del evento onChange para pasar el valor introducido en el formulario a la variable de estado creada para ello "titleTask", para lo cual en su código se llama a su función "setTitleTask" y se le pasa el valor recogido por el evento (e.target.value)

    const handleClick = (e) => {
        e.preventDefault();
        const newTask = {
            title: titleTask,
            isCompleted: false,
            id: context.tasks.length + 1,
        };
        context.addTask(newTask);
    }; // Función manejadora del evento onClick del elemento <button></button> que ejecuta el siguiente código al enviar el formulario: 
    //1. prevenir la recarga automática del formulario (e.preventDefault();); 
    // 2. Crear una variable objeto (newTask) con la misma estructura que el array original definido como variable de estado en el contexto "tasksContext" con la lista de tareas (tasks). A la propiedad title se le asigna el valor de la variable de estado que recoje el dato introducido por el usuario; a la propiedad isComplete por defecto es false (no está hecha), y por "id" se le da la numeración que le tocaría en la posición del array, para lo que se llama a la variable de estado del contexto que aloja el array (context.tasks) y con el método .length le suma 1 (context.tasks.lenght + 1)
    // 3. Llama a la función "addTask" definida en el contexto para añadir este nuevo objeto

    return (
        <form action="">
            <label htmlFor="task">Nombre Tarea</label>
            <input type="text" id="task" name="task" onChange={handleInput} />
            <button onClick={handleClick}>Añadir tarea</button>
        </form>
    )
}

export default FormTask;