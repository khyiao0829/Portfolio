import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/hero';
import About from "./components/About";
import Project from "./components/Project";
import ProjectDetail from "./components/ProjectDetail";
import Contact from  "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col justify-center items-center bg-grey text-black text-center px-4">
            <Hero />
            <About />
            <Project />
            <Contact/>
          </div>
        } />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
