// src/components/AppLayout.jsx
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const AppLayout = () => {
  return (
   <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto transition-all duration-300">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
