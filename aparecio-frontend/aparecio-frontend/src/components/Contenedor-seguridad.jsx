const ContenedorSeguridad = () => {return(
    
    <div className="contenedor-seguridad revelar activo">
        <h3 className="seguridad-titulo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Centro de Información y Seguridad
        </h3>
        
        <div className="acordeon-item">
            <button className="acordeon-btn">Riesgos de perder la Cédula</button>
            <div className="acordeon-contenido">
                <p className="acordeon-texto">Al perder tu documento en el país, te expones a riesgos de suplantación de identidad. Personas malintencionadas podrían utilizarlo para solicitar préstamos a tu nombre, realizar fraudes comerciales o abrir cuentas en servicios que no requieren verificación presencial.</p>
            </div>
        </div>

        <div className="acordeon-item">
            <button className="acordeon-btn">¿Qué debo hacer legalmente?</button>
            <div className="acordeon-contenido">
                <p className="acordeon-texto">El primer paso vital es realizar la denuncia policial por extravío en la seccional más cercana. Esto genera un respaldo legal oficial que te exime de responsabilidad ante cualquier uso ilícito que un tercero intente darle a tu documento a partir de esa fecha.</p>
            </div>
        </div>

        <div className="acordeon-item">
            <button className="acordeon-btn">El peligro de las Redes Sociales</button>
            <div className="acordeon-contenido">
                <p className="acordeon-texto">Nunca publiques ni compartas fotos de cédulas encontradas en Facebook, Instagram o X. Al hacerlo, expones la fecha de nacimiento, la firma y el número de trámite de esa persona, facilitando enormemente las estafas digitales. Utiliza siempre nuestro motor de búsqueda ciego.</p>
            </div>
        </div>
    </div>
)}

export default ContenedorSeguridad;