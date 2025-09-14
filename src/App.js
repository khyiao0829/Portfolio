import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import Experience from "./components/Experience";
import Keywords from "./components/Keywords";

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
              <Keywords />
              <Experience />
              <Projects />
              <Contact />
            </div>
          }
        />
        {/* 상세 페이지는 별도 유지 */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
