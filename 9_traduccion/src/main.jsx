import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './scss/index.css'
import TranslationProvider from './context/intl.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Importamos la función creada en el contexto de traducción "intl.context" que contiene el código a ejecutar cuando el usuario cambia de lenguaje para hacer la traducción correspondiente */}
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);
