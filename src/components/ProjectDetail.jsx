import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiOpenai, SiMongodb, SiExpress, SiFirebase,SiPython, SiPytorch, SiStreamlit, SiOpencv } from "react-icons/si";

const projects = [
  {
    id: "1",
    title: "生成型AIを活用したNHK学習アプリ",
    description: "OpenAIを利用した日本語ニュースコンテンツで学習できる教育用アプリです。",
    tags: ["OpenAI API", "React Native", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/khyiao0829/Newnihon",
  },
  {
    id: "2",
    title: "バイトシフト調整Web/アプリサイト",
    description: "アルバイトのシフトを調整する簡単なウェブアプリです。Firebase認証を含みます。",
    tags: ["React", "Firebase"],
    github: "https://github.com/khyiao0829/shift-management-app"
  },
  {
    id: "3",
    title: "個人ポートフォリオサイト",
    description: "Reactで作成したポートフォリオサイトで、Vercelを使用して実際にユーザーがアクセス可能です。",
    tags: ["React", "HTML", "CSS"],
    github: "https://github.com/khyiao0829/portfolio",
    demo: "https://portfolio-puce-ten-wevoujoub3.vercel.app",
  },
  {
    id: "4",
    title: "Shibuya Crowd Analytics",
    description: "YOLOv8とStreamlitを活用し、渋谷スクランブル交差点のYouTubeライブ映像を解析して人の数をリアルタイムにカウントするプロジェクト。Tiling・Global NMS・EMA・CLAHE前処理によって精度を改善しました。",
    tags: ["Python", "YOLOv8", "Streamlit", "OpenCV"],
    github: "https://github.com/khyiao0829/Shibuya-Crowd-Analytics",
    demoImage: "/shibuya_demo.png",
  },
];

const tagIcons = {
  "React": <FaReact className="text-blue-500" />,
  "React Native": <FaReact className="text-cyan-500" />,
  "NodeJS": <FaNodeJs className="text-green-600" />,
  "ExpressJS": <SiExpress className="text-gray-700" />,
  "MongoDB": <SiMongodb className="text-green-700" />,
  "OpenAI API": <SiOpenai className="text-purple-600" />,
  "Firebase": <SiFirebase className="text-yellow-500" />,
  "HTML": <FaHtml5 className="text-orange-600" />,
  "CSS": <FaCss3Alt className="text-blue-600" />,
  "Python": <SiPython color="#3776AB" />,
  "YOLOv8": <SiPytorch className="text-red-500" />,
  "Streamlit": <SiStreamlit className="text-pink-500" />,
  "OpenCV": <SiOpencv className="text-indigo-500" />,
};

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center text-red-500">
        <h2 className="text-2xl font-bold mb-4">プロジェクトが見つかりません</h2>
        <button
          onClick={() => navigate("/projects")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          プロジェクト一覧に戻る
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="fonts-sans max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md relative">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6 text-gray-700">{project.description}</p>
        
        {/* 기술 스택 아이콘 나열 */}
        <div className="flex flex-wrap gap-4 mb-6">
          {project.tags.map((tag, idx) => (
            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg shadow-sm">
              {tagIcons[tag] || <span className="text-gray-500">?</span>}
              <span className="text-sm font-semibold">{tag}</span>
            </div>
          ))}
        </div>

        {/* GitHub 버튼 */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        )}

        {/* 데모 사이트 버튼 */}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-12 ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            デモサイトを見る
          </a>
        )}

        {/* PDF 표시 */}
        {project.id === "1" && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">アプリ紹介PDF</h2>
            <div className="w-full flex justify-center overflow-hidden">
              <iframe
                src="/nhk-learning.pdf"
                title="NHK学習アプリ PDF"
                className="border rounded"
                style={{
                  width: "100%",
                  height: "100vh",
                  transform: "scale(0.9)",
                  transformOrigin: "top center",
                }}
              ></iframe>
            </div>
          </div>
        )}
        {/* デモ画像 */}
        {project.demoImage && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">デモ画像</h2>
            <div className="w-full flex justify-center">
              <img
                src={project.demoImage}
                alt={`${project.title} demo`}
                className="rounded-lg shadow-md max-h-[500px] object-contain"
              />
            </div>
          </div>
        )}


        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2"
        >
          <AiOutlineArrowLeft /> 戻る
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;
