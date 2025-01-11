import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importação das páginas
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portifolio.jsx"; 
import Pricing from "./pages/Pricing.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

// Importação do CSS global
import "./styles/Index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/curriculo" element={<Resume />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
