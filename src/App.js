import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/NavbarOld";
import Home from "./pages/Home";
import Proposals from "./pages/Proposals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Proposals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
