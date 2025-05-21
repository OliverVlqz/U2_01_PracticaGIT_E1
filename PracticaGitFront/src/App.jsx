import "./App.css";
import Sidebar from "./components/Sidebar";
import Car from "./pages/Cars";
function App() {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        <Sidebar />

        <Car />
      </div>
    </>
  );
}

export default App;
