// ProveedorModal.jsx
import React, { useState, useEffect } from 'react'

export default function ProveedorModal({ onClose, onAdd, initialData }) {
  const [proveedor, setProveedor] = useState({ nombre: '', correo: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData) {
      setProveedor({ nombre: initialData.nombre, correo: initialData.correo })
    }
  }, [initialData])

  const handleGuardar = async () => {
    const newErrors = {}
    if (!proveedor.nombre.trim()) newErrors.nombre = 'Nombre requerido'
    if (!proveedor.correo.trim()) newErrors.correo = 'Correo requerido'
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    try {
      const res = await fetch(
        initialData
          ? `http://localhost:8080/api/proveedores/${initialData.id}`
          : 'http://localhost:8080/api/proveedores/',
        {
          method: initialData ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(proveedor),
        }
      )

      if (res.ok) {
        onAdd()
        onClose()
        setProveedor({ nombre: '', correo: '' })
        setErrors({})
      } else {
        alert('Error al guardar proveedor')
      }
    } catch (err) {
      console.error('Error al guardar proveedor:', err)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
        <h3 className="text-xl font-bold text-center mb-4">
          {initialData ? 'Editar Proveedor' : 'Agregar Proveedor'}
        </h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1">Nombre</label>
          <input
            type="text"
            value={proveedor.nombre}
            onChange={(e) =>
              setProveedor({ ...proveedor, nombre: e.target.value })
            }
            className={`shadow border ${
              errors.nombre ? 'border-red-500' : ''
            } rounded w-full py-2 px-3 text-gray-700`}
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs italic">{errors.nombre}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1">Correo</label>
          <input
            type="email"
            value={proveedor.correo}
            onChange={(e) =>
              setProveedor({ ...proveedor, correo: e.target.value })
            }
            className={`shadow border ${
              errors.correo ? 'border-red-500' : ''
            } rounded w-full py-2 px-3 text-gray-700`}
          />
          {errors.correo && (
            <p className="text-red-500 text-xs italic">{errors.correo}</p>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleGuardar}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {initialData ? 'Guardar Cambios' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}
