import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  FiMenu,
  FiX,
  FiHome,
  FiTruck,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

const Sidebar = ({ onWidthChange }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (onWidthChange) {
      if (isMobile) {
        onWidthChange("w-0");
      } else {
        onWidthChange(isOpen ? "w-64" : "w-20");
      }
    }
  }, [isOpen, isMobile, onWidthChange]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

   const handleNavigation = (path) => {
    navigate(path);
    setActiveRoute(path);
    if (isMobile) setIsOpen(false); // Cierra sidebar en móvil al navegar
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-2 left-7 z-80 p-2 rounded-md bg-blue-600 text-white shadow-lg 
          ${isOpen && !isMobile ? "md:left-48 ml-3" : "md:left-4"} 
          transition-all duration-300`}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-70"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white ${
          isOpen ? "w-64" : "w-0 md:w-20"
        } fixed h-screen z-70 transition-all duration-300 overflow-hidden 
          ${isOpen ? "border-r border-gray-700" : ""}`}
      >
        <div
          className={`p-4 flex items-center ${
            isOpen ? "justify-between" : "justify-center"
          } border-b border-gray-700`}
        >
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
            active={activeRoute === "/"}
            isOpen={isOpen}
            onClick={() => handleNavigation("/")}
          />

          <NavItem
            icon={<FiTruck size={20} />}
            text="Automóviles"
            active={activeRoute === "/cars" || activeRoute.startsWith("/cars")}
            isOpen={isOpen}
            onClick={() => handleNavigation("/cars")}
          />

          <NavItem
            icon={<FiUsers size={20} />}
            text="Proveedores"
            active={activeRoute === "/providers" || activeRoute.startsWith("/providers")}
            isOpen={isOpen}
            onClick={() => handleNavigation("/providers")}
          />

          <div className="absolute bottom-0 w-full p-4 border-t border-gray-700"></div>
        </nav>
      </aside>
    </>
  );
};

const NavItem = ({ icon, text, active = false, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full ${
        isOpen ? "px-4" : "px-2 justify-center"
      } py-3 mb-1 transition-colors duration-200 ${
        active ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-300"
      }`}
      title={!isOpen ? text : ""}
    >
      {icon}
      {isOpen && <span className="ml-3">{text}</span>}
    </button>
  );
};

export default Sidebar;
