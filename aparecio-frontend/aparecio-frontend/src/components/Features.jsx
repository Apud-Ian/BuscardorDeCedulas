import { Lock, MapPin, Users } from "lucide-react";

const Features = () => {
    return (
        <section className="flex flex-row max-sm:flex-col gap-9 px-5 py-6 bg-slate-50 justify-between">
            
            <div className="w-full bg-white p-4 rounded-xl shadow-md text-center animate-fade-up [animation-delay:200ms]">
                <Lock className="mx-auto mb-3" size={32} />

                <h3 className="text-lg font-semibold mb-2">
                    Búsqueda Confidencial
                </h3>

                <p className="text-sm text-gray-600">
                    Tus datos privados están protegidos. Solo se requiere
                    información personal conocida para la búsqueda.
                </p>
            </div>

            <div className="w-full bg-white p-4 rounded-xl shadow-md text-center animate-fade-up [animation-delay:400ms]">
                <MapPin className="mx-auto mb-3" size={32} />

                <h3 className="text-lg font-semibold mb-2">
                    Cobertura Nacional
                </h3>

                <p className="text-sm text-gray-600">
                    Conectamos todo el territorio para que encuentres tu
                    cédula, sin importar dónde se perdió.
                </p>
            </div>

            <div className="w-full bg-white p-4 rounded-xl shadow-md text-center animate-fade-up [animation-delay:600ms]">
                <Users className="mx-auto mb-3" size={32} />

                <h3 className="text-lg font-semibold mb-2">
                    Comunidad Solidaria
                </h3>

                <p className="text-sm text-gray-600">
                    Participa reportando documentos encontrados y ayuda a que
                    vuelvan a sus dueños.
                </p>
            </div>

        </section>
    );
};

export default Features;