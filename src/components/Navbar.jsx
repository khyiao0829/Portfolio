import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* 로고 */}
        <span className="font-bold text-xl cursor-pointer">Portfolio</span>

        {/* 메뉴: 데스크톱/모바일 공통 */}
        <div className="flex md:gap-6 gap-4 overflow-x-auto no-scrollbar font-semibold">
          <a href="#hero" className="whitespace-nowrap hover:text-blue-500">Home</a>
          <a href="#about" className="whitespace-nowrap hover:text-blue-500">About</a>
          <a href="#projects" className="whitespace-nowrap hover:text-blue-500">Projects</a>
          <a href="#experience" className="whitespace-nowrap hover:text-blue-500">Experience</a>
          <a href="#contact" className="whitespace-nowrap hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
