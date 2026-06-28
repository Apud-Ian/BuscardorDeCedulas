import { Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const ContenedorSeguridad = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            title: "Riesgos de perder la Cédula",
            content: "Al perder tu documento en el país, te expones a riesgos de suplantación de identidad. Personas malintencionadas podrían utilizarlo para solicitar préstamos a tu nombre, realizar fraudes comerciales o abrir cuentas en servicios que no requieren verificación presencial."
        },
        {
            title: "¿Qué debo hacer legalmente?",
            content: "El primer paso vital es realizar la denuncia policial por extravío en la seccional más cercana. Esto genera un respaldo legal oficial que te exime de responsabilidad ante cualquier uso ilícito que un tercero intente darle a tu documento a partir de esa fecha."
        },
        {
            title: "El peligro de las Redes Sociales",
            content: "Nunca publiques ni compartas fotos de cédulas encontradas en Facebook, Instagram o X. Al hacerlo, expones la fecha de nacimiento, la firma y el número de trámite de esa persona, facilitando enormemente las estafas digitales. Utiliza siempre nuestro motor de búsqueda ciego."
        }
    ];

    return (
        <div className="w-[90%] mx-auto mt-12 mb-4 bg-white rounded-xl shadow-md overflow-hidden relative z-10">

            <h3 className="bg-orange-100 text-[#001f3f] px-6 py-4 m-0 text-[1.1rem] flex items-center gap-3 border-b border-orange-200 font-semibold">
                <Shield size={24} className="text-orange-600" />
                Centro de Información y Seguridad
            </h3>

            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-none">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left bg-transparent border-none px-6 py-5 text-base font-semibold text-gray-700 cursor-pointer flex justify-between items-center transition duration-300 hover:bg-orange-50 hover:text-orange-700"
                    >
                        {item.title}
                        <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-600' : 'text-gray-400'}`}
                        />
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                        <p className="px-6 pb-6 text-[0.95rem] text-gray-600 leading-7">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ContenedorSeguridad;