import { createContext, useState } from "react";

export const tasksContext = createContext(); // Función creada para alojar el contexto de una web. Se crea ejecutando el método propio de React "createContext"

// Hook personalizado que se crea para modificar y acceder al contexto creado. Como los propios Hooks de React, lo nombramos con el prefijo "useNombreContexto".
// Las acciones a ejecutar sobre este contexto son conocidas en programación como "CRUD", y son las siguientes: create, read, update, delete
export const useTasksContext = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Ir a la compra', isComplited: false },
        { id: 2, title: 'Hacer examen DGT', isComplited: false },
    ]); // Variable de estado para alojar las propiedades (datos) con las que se va a trabajar en el contexto, y que se exportaran a cualquier componente de la web. Para modificar cada propiedad es necesario una función que será definida justo abajo:

    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }; // Función creada para modificar el array alojado en la variable de estado "tasks" y añadir un nuevo objeto.
    // Para modificar esta variable de estado, como es un array, se debe ejecutar un spreed operator "..." para que haga una copia del array con las propiedades originales (...tasks), y el segundo parámetro indica el item nuevo a añadir (newTask), que también se ha tenido que definir como argumento de la función

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id != id));
    }; // Función para eliminar una tarea de la lista alojada en la variable de estado "task" para lo que llama a su función "setTasks" y le aplica el método .filter, que devuelve un nuevo array copia del original, pero con la condicion añadida en el callback, sin el item que corresponde con el "id" que se le pase

    return { tasks, addTask, deleteTask }; // Todas las variables y funciones se deben ejecutar en un return para que se guarden y se puedan utilizar en el resto de componentes
};