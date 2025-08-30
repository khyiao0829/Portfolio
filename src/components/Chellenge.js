import { useInView } from 'react-intersection-observer';
import profileImg from './assets/profile_image.jpg';
import paperTexture from './assets/beige-paper.png';
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
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundColor: '#f5f5f4',
        position: 'relative',
      }}
      className={`mt-64 max-w-5xl mx-auto px-8 py-16 rounded-md shadow-md transition-opacity duration-700 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-white opacity-60 rounded-md pointer-events-none"></div>

      {/* 콘텐츠 영역 */}
      <div className="relative z-10">
        {/* 프로필 */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-12 max-w-xl mx-auto">
        <img
            src={profileImg}
            alt="Profile"
            className="w-40 h-56 object-cover rounded-md shadow shrink-0"
        />
        <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">KIM HA-YEONG</h1>
            <p className="text-blue-700 font-semibold mb-4">Wep/App Engineer</p>
            <p className="font-sans text-gray-800 leading-relaxed text-left">
            挑戦することが好きなキム・ハヨンと申します。
            </p>
            <p className="font-sans text-gray-800 leading-relaxed text-left">
            変わらず、常に一生懸命に生きています。
            </p>
            <p className="font-sans text-gray-800 leading-relaxed text-left">
            今は東京に住みながら、様々な体験をしています。
            </p>
        </div>
        </div>


        {/* 구분선 */}
        <hr className="border-gray-300 mb-12" />

        {/* 학력 */}
        <div className="max-w-3xl mx-auto mb-16 px-4">
        <h2 className="font-sans text-2xl font-semibold text-center mb-2">学歴</h2>
        
        {/* 전체 너비 밑줄 */}
        <div className="w-full border-b-2 border-blue-700 mb-6"></div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
                <tr className="bg-blue-100">
                <th className="border border-gray-300 px-4 py-2 text-center">年月</th>
                <th className="border border-gray-300 px-4 py-2 text-center">内容</th>
                </tr>
            </thead>
            <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 ">2017年 2月</td>
                <td className="border border-gray-300 px-4 py-2 text-left">大谷高等学校卒業</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 ">2019年 3月</td>
                <td className="border border-gray-300 px-4 py-2 text-left">Sangmyung University 工科大学ソフトウェア学科入学</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 ">2024年 2月</td>
                <td className="border border-gray-300 px-4 py-2 text-left">Sangmyung University 工科大学ソフトウェア学科卒業</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>


        {/* 스킬과 프레임워크 */}
        <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="grid md:grid-cols-2 gap-14">
            <section>
            <h2 className="text-2xl font-semibold text-center mb-2">プログラミング言語</h2>
            <div className="w-full border-b-2 border-blue-700 mb-6"></div>
            <TechSkills />
            </section>

            <section>
            <h2 className="text-2xl font-semibold text-center mb-2">フレームワーク・データベース</h2>
            <div className="w-full border-b-2 border-blue-700 mb-6"></div>
            <Framework />
            </section>
        </div>
        </div>

        {/* 프로젝트 */}
        <div className="max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-semibold text-center mb-2">プロジェクト</h2>
        <div className="w-full border-b-2 border-blue-700 mb-6"></div>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-left">
            <li>LSTMを活用した株式価格予測 (딥러닝 + python)</li>
            <li>生成型人工知能を活用したNHKニュースベースの学習アプリ(OpenAI API + React + Firebase）</li>
            <li>バイトシフト調整Web/アプリサイト(React + Firebase）</li>
            <li>繊維会社のサイト制作中</li>
        </ul>
        </div>


      </div>
    </section>
  );
}

export default About;
