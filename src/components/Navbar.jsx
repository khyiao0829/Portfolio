import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("dark"); // 기본은 Hero 기준

  
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const themeAttr = entry.target.getAttribute("data-theme");
            if (themeAttr) setTheme(themeAttr);
          }
        });
      },
      { threshold: 0.6 } // 화면의 60% 이상 보이면 해당 섹션 활성화
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-transparent text-white"
          : "bg-white shadow text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <span className="font-bold text-xl cursor-pointer">Portfolio</span>
        <div className="flex gap-6 font-semibold">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
