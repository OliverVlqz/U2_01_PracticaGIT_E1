import "./App.css";
import AutoModal from "./components/AutoModal";
import Car from "./pages/Cars";
function App() {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        <AutoModal/>
        <Car />

      </div>
    </>
  );
}

export default App
