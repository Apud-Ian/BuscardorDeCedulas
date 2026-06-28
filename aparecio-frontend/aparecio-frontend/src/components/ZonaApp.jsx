import { useState } from "react";
import EncontreForm from "./EncontreForm";
import BuscoForm from "./BuscoForm";
function ZonaApp() {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(true);

  return (
    <section className="flex flex-col items-start  w-full max-w-4xl mx-auto mt-12">
      
      {/* BOTONES */}
      
      <div className="flex border-b gap-4 border-gray-200 bg-gray-50 overflow-hidden">

  {/* Botón 1 - Buscar cédula */}
  <button
    onClick={() => setMostrarBusqueda(true)}
    className={`flex-1 py-3 px-4 sm:py-4 sm:px-6 font-medium text-lg rounded-t-xl sm:text-xl md:text-2xl transition-all duration-300 flex items-center justify-center gap-2
      ${mostrarBusqueda 
        ? 'bg-teal-600 text-white shadow-sm border-b-4 border-teal-700' 
        : 'bg-teal-500 text-white hover:bg-teal-600 border-b-4 border-transparent'
      }`}
  >
    Buscar cédula
  </button>

  {/* Botón 2 - Reportar cédula perdida */}
  <button
    onClick={() => setMostrarBusqueda(false)}
    className={`flex-1 py-3 px-4 sm:py-4 sm:px-6 font-medium text-lg rounded-t-xl sm:text-xl md:text-2xl transition-all duration-300 flex items-center justify-center gap-2
      ${!mostrarBusqueda 
        ? 'bg-orange-600 text-white shadow-sm border-b-4 border-orange-700' 
        : 'bg-orange-500 text-white hover:bg-orange-600 border-b-4 border-transparent'
      }`}
  >
    Reportar cédula perdida
  </button>

</div>
<div className="w-full rounded-2xl shadow-lg">
      {/* CONTENIDO */}
      {mostrarBusqueda ? (
        <BuscoForm />
      ) : (
        <EncontreForm />
      )}
      </div>
    </section>
  );
}

export default ZonaApp;