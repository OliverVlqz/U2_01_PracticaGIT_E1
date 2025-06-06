// ✅ Cars.jsx
import React, { useEffect, useState } from 'react'
import AutoModal from '../components/AutoModal'
import CarInformation from './CarInformation'

const carImage =
  'https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_1280.jpg'

export default function Cars() {
  const [autos, setAutos] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedAuto, setSelectedAuto] = useState(null)
  const [showDetails, setShowDetails] = useState(null)

  const fetchAutos = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/autos/')
      const data = await res.json()
      setAutos(data)
      console.log('Autos obtenidos:', data)
    } catch (error) {
      console.error('Error al obtener autos:', error)
    }
  }

  useEffect(() => {
    fetchAutos()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('¿Deseas eliminar este auto?')) {
      await fetch(`http://localhost:8080/api/autos/${id}`, { method: 'DELETE' })
      fetchAutos()
    }
  }

  return (
    <div className="min-h-screen bg-white py-6">
      <div className="flex justify-between items-center px-6 mb-4">
        <h1 className="text-4xl font-bold flex-1/2 text-purple-800 italic">
          Automóviles
        </h1>
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedAuto(null)
            setShowModal(true)
          }}
        >
          + Agregar Auto
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {autos.map((auto) => (
          <div
            key={auto.id}
            className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col items-center w-72"
          >
            <img
              src={carImage}
              alt="Automóvil"
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <div className="text-left space-y-1">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => {
                  setSelectedAuto(auto)
                  setShowModal(true)
                }}
              >
                Editar
              </button>
              <br />
              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDelete(auto.id)}
              >
                Eliminar
              </button>
              <br />
              <button
                className="text-gray-700 hover:underline"
                onClick={() => setShowDetails(auto)}
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <AutoModal
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false)
            fetchAutos()
          }}
          initialData={selectedAuto}
        />
      )}
      {showDetails && (
        <CarInformation
          auto={showDetails}
          onClose={() => setShowDetails(null)}
        />
      )}
    </div>
  )
}
