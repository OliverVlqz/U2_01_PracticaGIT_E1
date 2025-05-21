import "./App.css";
import Sidebar from "./components/Sidebar";
import Car from "./pages/Cars";

function App() {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        <Sidebar />

        {/* Aquí va tu contenido, por ejemplo: */}
        <Car />
      </div>
    </>
  );
}

export default App;
