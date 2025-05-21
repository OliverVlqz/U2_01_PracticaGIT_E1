// src/components/AppLayout.jsx
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-900 text-white ml-20 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
