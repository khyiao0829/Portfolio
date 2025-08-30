import { useInView } from 'react-intersection-observer';
import profileImg from './assets/profile_image.jpg';
import TechSkills from './TechSkills';
import Framework from './Framework';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
        <section
      ref={ref}
      id="about"
      className={`max-w-5xl mx-auto p-8 transition-opacity duration-700 rounded-xl border border-gray-200 shadow-lg ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-12 max-w-xl mx-auto">
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">KIM HA-YEONG</h1>
            <p className="text-blue-600 font-semibold mb-4">Web/App Engineer</p>
            <p className="text-gray-700 leading-relaxed mb-2 text-center">
              挑戦を通じて学び、成長を楽しむ開発者です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-2 text-center">
              新しい技術を探求し、ユーザーに価値あるサービスを届けます。
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-12" />

        <div className="max-w-3xl mx-auto mb-16 px-4 text-left">
          <h2 className="text-2xl font-semibold text-center mb-6">学歴</h2>
          <ul className="space-y-6 border-l-2 border-blue-500 pl-6">
            <li>
              <span className="font-semibold">2017年 2月</span> - 大谷高等学校卒業
            </li>
            <li>
              <span className="font-semibold">2019年 3月</span> - Sangmyung University ソフトウェア学科入学
            </li>
            <li>
              <span className="font-semibold">2024年 2月</span> - 卒業
            </li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto mb-16 px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-center mb-4">プログラミング言語</h2>
            <TechSkills />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-center mb-4">フレームワーク・データベース</h2>
            <Framework />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16 px-4 text-left">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-center mb-4">プロジェクト</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>LSTMを活用した株式価格予測 (딥러닝 + Python)</li>
              <li>生成型人工知能を活用したNHKニュースベースの学習アプリ(OpenAI API + React + Firebase)</li>
              <li>バイトシフト調整Web/アプリサイト(React + Firebase)</li>
              <li>繊維会社のサイト制作中</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
