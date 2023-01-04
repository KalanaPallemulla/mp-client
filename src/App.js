import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/NavbarOld";
import Home from "./pages/Home";
import CreateAccount from "./pages/Join";
import Login from "./pages/Login";
import Proposals from "./pages/Proposals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Proposals />} />
        <Route path="/join" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
