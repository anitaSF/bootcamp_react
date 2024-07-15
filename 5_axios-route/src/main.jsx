import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './scss/index.css';
import { BrowserRouter } from 'react-router-dom'; // Modulo importado para trabajar con rutas. Hay que llamarlo en el html como elemento <BrowserRouter></BrowserRouter> y envolver el componente general <App />

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
