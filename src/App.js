import "./styles.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import { AllRoutes } from "./Components/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          overflow: "auto",
          height: "500px",
          marginTop: "120px"
        }}
      >
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
