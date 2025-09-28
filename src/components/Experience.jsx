import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ExperienceSection() {
  const [fromNav, setFromNav] = useState(false);

  useEffect(() => {
    if (window.location.hash === "/#experience") {
      setFromNav(true);
    }
  }, []);

  return (
    <motion.section
      id="experience"
      className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-20"
      initial={fromNav ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}  
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}         
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 섹션 타이틀 */}
      <h2 className="text-5xl font-extrabold mb-12">
        Experience<span className="text-blue-500">.</span>
      </h2>

      <div className="space-y-8">
        {/* 학력 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-8">
          <div>
            <h3 className="text-xl font-bold">EDUCATION</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-semibold">🇰🇷大谷高等学校卒業</p>
              <p className="text-gray-600">2017年2月</p>
            </div>
            <div>
              <p className="font-semibold">🇰🇷Sangmyung University</p>
              <p className="text-gray-600">2019年3月 - 2024年2月</p>
              <p className="text-gray-700">
                ソフトウェア学科専攻、卒業研究では日本語学習アプリを開発
              </p>
            </div>
          </div>
        </div>

        {/* 경력 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-8">
          <div>
            <h3 className="text-xl font-bold">WORK EXPERIENCE</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-600 mb-2">韓国では何をやりましたか？</p>
              <p className="font-semibold">🇯🇵アルバイト — 🌮ポカタコス中野店</p>
              <p className="text-gray-600">2025年4月 – 現在</p>
              <p className="text-gray-700">
                接客を通じて日本語コミュニケーション力を強化、チームワークを実践的に習得
              </p>
            </div>
            <div>
              <p className="font-semibold">🇯🇵アルバイト - ☕️ドトールコーヒ東中野店</p>
              <p className="text-gray-600">2025年8月 – 現在</p>
              <p className="text-gray-700">
                接客を通じて日本語コミュニケーション力を強化
              </p>
            </div>
          </div>
        </div>

        {/* 자격증 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold">CERTIFICATIONS</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-400">日本語能力試験 JLPT N2</p>
              <p className="text-gray-600">2025年12月 受験予定</p>
            </div>
            <div>
              <p className="font-semibold">2種普通自動車運転免許</p>
              <p className="text-gray-600">2016年</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
