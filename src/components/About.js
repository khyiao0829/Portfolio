import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 py-20 bg-white relative"
    >
       {/*<div className="absolute top-12 left-8">
    <h2 className="text-5xl font-extrabold text-gray-800"> / ABOUT</h2>
  </div>*/}
      {/* 왼쪽 텍스트 */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-12">
        About<span className="text-gray-500">.</span>
      </h2>
        <h2 className="text-5xl font-extrabold text-gray-500">
          Ha-yeong Kim
        </h2>

        <p className="text-gray-700 leading-relaxed">
            韓国の4年制大学でソフトウェアを専攻し、
            Spring Boot、MySQL、ネットワーク、Computer Graphics、ウェブサーバープログラミングなど
            幅広く学びました。卒業研究ではChatGPT APIを活用した日本語学習アプリを約1年間かけて開発しました。
        </p>

        <p className="text-gray-700 leading-relaxed">
          現在はワーキングホリデーで日本に滞在中。接客アルバイトを通して日本語での会話力やチームワークを鍛え、日本の職場文化にも自然に馴染んできました。  
          勉強してきた技術と日本での経験を組み合わせ、これからはエンジニアとして新しい価値を生み出していきたいと考えています。
        </p>
 
      </motion.div>

      {/* 오른쪽 이미지 */}
      <motion.div
        className="md:w-1/4 mt-12 md:mt-0 md:pl-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="rounded-2xl shadow-lg object-cover w-full h-auto border-2 border-gray"
        />
      </motion.div>
    </section>
  );
}
