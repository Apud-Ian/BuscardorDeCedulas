const Nav = () => {
    return (
        <nav className="bg-[#001f3f] flex flex-col items-center px-[5%] py-4 gap-4 w-full box-border relative z-10">

            <div className="flex flex-row align-middle   items-center text-white font-extrabold text-[1.1rem] text-center gap-1">
                
                <span>ApareCIó</span>

               
                <div className="w-[1.9px] h-6 mx-4 bg-gray-300"></div>

                <img src="/favicon.png" alt="Circular app logo with stylized A in blue and white, located to the right of the site name ApareCIó inside a dark blue navigation bar, conveying a clean professional tone" className="w-10 h-10" />

            </div>

            <div className="flex gap-6 flex-wrap text-4xl justify-center">

                <a
                    href="#app"
                    className="text-white no-underline font-semibold text-[0.9rem] transition-opacity duration-200 hover:opacity-70"
                >
                    Publicar
                </a>

                <a
                    href="#app"
                    className="text-white no-underline font-semibold text-[0.9rem] transition-opacity duration-200 hover:opacity-70"
                >
                    Buscar
                </a>

                <a
                    href="#contacto"
                    className="text-white no-underline font-semibold text-[0.9rem] transition-opacity duration-200 hover:opacity-70"
                >
                    Contacto
                </a>

            </div>

        </nav>
    );
};

export default Nav;