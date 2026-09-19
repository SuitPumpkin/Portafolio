import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Declaration from "./pages/Declaration";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg text-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/declaracion" element={<Declaration />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
