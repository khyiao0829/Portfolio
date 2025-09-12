function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
      <div className="text-center mb-12">
      <p className="text-sm font-bold font-medium text-blue-500 mt-12">履歴</p>
      <h2 className="text-4xl font-bold">Experience</h2>
    </div>
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 학력/자격증 2컬럼 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 학력 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b-2 border-black w-full md:w-1/8">
              学歴
            </h3>
            <ul className="space-y-6">
              <li>
                <span className="block text-sm text-gray-600 font-medium">
                  2017年2月
                </span>
                <p className="text-md font-semibold">🇰🇷大谷高等学校卒業 </p>
              </li>
              <li>
                <span className="block text-sm text-gray-600 font-medium">
                  2019年3月 - 2024年2月
                </span>
                <p className="text-md font-semibold">🇰🇷Sangmyung University ソフトウェア工学専攻</p>
              </li>
            </ul>
          </div>

          {/* 자격증 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b-2 border-black w-full md:w-1/8">
              資格
            </h3>
            <ul className="space-y-6">
              <li>
                <span className="block text-sm text-gray-600 font-medium">2016年</span>
                <p className="text-lg font-semibold">2種普通自動車運転免許</p>
              </li>
              <li>
                <span className="block text-sm text-gray-600 font-medium">2025年</span>
                <p className="text-gray-700">
                  日本語能力試験 JLPT N2 (2025年12月 受験予定)
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* 경력 1컬럼*/}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-black w-full md:w-1/8">
            職歴
          </h3>
          <ul className="space-y-6">
            <li>
              <span className="block text-sm text-gray-600 font-medium">
                2025年4月 – 現在
              </span>
              <p className="text-lg font-semibold">🇯🇵アルバイト - 🌮ポカタコス中野店</p>
              <p className="text-gray-700">
                接客を通じて日本語コミュニケーション力を強化
              </p>
            </li>
            <li>
              <span className="block text-sm text-gray-600 font-medium">
                2025年8月 – 現在
              </span>
              <p className="text-lg font-semibold">🇯🇵アルバイト - ☕️ドトールコーヒ東中野店</p>
              <p className="text-gray-700 mb-12">
                接客を通じて日本語コミュニケーション力を強化し、チームワークを実践的に習得。
              </p>
            </li>
            <li>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
      <p className="text-gray-800">
        まだ直接的な実務経験はありませんが、アルバイトで培った
        <span className="font-semibold"> コミュニケーション力 </span>や
        <span className="font-semibold"> チームワーク </span>を活かしつつ、
        個人の<span className="font-semibold"> サイドプロジェクト </span>で
        実践的にスキルを磨いています。<br />
        今後はエンジニアとして、これらの経験を仕事に結びつけていきたいと考えています。
      </p>
    </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
