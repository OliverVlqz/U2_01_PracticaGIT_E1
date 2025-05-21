import "./App.css";
import Sidebar from "./components/Sidebar";
import AutoModal from "./components/AutoModal";
import Car from "./pages/Cars";
function App() {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <AutoModal/>
        <Car />
      </div>
    </>
  );
}

export default App;
