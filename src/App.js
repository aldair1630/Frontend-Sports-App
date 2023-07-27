import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./views";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* {location.pathname !== "/" && <Footer />} */}
    </div>
  );
}
export default App;
