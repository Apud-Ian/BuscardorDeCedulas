import { Lock, MapPin, Users } from "lucide-react";

const Features = () => {
    return (
        <section className="w-screen pt-12">
            
            <div className="md:max-w-[75%]  ">
                <div className="flex flex-col md:flex-row gap-6">
                    
                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex-1 text-center min-h-[280px]">
                        <div className="flex justify-center mb-6">
                            <Lock size={48} className="text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Búsqueda Confidencial
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-[17px]">
                            Tus datos privados están protegidos. Solo se requiere
                            información personal conocida para la búsqueda.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex-1 text-center min-h-[280px]">
                        <div className="flex justify-center mb-6">
                            <MapPin size={48} className="text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Cobertura Nacional
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-[17px]">
                            Conectamos todo el territorio para que encuentres tu
                            cédula, sin importar dónde se perdió.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex-1 text-center min-h-[280px]">
                        <div className="flex justify-center mb-6">
                            <Users size={48} className="text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Comunidad Solidaria
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-[17px]">
                            Participa reportando documentos encontrados y ayuda a que
                            vuelvan a sus dueños.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;