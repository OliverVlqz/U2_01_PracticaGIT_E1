import React, { useState, useEffect } from 'react'
import { FaCar, FaPlus } from 'react-icons/fa'
import ProveedorModal from './ProvedorModal'

const AutoModal = ({ onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    color: '',
    placas: '',
    proveedorId: '',
  })
  const [proveedores, setProveedores] = useState([])
  const [errors, setErrors] = useState({})
  const [visible, setVisible] = useState(false)
  const [showProveedorModal, setShowProveedorModal] = useState(false)

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/proveedores/')
        const data = await res.json()
        setProveedores(data)
        setVisible(true)
      } catch (error) {
        console.error('Error al obtener proveedores:', error)
      }
    }

    fetchProveedores()
  }, [])

  useEffect(() => {
    if (initialData) {
      setFormData({
        marca: initialData.marca,
        modelo: initialData.modelo,
        color: initialData.color,
        placas: initialData.placa,
        proveedorId: initialData.proveedor?.id || '',
      })
    }
  }, [initialData])

  const validar = () => {
    const newErrors = {}
    if (!formData.marca.trim()) newErrors.marca = 'Marca requerida'
    if (!formData.modelo.trim()) newErrors.modelo = 'Modelo requerido'
    if (!formData.color.trim()) newErrors.color = 'Color requerido'
    if (!formData.placas.trim()) {
      newErrors.placas = 'Número de placas requerido'
    } else if (!/^[A-Z0-9\-]{5,10}$/i.test(formData.placas)) {
      newErrors.placas = 'Placas inválidas'
    }
    if (!formData.proveedorId) newErrors.proveedorId = 'Proveedor requerido'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validar()) {
      try {
        const method = initialData ? 'PUT' : 'POST'
        const url = initialData
          ? `http://localhost:8080/api/autos/${initialData.id}`
          : 'http://localhost:8080/api/autos/'
        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: initialData?.id,
            ...formData,
            proveedorId: Number(formData.proveedorId),
          }),
        })

        if (response.ok) {
          alert(`Auto ${initialData ? 'editado' : 'registrado'} exitosamente`)
          onSave()
        } else {
          alert('Error al guardar el auto')
        }
      } catch (error) {
        console.error('Error de conexión:', error)
      }
    }
  }

  const handleNuevoProveedor = (proveedor) => {
    setProveedores((prev) => [...prev, proveedor])
    setFormData((prev) => ({ ...prev, proveedorId: proveedor.id }))
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-500/50 z-40">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 relative mx-4">
        <FaCar className="absolute top-8 left-10 text-blue-500 w-10 h-10" />
        <button
          onClick={onClose}
          className="absolute top-8 right-10 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          {initialData ? 'Editar carro' : 'Registro de carro'}
        </h2>

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
                } rounded w-full py-2 px-3 text-gray-700`}
                placeholder={`Ingresa ${field}`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs italic">{errors[field]}</p>
              )}
            </div>
          ))}

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-gray-700 font-bold mb-2">
                Proveedor
              </label>
              <button type="button" onClick={() => setShowProveedorModal(true)}>
                <FaPlus className="text-green-600 hover:text-green-800" />
              </button>
            </div>
            <select
              name="proveedorId"
              value={formData.proveedorId}
              onChange={handleChange}
              className={`shadow appearance-none border ${
                errors.proveedorId ? 'border-red-500' : ''
              } rounded w-full py-2 px-3 text-gray-700`}
            >
              <option value="">Selecciona un proveedor</option>
              {proveedores.map((prov) => (
                <option key={prov.id} value={prov.id}>
                  {prov.nombre}
                </option>
              ))}
            </select>
            {errors.proveedorId && (
              <p className="text-red-500 text-xs italic">
                {errors.proveedorId}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl"
            >
              {initialData ? 'Guardar cambios' : 'Registrar'}
            </button>
          </div>
        </form>
      </div>

      {showProveedorModal && (
        <ProveedorModal
          onClose={() => setShowProveedorModal(false)}
          onAdd={handleNuevoProveedor}
        />
      )}
    </div>
  )
}

export default AutoModal
