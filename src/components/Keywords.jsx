import { motion } from "framer-motion";

const keywords = ["努力家", "チャレンジ精神", "協調性", "探究心"];

export default function KeywordsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="grid grid-cols-4 gap-4 w-full max-w-5xl">
        {/* 왼쪽 컨텐츠 */}
        <div className="col-span-3">
          <p className="text-sm text-gray-400 mb-4">/keywords</p>
          <ul className="space-y-6">
            {keywords.map((word, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-3xl md:text-5xl font-bold"
              >
                {word}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* 오른쪽 번호 */}
        <div className="flex flex-col items-end font-extrabold justify-center space-y-6 text-gray-600 text-2xl md:text-4xl">
          {keywords.map((_, index) => (
            <span key={index}>{index + 1}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
