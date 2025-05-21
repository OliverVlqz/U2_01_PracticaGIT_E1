import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiTruck, FiUsers, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Efecto para detectar el tamaño de pantalla y establecer estado inicial
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
       
      // En desktop (>=768px), sidebar visible por defecto
      // En móvil (<768px), sidebar oculto por defecto
      setIsOpen(!mobile);
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Botón Hamburguesa - Siempre visible para alternar */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-2 left-7  z-50 p-2 rounded-md bg-blue-600 text-white shadow-lg
          ${isOpen && !isMobile ? 'md:left-48 ml-3' : 'md:left-4'} transition-all duration-300`}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay (solo móvil cuando sidebar está abierto) */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white ${isOpen ? "w-64" : "w-0 md:w-20"} 
          fixed md:relative h-screen z-40 transition-all duration-300 overflow-hidden
          ${isOpen ? "border-r border-gray-700" : ""}`}
      >
        <div className={`p-4 flex items-center ${isOpen ? 'justify-between' : 'justify-center'} border-b border-gray-700`}>
          {isOpen ? (
            <h1 className="text-xxl font-bold">SISTEMA AUTOMOTRIZ</h1>
          ) : (
            <span className="text-xl font-bold">SA</span>
          )}
        </div>

        <nav className="mt-6">
          {isOpen && (
            <div className="px-4 py-2 text-gray-400 uppercase text-xs font-semibold">
              Módulos Principales
            </div>
          )}
          
          <NavItem 
            icon={<FiHome size={20} />} 
            text="Inicio" 
            active={true} 
            isOpen={isOpen}
            onClick={() => {}} 
          />
          
          <NavItem 
            icon={<FiTruck size={20} />} 
            text="Automóviles" 
            isOpen={isOpen}
            onClick={() => {}} 
          />
          
          <NavItem 
            icon={<FiUsers size={20} />} 
            text="Proveedores" 
            isOpen={isOpen}
            onClick={() => {}} 
          />
          
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
            <NavItem 
              icon={<FiSettings size={20} />} 
              text="Configuración" 
              isOpen={isOpen}
              onClick={() => {}} 
            />
          </div>
        </nav>
      </aside>
    </div>
  );
};

// Componente auxiliar para items de navegación
const NavItem = ({ icon, text, active = false, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full ${isOpen ? 'px-4' : 'px-2 justify-center'} py-3 mb-1 transition-colors duration-200 
        ${active ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-300"}`}
      title={!isOpen ? text : ''} // Tooltip cuando está colapsado
    >
      {icon}
      {isOpen && <span className="ml-3">{text}</span>}
    </button>
  );
};

export default Sidebar;