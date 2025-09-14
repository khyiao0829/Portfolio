function About() {
  return (
    <section id="about" data-theme="light" className="bg-black-50 py-20 px-6">

      <div className="text-center mb-12">
      <p className="text-sm font-bold text-blue-500 mt-12">プロフィール</p>
      <h2 className="text-4xl font-bold">Profile</h2>
    </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-36">
        {/* 프로필 사진 */}
        <div className="md:w-1/4 flex justify-center p-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-64 object-cover rounded shadow-md"
          />
        </div>
        {/* 소개  */}
        <div className="md:w-3/4 p-8 space-y-3 text-black">
        <h2 className="text-4xl font-bold">KIM HA-YEONG</h2>
          <p>
            韓国の4年制大学でソフトウェアを専攻し、
            Spring Boot、MySQL、ネットワーク、Computer Graphics、ウェブサーバープログラミングなど
            幅広く学びました。卒業研究ではChatGPT APIを活用した日本語学習アプリを約1年間かけて開発しました。
          </p>
          <p>
            現在はワーキングホリデーで日本に滞在中。接客アルバイトを通して日本語での会話力やチームワークを鍛え、日本の職場文化にも自然に馴染んできました。  
            勉強してきた技術と日本での経験を組み合わせ、これからはエンジニアとして新しい価値を生み出していきたいと考えています。
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
