import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Declaration from "./pages/Declaration";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import CreatividadNarrativa from "./pages/CreatividadNarrativa";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-white">
        <Navbar />
        <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/declaracion" element={<Declaration />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/creatividad-narrativa" element={<CreatividadNarrativa />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
