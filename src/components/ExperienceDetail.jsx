// src/pages/ExperienceDetail.jsx
import React from "react";

const ExperienceDetail = () => {
  const galleryData = [
    { src: "/factory1.jpeg", caption: "在庫管理" },
    { src: "/factory2.jpeg", caption: "在庫管理" },
    { src: "/factory3.jpeg", caption: "織機（しょっき）の点検作業" },
    { src: "/factory4.jpeg", caption: "織機（しょっき）の点検作業" },
    { src: "/factory5.jpeg", caption: "織機（しょっき）の点検作業" },
    { src: "/factory6.jpeg", caption: "製品の品質チェック" },
    { src: "/factory7.jpeg", caption: "製品の品質チェック" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-700 leading-relaxed mt-8">
        <h2 className="text-3xl font-semibold mb-6">韓国の経験</h2>
        <p className="text-lg">
          私の父の工場で働いていました。主に在庫管理と不良品のチェックを担当していました。
          現場では製品の流れを把握し、効率的な管理方法を学びました。
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-md bg-white"
            >
              <img
                src={item.src}
                alt={`職場写真 ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3 text-center text-sm text-gray-600 bg-gray-100">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-200">
        © 2025 Experience in Korea
      </footer>
    </div>
  );
};

export default ExperienceDetail;
