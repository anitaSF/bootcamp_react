import { FormattedMessage } from "react-intl";

function Header() {
    const user = "Anacleta";
    return (
        <div>
            <h1>
                <FormattedMessage id="app.header" defaultMessage={"Hola Mundo"} />
            </h1>
            <p>
                <FormattedMessage id="app.user" defaultMessage={"Bienvenido"} values={{ user }} />
            </p>
            {/* El contenido de la web que cambia de lenguaje debe de definirse con un texto por defecto. Para ello se debe importar el módulo "FormatedMessage" y pintarse como elemento html <FormattedMessage /> dentro de la etiqueta html correspondiente. Este elemento html se debe enlazar con la propiedad correspondiente en el objeto de su .json, mediante el atributo "id". El mensaje por defecto se define en el atributo "defaultMessage". En los casos que el contenido tenga variables, se requiere también del atributo "value" y debe llamar a la misma variable que está definida en su propiedad del objeto del .json del idioma */}
        </div>
    )
}

export default Header