const ZonaApp = () => {
    return (
        <section className="zona-app revelar activa" id="motor-busqueda">
            <h2 className="titulo-seccion">Accede a la red de búsqueda</h2>

            <div className="contenedor-tabs activa">
                <div id="tab-encontre" className="tab activa">Encontré una Cédula</div>
                <div id="tab-perdio" className="tab" >Perdí mi Cédula</div>
            </div>

            <div className="contenedor-formularios activa">
                <div id="seccion-encontre" className="tarjeta-form activa">
                    <label>Número de Cédula (sin puntos ni guiones)</label>
                    <input type="text" id="ci_encontrada" placeholder="Ej: 1.234.567-8" maxLength="11" />

                    <label>Nombre visible en el plástico</label>
                    <input type="text" id="nombre_encontrada" placeholder="Ej: María G." />

                    <label>Tu correo electrónico (para avisarte si la buscan)</label>
                    <input type="email" id="email_encontro" placeholder="ejemplo@correo.com" />

                    <label>Lugar del hallazgo (Opcional)</label>
                    <input type="text" id="lugar_encontrada" placeholder="Ej: Plaza Independencia, ómnibus 104, etc." />

                    <button className="btn-submit" >Publicar Hallazgo</button>
                </div>

                <div id="seccion-perdio" className="tarjeta-form">
                    <label>Tu Número de Cédula</label>
                    <input type="text" id="ci_perdida" placeholder="Ej: 1.234.567-8" maxLength="11" />

                    <label>Tu correo electrónico (para conectarte)</label>
                    <input type="email" id="email_perdio" placeholder="ejemplo@correo.com" />

                    <button className="btn-submit"  style={{ backgroundColor: '#FF8C42' }}>Buscar Documento</button>
                </div>
            </div>

            <div id="consola-resultados" />
        </section>
    );
};

export default ZonaApp;