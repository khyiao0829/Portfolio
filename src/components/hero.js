import { motion } from "framer-motion";
import ScrollDownArrow from "./ScrollDownArrow";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black text-center px-4 py-12">
      <motion.div
        className="font-sans text-6xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        こんにちは,
      </motion.div>
      <motion.p
        className="font-sans text-4xl font-bold mt-7 "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        ITエンジニア  KIM HA-YEONGです。
      </motion.p>
      <motion.div
      className="font-sans text-lg font-semibold underline underline-offset-4 hover:text-gray-700 transition mt-8 cursor-pointer"
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

    </section>
  );
}

export default Hero;

