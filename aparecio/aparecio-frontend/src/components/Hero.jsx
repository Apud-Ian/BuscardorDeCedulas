import Features from "./Features";

const Hero = () => {
    return (
<div>
        <section className="bg-[linear-gradient(rgba(122,180,216,0.5),rgba(0,31,63,0.6)),url('/BAnderaUruguayafull.png')] bg-cover bg-center px-[5%] py-32 flex  items-center justify-start text-left text-white relative z-0">

            <div className="max-w-3xl">

                <h1 className="text-6xl font-extrabold leading-tight mb-6">
                    Encontrá tu cédula perdida en Uruguay
                </h1>

                <p className="text-2xl leading-9 mb-10 opacity-90">
                    Una plataforma colaborativa para conectar personas con
                    documentos encontrados de forma rápida, segura y accesible
                    en todo el país.
                </p>

                <a href="#app" className="bg-white text-[#001f3f] px-8 py-4 text-lg font-extrabold rounded-lg cursor-pointer w-full max-w-[320px] transition duration-200 hover:scale-105 hover:shadow-xl">
                    Comenzar búsqueda
                </a>
                <div className=" hidden md:block">
              <Features/>
              </div>
            </div>
        </section>
        <div className="sm:block md:hidden align-middle flex justify-center items-center bg-gray-100">
            <Features/>
        </div>
        </div>
    );
};

export default Hero;