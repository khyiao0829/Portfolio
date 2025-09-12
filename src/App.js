import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="font-sans text-gray-900 scroll-smooth">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          }
        />
        {/* 상세 페이지는 별도 유지 */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
