const Nav = () => {
    return(
            <nav>
        <div className="logos">
            <span>ApareCIó</span>
            <span style={{ fontWeight: 400, fontSize: '0.9rem' }}>FACULTAD DE INGENIERÍA UDELAR</span>
        </div>
        <div className="nav-links">
            <a href="#" onClick={() => irAlMotor('encontre')}>Publicar</a>
            <a href="#" onClick={() => irAlMotor('perdio')}>Buscar</a>
            <a href="#contacto">Contacto</a> 
        </div>
        <button className="btn-login">Iniciar sesión</button>
    </nav>
    )
}

export default Nav;