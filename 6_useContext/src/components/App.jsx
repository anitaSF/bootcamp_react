import { useUserContext, userContext } from "./userContext/userContext"
import { tasksContext, useTasksContext } from "./tasksContext/tasksContext";

import { Route, Routes } from "react-router-dom";

import Login from "./Login/Login"
import Home from "./Home/Home"
import ListTasks from "./ListTasks/ListTasks";
import Header from "./Header/Header";


function App() {

  const userContextExport = useUserContext(); // variable creada para alojar el contexto creado en el componente "userContext". Esta variable da valor a la etiqueta html <nombreContext.Provider></nombreContext.Provider> que debe englobar todo el código de la aplicacion

  const tasksContextExport = useTasksContext(); // variable creada para alojar el contexto creado en el componente "tasksContext". Esta variable da valor a la etiqueta html respectiva

  return (
    <div>
      <Header />
      <userContext.Provider value={userContextExport}>
        <tasksContext.Provider value={tasksContextExport} >
          {/*  Todo el contenido de la aplicación o sitio web debe estar definido dentro de esta etiqueta para que el código creado en el contexto se pueda utilizar desde cualquier component. Se pueden importar contextos dentro de contextos, siempre en orden de jerarquia */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tasks" element={<ListTasks />} />
          </Routes>


        </tasksContext.Provider>

      </userContext.Provider>
    </div>
  )
}

export default App 
