function About() {
  return (
    <section id="about" data-theme="light" className="max-w-5xl mx-auto py-20 px-6">

      <div className="text-center mb-12">
      <p className="text-sm font-bold font-medium text-blue-500 mt-12">プロフィール</p>
      <h2 className="text-4xl font-bold">About Me</h2>
    </div>
      
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* 프로필 사진 */}
        <div className="md:w-1/3 flex justify-center p-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-64 object-cover rounded shadow-md"
          />
        </div>

        {/* 소개  */}
        <div className="md:w-2/3 p-8 space-y-4 text-gray-700 mb-12">
          <p>
            韓国の4年制大学で<strong className="font-semibold">ソフトウェア</strong>を専攻し、
            Spring Boot、MySQL、ネットワーク、OpenGL、ウェブサーバープログラミングなど
            幅広く学びました。卒業研究では<strong className="font-semibold">
            ChatGPT API</strong>を活用した日本語学習アプリを約1年間かけて開発しました。
          </p>
          <p>
            現在は<strong className="font-semibold">ワーキングホリデー</strong>で日本に滞在し、
            飲食店のアルバイトを通じて<strong className="font-semibold">
            日本語コミュニケーション力</strong>や<strong className="font-semibold">
            チームワーク</strong>を実践的に身につけ、日本の職場文化にも適応しています。
          </p>
          <p>
            学業や個人開発を通じて<strong className="font-semibold">
            1年以上ウェブ開発</strong>を継続的に学習・実践しており、
            将来的には<strong className="font-semibold">
            フルスタック開発者</strong>として成長するため、
            新しい技術の習得に熱心に取り組んでいます。
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
