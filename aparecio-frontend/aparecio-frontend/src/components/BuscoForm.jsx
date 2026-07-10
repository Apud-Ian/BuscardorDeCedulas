import { useState } from 'react';
import useBusco from '../scripts/hooks/useBusco.js';

const BuscoForm = () => {
  const [formData, setFormData] = useState({
    cedula: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const { enviarBusqueda, isSubmitting } = useBusco();

  // Auto-formato: 1.234.567-8
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

    setFormData((prev) => ({
      ...prev,
      cedula: formatted
    }));

    if (errors.cedula) {
      setErrors((prev) => ({
        ...prev,
        cedula: ''
      }));
    }
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      email: e.target.value
    }));

    if (errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cedula || formData.cedula.length !== 11) {
      newErrors.cedula =
        'Ingresa una cédula válida (ej: 1.234.567-8)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email =
        'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        'Ingresa un correo electrónico válido';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const resultado = await enviarBusqueda(formData);

    if (!resultado.ok) {
      alert(resultado.error);
      return;
    }

    alert(resultado.data.mensaje);

    setFormData({
      cedula: '',
      email: ''
    });

    setErrors({});
  };

  return (
    <div className="bg-white rounded-b-2xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Buscar documento
      </h2>

      <p className="text-gray-600 mb-8">
        Completa los datos para buscar tu documento
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Cédula */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tu Número de Cédula{' '}
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={formData.cedula}
            onChange={handleCedulaChange}
            placeholder="Ej: 1.234.567-8"
            maxLength={11}
            className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:ring-2 focus:border-transparent ${
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
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tu correo electrónico (para conectarte){' '}
            <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="ejemplo@correo.com"
            className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:ring-2 focus:border-transparent ${
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold py-4 rounded-xl transition-all duration-200 text-lg shadow-md hover:shadow-lg"
        >
          {isSubmitting
            ? 'Buscando...'
            : 'Buscar Documento'}
        </button>
      </form>
    </div>
  );
};

export default BuscoForm;