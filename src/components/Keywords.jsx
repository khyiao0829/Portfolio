import { motion } from "framer-motion";
import { useState } from "react";

const keywords = [
  { jp: "指導力", en: "Leadership", desc: ">私は小学校の時に副班長を務め、中学校では全校副会長を経験しました。さらに、ドッジボール部ではキャプテンとしてチームをまとめ、地区大会で準優勝に導いたことがあります。これらの経験を通じて、仲間を引っ張りながら目標に向かって努力する力を培いました。" },
  { jp: "創造力", en: "Creativity", desc: ">子どもの頃から物を作ることが好きで、現在もトイプロジェクトとして様々なものを開発しています。完成度の面ではまだ改善の余地がありますが、試行錯誤を重ねることでより質の高い成果物を生み出せるよう努力しています。" },
  { jp: "挑戦心", en: "Challenge", desc: ">私は挑戦することが好きです。現在も日本に滞在し、言語や文化、そして新しい環境の中で様々なことに挑戦しています。趣味の面ではハーフマラソン完走を目指して週2回トレーニングを行っており、学習や開発の面では個人プロジェクトや新しい技術の習得を通じて常に自分の限界を広げています。これらの経験を通じて、挑戦から得られる達成感だけでなく、失敗から学ぶことの大切さも実感しています。" },
  { jp: "継続力", en: "Persistence", desc: "最後までやり抜く力。" },
];

export default function KeywordsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openedIndex, setOpenedIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-5xl">
        {/* 헤더 */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <h2 className="col-span-3 text-5xl font-extrabold">
            Keywords<span className="text-blue-500">.</span>
          </h2>
        </div>

        {/* 키워드 목록 */}
        <div className="space-y-6">
          {keywords.map((word, index) => (
            <div key={index}>
              {/* 행 */}
              <div
                className="grid grid-cols-4 gap-4 items-center cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => toggleOpen(index)}
              >
                {/* 앞/뒤 카드 컨테이너 */}
                <div className="relative col-span-3 h-12 md:h-16 overflow-hidden">
                  {/* 일본어 */}
                  <motion.span
                    animate={{ x: hoveredIndex === index ? "30%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full text-3xl md:text-4xl font-bold"
                  >
                    {word.jp}
                  </motion.span>

                  {/* 영어 */}
                  <motion.span
                    animate={{ x: hoveredIndex === index ? "0%" : "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full text-3xl md:text-4xl font-bold text-blue-400"
                  >
                    {word.en}
                  </motion.span>
                </div>

                {/* 번호 or + 버튼 */}
                <span className="justify-self-end font-extrabold text-gray-600 text-2xl md:text-4xl tabular-nums">
                  {hoveredIndex === index ? "+" : index + 1}
                </span>
              </div>

              {/* 클릭 시 내용 표시 */}
              {openedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-2 ml-2 text-gray-300 text-justify"
                >
                  {word.desc}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
