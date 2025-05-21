export default function Provider() {
  return (
    <div className="min-h-screen bg-gray-100 pl-[80px] pr-6 py-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-10 items-center w-full max-w-5xl border border-gray-200">
        {/* Imagen del proveedor */}
        <img
          src="https://www.mechtech.edu/wp-content/uploads/2023/12/cheerful-male-technician-in-garage-2023-11-27-05-31-07-utc-scaled.jpg"
          alt="Proveedor"
          className="w-60 h-72 object-cover rounded-2xl shadow-md"
        />

        {/* Detalles del proveedor */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-purple-800 italic mb-6 text-center md:text-left">
            Proveedores
          </h2>

          <div className="space-y-5">
            <div>
              <label className="text-gray-400 block mb-1">Nombre</label>
              <input
                type="text"
                value="Jose Antonio López Bustos"
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Correo</label>
              <input
                type="email"
                value="joseantonio44@gmail.com"
                disabled
                className="w-full p-3 border border-purple-700 rounded-lg shadow-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Teléfono</label>
              <input
                type="text"
                value="777 2233653"
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
