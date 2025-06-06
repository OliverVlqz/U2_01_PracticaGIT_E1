// ✅ CarInformation.jsx
import React from 'react'

export default function CarInformation({ auto, onClose }) {
  if (!auto) return null
  console.log('Auto details:', auto)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-10 items-center w-full max-w-5xl border border-gray-200 relative mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        {/* Imagen del automóvil */}
        <img
          src="https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_1280.jpg"
          alt="Automóvil"
          className="w-60 h-72 object-cover rounded-2xl shadow-md"
        />

        {/* Detalles del automóvil */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-purple-800 italic mb-6 text-center md:text-left">
            Información del Automóvil
          </h2>

          <div className="space-y-5">
            <div>
              <label className="text-gray-400 block mb-1">Modelo</label>
              <input
                type="text"
                value={auto.modelo || ''}
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Marca</label>
              <input
                type="text"
                value={auto.marca || ''}
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Color</label>
              <input
                type="text"
                value={auto.color || ''}
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Placa</label>
              <input
                type="text"
                value={auto.placa || ''}
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Proveedor</label>
              <input
                type="text"
                value={auto.proveedor?.nombre || ''}
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
