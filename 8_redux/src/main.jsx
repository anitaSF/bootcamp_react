import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './scss/index.css';

import { Provider } from 'react-redux'; // módulo propio de Redux para crear Stores y poder trabajar con reducers. Se debe importar y se debe añadir como elemento html en el return <Provider></Provider> englobando toda la <App />
import { createStore } from 'redux'; // Módulo propio de Redux necesario para crear stores, estados globales para trabajar con reducers. Se utiliza para llamar a la función creada en el archivo donde se han definido los reducers donde se combinan los diferentes reducers. Este store se guarda en una nueva variable que definirá el contenido de la etiqueta <Provider store={store}

import rootReducer from "./reducers/index"

const store = createStore(rootReducer); // Variable creada para alojar el Store creado con el contenido de la función que combina los diferentes reducers, creada en el archivo respectivo (en este caso "recetasReducers"). 
// Esta variable definirá el contenido de la etiqueta <Provider store={store}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
