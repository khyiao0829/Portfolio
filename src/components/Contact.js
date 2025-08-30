function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-8 my-16 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-6">お問い合わせ</h2>
      <p className="text-gray-700 text-center mb-8">
        ご質問やお仕事のご依頼は下記の方法でご連絡ください。
      </p>

      <ul className="space-y-4 text-center">
        <li>
          <a href="mailto:your@email.com" className="text-blue-600 hover:underline">
            📧 your@email.com
          </a>
        </li>
        <li>
          <a href="https://github.com/username" target="_blank" className="text-blue-600 hover:underline">
            💻 GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/username/" target="_blank" className="text-blue-600 hover:underline">
            🔗 LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
