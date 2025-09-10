function Experience() {
  const education = [
    {
      year: "2017年2月",
      title: "🇰🇷大谷高等学校卒業",
    },
    {
      year: "2019年4月 – 2024年2月",
      title: "🇰🇷Sangmyung University - ソフトウェア専攻",
      description: "Spring Boot、MySQL、OpenGL、ネットワーク、ウェブサーバープログラミングなど幅広く学習。",
    },
    {
      year: "2023年３月 – 2024年12月",
      title: "卒業研究（チーム開発）",
      description: "ChatGPT APIを活用した日本語学習アプリを約1年間かけて開発。",
    },
  ];

  const work = [
    {
      year: "2024年4月 – 現在",
      title: "飲食店アルバイト - 東京都",
      description: "接客を通じて日本語コミュニケーション力を強化し、チームワークを実践的に習得。",
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-md font-bold font-medium text-blue-500 text-center mt-12">経歴</p>
      <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
    </div>
      {/* 학력 */}
      <div className="max-w-3xl mx-auto mb-2">
        <h3 className="text-2xl font-semibold mb-4">学歴</h3>
        <div className="relative border-l-4 border-green-500 pl-6">
          {education.map((item, idx) => (
            <div key={idx} className="mb-10">
              <span className="text-sm text-gray-500">{item.year}</span>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 경력 */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">経歴</h3>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {work.map((item, idx) => (
            <div key={idx} className="mb-10">
              <span className="text-sm text-gray-500">{item.year}</span>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
