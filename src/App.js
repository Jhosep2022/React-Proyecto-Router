import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layaut from "./pages/Layaut";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Contactos from "./pages/Contactos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layaut />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="contactos" element={<Contactos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
