import { useContext } from "react"; // Hook propio de React para poder trabajar con un contexto creado desde un componente

import { tasksContext } from "../tasksContext/tasksContext"; // importamos el componente que tiene el contexto creado
import FormTask from "../FormTask/FormTask";

function ListTasks() {
    const context = useContext(tasksContext); // Variable creada para alojar el contexto creado. Para ello se ejecuta el Hook "useContext" propio de React importado (que permite trabajar con un contexto creado) y se le pasa el valor de dicho contexto creado "tasksContext". 
    // Para utilizar las variables o funciones definidas en este contexto, se llaman como propiedades de esta nueva variable (context.variable). En este caso la variable de estado sería "context.tasks" y la función para crear nueva tarea "context.addTask"

    const handleClick = (e) => {
        context.deleteTask(e.target.id);
    }; // Función manejadora del evento del elemento <span></span> que ejecuta la función llamada en el contexto importado "tasksContext" para eliminar el item con "id" respectivo, para ello se le ha tenido que dar el atributo "id" a este elemento <span></span> 

    return (
        <div>
            <ul>
                {context.tasks.map((task) => (
                    <li key={task.id}>{task.title} <span onClick={handleClick} id={task.id}>❌</span> </li>
                ))}
            </ul> {/* para pintar el listado de tareas guardado en la variable de estado "tasks" creada en el contexto importado "tasksContext", se ejecuta el método .map "context.tasks.map", para que de cada item/objeto (task) del array cree un elemento de lista <li></li> cuyo contenido sea la propiedad title (task.title) */}
            <FormTask /> {/* Elemento para importar el componente con el formulario de crear nueva tarea */}
        </div>
    )
}

export default ListTasks