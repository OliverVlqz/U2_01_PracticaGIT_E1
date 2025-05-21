const carImage =
  "https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_1280.jpg"; // Usa una imagen online o cámbiala por una local

export default function Cars() {
  return (
    <div className="min-h-screen bg-white pl-[300px] pr-6 py-6">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-10 italic">
        Automoviles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {Array.from({ length: 18 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col items-center w-72"
          >
            <img
              src={carImage}
              alt="Automóvil"
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <div className="text-left space-y-1">
              <button className="text-blue-600 hover:underline">Editar</button>
              <br />
              <button className="text-red-600 hover:underline">Eliminar</button>
              <br />
              <button className="text-gray-700 hover:underline">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
