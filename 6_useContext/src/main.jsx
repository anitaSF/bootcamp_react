import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './scss/index.css'
import { BrowserRouter } from 'react-router-dom'; // Módulo importado para trabajar con rutas. Se debe añadir el elemento html <BrowserRouter></BrowserRouter> englobando toda la <App />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
