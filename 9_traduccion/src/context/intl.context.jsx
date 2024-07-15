// Los lenguajes de traducción de una web/app se deben definir en un contexto para poder importarlo y utilizarse desde cualquier componente

import { createContext, useState } from "react";
import esMessages from "../lang/es.json";
import enMessages from "../lang/en.json"; // Importar archivos json creados para cada lenguaje. Para ello en este import se crea una variable para alojar cada lenguaje (esMessages / enMessages...)
import { IntlProvider } from "react-intl"; // Componente obligatorio para trabajar con traducciones. Requiere instalación de módulo nuevo > npm install react-intl

// Creamos el contexto gracias al Hook "createContext()"
export const TranslationContext = createContext();

// Crear un objeto cuyas propiedades alojan cada una de las variables creadas para los respectivos lenguajes de traducción de la web
const messageContext = {
    es: esMessages,
    en: enMessages
};

// Crear una función por cada lenguaje, cuyo código estara definido por dos variables de estado: una para alojar el idioma seleccionado y otra para alojar el archvio .json que contiene esta traducción. La props es siempre {children} y se corresponde con el componente general de la web <App />, ya que va a ser el elemento que va a englobar en el archivo general "main.jsx" donde se importará esta funcion
const TranslationProvider = ({ children }) => {
    const [locale, setLocale] = useState("es"); // Variable de estado creada para alojar el idioma que se selecciona
    const [messages, setMessages] = useState(messageContext.es); // Variable de estado creada para alojar el archivo .json que contiene la traducción al lenguaje anterior seleccionado

    const changeLocale = (newLanguage) => {
        setLocale(newLanguage);
        setMessages(messageContext[newLanguage]);
    }; // Función que ejecuta el cambio de idioma, llamando a cada función respectiva de las dos variables de estado anteriores y asignándoles un nuevo valor (newLanguage). Esta variable creada con el cambio a otro lenguaje, "newLanguage", envía la información recogida por la función manejadora del evento onChange definido sobre el formulario select en el componente <App /> para elegir el idioma que debe renderizar la web

    return (
        <TranslationContext.Provider value={{ changeLocale, locale }}>
            {/* Para exportar este contexto (TranslationContext) con la dependencia instalada necesaria para ejecutar las traducciones (IntlProvider), se deben llamar como elementos html
        Al contexto, se debe convertir a Proveedor gracias al método ".Provider" y se le pasa como "value" la variable creada para alojar el nuevo lenguage (changeLocale)  < TranslationContext.Provider value = {{ changeLocale }}>
        A la dependencia "IntlProvider" se le pasa como atributos las variables de estado creadas para alojar tanto el idioma seleccionado, como el correspondiente archivo .json  <IntlProvider locale={locale} messages={messages}> */ }
            <IntlProvider locale={locale} messages={messages}>
                {/* El contenido siempre es {children} y se corresponde con la props {children} pasada a la función "TranslationProvider" creada para ejecutrar el cambio de un lenguaje a otro. Esta props alojará al componente general de la web <App />, ya que va a ser el elemento que va a englobar en el archivo general "main.jsx" donde se importará esta funcion */}
                {children}
            </IntlProvider>

        </TranslationContext.Provider>
    );
};

export default TranslationProvider



