import { motion } from "framer-motion";
import ScrollDownArrow from "./ScrollDownArrow";

function Hero() {
  const hour = new Date().getHours();
  const isDay = hour > 5 && hour < 17;

  const greeting = isDay ? "こんにちは," : "こんばんは,";

  return (
    <section
      id="hero"
      data-theme="dark"
      className={`relative h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center text-center px-4 transition-colors duration-500`}
    >
      <div className="relative z-10">
        <motion.div
          className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold px-4 py-2 rounded"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {greeting}
        </motion.div>

        <motion.p
          className="font-sans text-xl sm:text-2xl md:text-4xl font-extrabold mt-8 md:mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          ITエンジニア KIM HA-YEONGです。
        </motion.p>

        <motion.button
          className={`mt-6 md:mt-8 cursor-pointer px-6 py-2 rounded font-bold transition-colors duration-300 text-black`}
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
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
