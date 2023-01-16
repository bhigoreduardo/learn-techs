import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./views/Home";
import NewProject from "./views/NewProject";
import Projetcs from "./views/Projects";
import Project from "./views/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-projeto" element={<NewProject />} />
        <Route path="/projetos" element={<Projetcs />} />
        <Route path="/projetos/:id" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
