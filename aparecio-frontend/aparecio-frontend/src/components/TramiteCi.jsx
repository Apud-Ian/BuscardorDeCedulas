const TramiteCi = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          ¿No encontraste tu cédula?
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
          Si luego de realizar la búsqueda aún no recuperaste tu documento,
          estos son los pasos recomendados para obtener una nueva cédula de
          identidad.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
            1
          </div>

          <h3 className="text-xl font-semibold mb-3 text-slate-800">
            Denunciá el extravío o hurto
          </h3>

          <p className="text-slate-600 leading-7">
            Si sospechás que tu cédula fue robada o puede ser utilizada por otra
            persona, realizá la denuncia en la seccional policial más cercana y
            conservá la constancia.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
            2
          </div>

          <h3 className="text-xl font-semibold mb-3 text-slate-800">
            Solicitá una nueva cédula
          </h3>

          <p className="text-slate-600 leading-7 mb-5">
            Ingresá al portal oficial de la Dirección Nacional de Identificación
            Civil para conocer los requisitos y agendar tu renovación.
          </p>

          <a
            href="https://www.gub.uy/tramites/cedula-identidad-renovacion-personas-ciudadanas-naturales-uruguayas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-xl font-medium"
          >
            Iniciar trámite
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
            3
          </div>

          <h3 className="text-xl font-semibold mb-3 text-slate-800">
            Presentá la documentación
          </h3>

          <p className="text-slate-600 leading-7">
            El día de la cita llevá la documentación solicitada por la DNIC,
            incluyendo la constancia de denuncia en caso de extravío o hurto,
            cuando corresponda.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
            4
          </div>

          <h3 className="text-xl font-semibold mb-3 text-slate-800">
            Retirá tu nueva cédula
          </h3>

          <p className="text-slate-600 leading-7">
            Una vez finalizado el trámite, seguí las indicaciones de la DNIC
            para retirar tu nueva cédula de identidad.
          </p>
        </div>

      </div>

      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h3 className="font-semibold text-amber-900 mb-2">
          Importante
        </h3>

        <p className="text-amber-800 leading-7">
          Si encontrás tu cédula después de iniciar el trámite de renovación,
          seguí las indicaciones de la Dirección Nacional de Identificación
          Civil antes de volver a utilizarla.
        </p>
      </div>
    </section>
  );
};

export default TramiteCi;