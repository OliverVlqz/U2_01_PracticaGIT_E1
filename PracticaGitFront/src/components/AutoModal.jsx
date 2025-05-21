import React, { useState } from 'react';
import { FaCar } from "react-icons/fa";

const AutoModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    color: '',
    placas: ''
  });
  const [errors, setErrors] = useState({});

  const validar = () => {
    const newErrors = {};
    if (!formData.marca.trim()) newErrors.marca = 'Marca requerida';
    if (!formData.modelo.trim()) newErrors.modelo = 'Modelo requerido';
    if (!formData.color.trim()) newErrors.color = 'Color requerido';
    if (!formData.placas.trim()) {
      newErrors.placas = 'Número de placas requerido';
    } else if (!/^[A-Z0-9\-]{5,10}$/i.test(formData.placas)) {
      newErrors.placas = 'Placas inválidas (5 a 10 caracteres que contenga letras y números)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      const autos = JSON.parse(localStorage.getItem('autos') || '[]');
      autos.push(formData);
      localStorage.setItem('autos', JSON.stringify(autos));

      alert('Auto registrado exitosamente');
      onClose(); 
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-100 bg-opacity-90 z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 relative">
        {/* Icono FaCar */}
        <FaCar className="absolute top-8 left-10 text-blue-500 w-10 h-10" />

        <button
          onClick={onClose}
          className="absolute top-8 right-10 text-gray-500 hover:text-red-500 text-xl font-bold "
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-black">Registro de carro</h2>
        <form onSubmit={handleSubmit}>
          {['marca', 'modelo', 'color', 'placas'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 font-bold mb-2 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors[field] ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
                placeholder={`Ingresa ${field}`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs italic mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AutoModal;
