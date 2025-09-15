import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wek5lmq",   
        "template_nj2kzoa",  
        formData,
        "ovcsABdPMQPsiJyB3"   
      )
      .then(() => {
        alert("メールが正常に送信されました。✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("メールの送信に失敗しました。❌");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-16"
    >
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Contact<span className="text-blue-500">.</span>
        </h2>
        <p className="text-gray-600">
          貴社からのご連絡を心よりお待ち申し上げております。
        </p>
      </motion.div>

      {/* 폼 */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@gmail.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Write your message..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
        >
          Send
        </motion.button>
      </motion.form>
    </section>
  );
}
