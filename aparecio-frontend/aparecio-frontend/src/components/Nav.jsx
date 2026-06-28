const Nav = () => {
    return (
        <nav className="bg-[#001f3f] flex flex-col items-center px-[5%] py-4 gap-4 w-full box-border relative z-10">

            <div className="flex flex-row align-middle   items-center text-white font-extrabold text-[1.1rem] text-center gap-1">
                
                <span>ApareCIó</span>

                <span className="font-light text-[0.9rem]">
                    FACULTAD DE INGENIERÍA UDELAR
                </span>

                <div className="w-[1.9px] h-6 mx-4 bg-gray-300"></div>

            </div>

            <div className="flex gap-6 flex-wrap text-4xl justify-center">

                <a
                    href="#motor-encontre"
                    className="text-white no-underline font-semibold text-[0.9rem] transition-opacity duration-200 hover:opacity-70"
                >
                    Publicar
                </a>

                <a
                    href="#motor-perdio"
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