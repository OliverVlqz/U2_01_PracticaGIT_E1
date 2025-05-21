import React from "react";

export default function CarInformation() {
  return (
    <div className="min-h-screen bg-gray-100 pl-[80px] pr-6 py-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-10 items-center w-full max-w-5xl border border-gray-200">
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
                value="GTX 2023"
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Marca</label>
              <input
                type="text"
                value="Zenvo"
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Color</label>
              <input
                type="text"
                value="Plata"
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Placa</label>
              <input
                type="text"
                value="ABC-1234"
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Proveedor</label>
              <input
                type="text"
                value="Jose Antonio López Bustos"
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
