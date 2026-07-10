const Footer = () => {
    return (
            <footer id="contacto">
        <div className="contacto-info">
            <h3>¿Necesitas ayuda con el sistema?</h3>
            <p>El equipo de ApareCIó está aquí para asistirte.</p>
            <a href="mailto:apareciotucedula@gmail.com" className="btn-correo">✉️ apareciotucedula@gmail.com</a>
        </div>
        
        <div className="footer-legal">
            <p><b>ApareCIó</b> | Desarrollado con ❤️ en Uruguay</p>
            <p>© 2026 Facultad de Ingeniería UdelaR. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>Protección de Datos Personales regida por la Ley N° 18.331 de la República Oriental del Uruguay.</p>
        </div>
    </footer>
    )}

    export default Footer;