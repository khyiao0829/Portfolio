function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-12 my-24 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold text-center mb-6">お問い合わせ</h2>
      <p className="text-gray-700 text-center mb-8">
        ご質問やお仕事のご依頼は下記の方法でご連絡ください。
      </p>

      <ul className="space-y-4 text-left">
        <li>
          <a href="mailto:your@email.com" className="text-blue-600 hover:underline">
            📧 khy__0829@naver.com
          </a>
        </li>
        <li>
          <a href="https://github.com/khyiao0829" target="_blank" className="text-blue-600 hover:underline">
            💻 GitHub
          </a>
        </li>
        <li>
          <a href="https://engineerkhy.tistory.com" target="_blank" className="text-blue-600 hover:underline">
            🔗 技術記録ブログ
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
