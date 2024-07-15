// Componente para definir la petición a la API y que se pueda utilizar desde cualquier componente
// Aquí se definen los parámetros de seguridad, autorizaciones, contenido y lenguaje permitido... normalizado en los procesos de petición API. 
// Estas propiedades ya están definidas y no se pueden inventar: https://developer.mozilla.org/en-US/docs/Web/API/Headers


import axios from "axios";

// Variable para guardar las cabeceras de la peticion al servidor AXIOS. Estas son las básicas pero se pueden configurar tantas como se requiera
const APIHeaders = {
    "Content-Type": "application/json", // tipo de contenido al que se va a convertir los datos de la API (.json)
    "Accept": "application/json", // tipo de lenguaje aceptado (.json)
    "Authorization": "Bearer token" // autorización para acceder al contenido de una API privada. El "token" lo debe facilitar los propietarios de la API
}

// Exportar la configuración de la API para poderla utilizar en cualquier petición API que se defina desde cualquier componente de la web. Para ello se guarda en una variable "const API"
// Se deberá susutituir la parte de la URL indicada en la propiedad "baseURL"
// En cada componente que se realice una petición, en vez de importar el módulo axios, se debe importar este archio "api.jsx"
export const API = axios.create({
    baseURL: 'https://hp-api.onrender.com/api/', // Base de la URL a la que se hace la petición API
    Headers: APIHeaders, // Cabeceras definidas arriba
})

