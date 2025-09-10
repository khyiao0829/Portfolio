import { motion } from "framer-motion";
import ScrollDownArrow from "./ScrollDownArrow";

function Hero() {
  return (
    <section
    id="hero"
    data-theme="dark"
      className="relative h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4"
      style={{ backgroundImage: "url('/background.png')" }} 
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <motion.div
          className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          こんにちは,
        </motion.div>

        <motion.p
          className="font-sans text-xl sm:text-2xl md:text-4xl font-bold mt-8 md:mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          ITエンジニア KIM HA-YEONGです。
        </motion.p>

        <motion.div
          className="mt-6 md:mt-8 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          onClick={() => {
            const section = document.getElementById("about");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ScrollDownArrow />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
