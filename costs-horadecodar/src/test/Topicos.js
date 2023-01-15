import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./views/Home";
import Contact from "./views/Contact";

function Topicos() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/test" element={<Home />} />
        <Route path="/test/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Topicos;
