// Provider.jsx
import React, { useEffect, useState } from 'react'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import ProveedorModal from '../components/ProvedorModal'

export default function Provider() {
  const [proveedores, setProveedores] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [proveedorEditando, setProveedorEditando] = useState(null)

  const fetchProveedores = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/proveedores/')
      const data = await res.json()
      setProveedores(data)
    } catch (error) {
      console.error('Error al obtener proveedores:', error)
    }
  }

  useEffect(() => {
    fetchProveedores()
  }, [])

  const handleEliminar = async (id) => {
    if (window.confirm('¿Deseas eliminar este proveedor?')) {
      await fetch(`http://localhost:8080/api/proveedores/${id}`, {
        method: 'DELETE',
      })
      fetchProveedores()
    }
  }

  const handleGuardarProveedor = () => {
    setShowModal(false)
    setProveedorEditando(null)
    fetchProveedores()
  }
  console.log(proveedores)

  return (
    <div className="min-h-screen bg-white py-6 px-28">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-800">Proveedores</h1>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => {
            setProveedorEditando(null)
            setShowModal(true)
          }}
        >
          <FaPlus className="inline mr-2" /> Agregar Proveedor
        </button>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border">Nombre</th>
            <th className="py-2 px-4 border">Correo</th>
            <th className="py-2 px-4 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((prov) => (
            <tr key={prov.id} className="text-center border-b">
              <td className="py-2 px-4  text-gray-700 border-none">
                {prov.nombre}
              </td>
              <td className="py-2 px-4  text-gray-700 border-none">
                {prov.correo}
              </td>
              <td className="py-2 px-4 border flex justify-center gap-4 ">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => {
                    setProveedorEditando(prov)
                    setShowModal(true)
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleEliminar(prov.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <ProveedorModal
          onClose={() => setShowModal(false)}
          onAdd={handleGuardarProveedor}
          initialData={proveedorEditando}
        />
      )}
    </div>
  )
}
