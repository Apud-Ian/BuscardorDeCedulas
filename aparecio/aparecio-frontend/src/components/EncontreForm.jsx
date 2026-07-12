import { useState } from 'react';
import useEncontre from '../scripts/hooks/useEncontre.js';

const EncontreForm = () => {
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    email: '',
    lugar: ''
  });

  const [errors, setErrors] = useState({});

  const [mensaje, setMensaje] = useState({
    texto: '',
    tipo: ''
  });

  const { enviarHallazgo, isSubmitting } = useEncontre();

  // Auto-formato de Cédula: 5.426.847-8
  const handleCedulaChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 8) value = value.slice(0, 8);

    let formatted = '';

    if (value.length > 0) {
      formatted =
        value.slice(0, 1) +
        (value.length > 1 ? '.' + value.slice(1, 4) : '') +
        (value.length > 4 ? '.' + value.slice(4, 7) : '') +
        (value.length > 7 ? '-' + value.slice(7, 8) : '');
    }

    setFormData({ ...formData, cedula: formatted });

    if (errors.cedula) {
      setErrors({ ...errors, cedula: '' });
    }
  };

  const handleNombreChange = (e) => {
    setFormData({ ...formData, nombre: e.target.value });

    if (errors.nombre) {
      setErrors({ ...errors, nombre: '' });
    }
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });

    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  const handleLugarChange = (e) => {
    setFormData({ ...formData, lugar: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cedula || formData.cedula.length !== 11) {
      newErrors.cedula =
        'Ingresa una cédula válida (ej: 5.426.847-8)';
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        'Ingresa un correo electrónico válido';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMensaje({
      texto: '',
      tipo: ''
    });

    if (!validateForm()) return;

    const resultado = await enviarHallazgo(formData);

    if (!resultado.ok) {
      setMensaje({
        texto: resultado.error,
        tipo: 'error'
      });
      return;
    }

    setMensaje({
      texto: resultado.data.mensaje,
      tipo: 'success'
    });

    setFormData({
      cedula: '',
      nombre: '',
      email: '',
      lugar: ''
    });

    setErrors({});
  };

  return (
    <div className="bg-white rounded-b-2xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Reportar cédula
      </h2>

      <p className="text-gray-600 mb-8">
        Completa los datos de la cédula encontrada
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Número de Cédula */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Número de Cédula
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={formData.cedula}
            onChange={handleCedulaChange}
            placeholder="Ej: 5.426.847-8"
            maxLength="11"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all ${
              errors.cedula
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-teal-500'
            }`}
          />

          {errors.cedula && (
            <p className="text-red-500 text-sm mt-1">
              {errors.cedula}
            </p>
          )}

          <p className="text-xs text-gray-500 mt-1">
            Solo números • Formato: 5.426.847-8
          </p>
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre visible en el plástico
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={formData.nombre}
            onChange={handleNombreChange}
            placeholder="Ej: María G."
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all ${
              errors.nombre
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-teal-500'
            }`}
          />

          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">
              {errors.nombre}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tu correo electrónico
            <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="ejemplo@correo.com"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-teal-500'
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Lugar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lugar del hallazgo
            <span className="text-gray-400">
              (opcional)
            </span>
          </label>

          <textarea
            value={formData.lugar}
            onChange={handleLugarChange}
            rows="3"
            placeholder="Ej: Avenida Principal, frente al supermercado"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold py-4 rounded-xl transition-all duration-200 text-lg shadow-md hover:shadow-lg mt-4"
        >
          {isSubmitting
            ? 'Registrando...'
            : 'Registrar cédula encontrada'}
        </button>

        {mensaje.texto && (
          <div
            className={`rounded-xl border p-4 text-center font-medium ${
              mensaje.tipo === 'success'
                ? 'border-green-500 bg-green-100 text-green-800'
                : 'border-red-500 bg-red-100 text-red-800'
            }`}
          >
            {mensaje.texto}
          </div>
        )}

      </form>
    </div>
  );
};

export default EncontreForm;