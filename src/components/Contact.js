import { FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto p-12 my-24 min-h-screen flex flex-col justify-center"
    >
      {/* 헤더 */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold text-blue-500">お問い合わせ</p>
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700">
          ご質問やお仕事のご依頼は、下記の方法でご連絡ください。
        </p>
      </div>

      {/* 연락 방법 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        {/* 이메일 */}
        <a
          href="mailto:khy__0829@naver.com"
          className="group flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <FaEnvelope
            size={32}
            className="text-gray-800 mb-3 transition-colors group-hover:text-blue-500"
          />
          <p className="font-semibold">Email</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/khyiao0829"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <FaGithub
            size={32}
            className="text-gray-800 mb-3 transition-colors group-hover:text-blue-500"
          />
          <p className="font-semibold">GitHub</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
