function About() {
  return (
    <section id="about" data-theme="light" className="bg-blue-50 py-20 px-6"
    style={{ backgroundImage: "url('/about-bg.png')" }}
    >

      <div className="text-center mb-12">
      <p className="text-sm font-bold font-medium text-blue-500 mt-12">プロフィール</p>
      <h2 className="text-4xl font-bold">Profile</h2>
    </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-36">
        {/* 프로필 사진 */}
        <div className="md:w-1/3 flex justify-center p-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-64 object-cover rounded shadow-md"
          />
        </div>
        {/* 소개  */}
        <div className="md:w-2/3 p-8 space-y-3 text-black">
        <h2 className="text-4xl font-bold">KIM HA-YEONG</h2>
          <p>
            韓国の4年制大学でソフトウェアを専攻し、
            Spring Boot、MySQL、ネットワーク、Computer Graphics、ウェブサーバープログラミングなど
            幅広く学びました。卒業研究ではChatGPT APIを活用した日本語学習アプリを約1年間かけて開発しました。
          </p>
          <p>
            現在はワーキングホリデーで日本に滞在し、
            アルバイトを通じて
            日本語コミュニケーション力
            チームワークを実践的に身につけ、日本の職場文化にも適応しています。
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
