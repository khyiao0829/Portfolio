import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const projects = [
  {
    id: "1",
    title: "生成型AIを活用したNHK学習アプリ",
    description: "OpenAI 기반 일본어 뉴스 콘텐츠로 학습할 수 있는 교육용 앱입니다。",
    tags: ["OpenAI API", "React-native", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/khyiao0829/Newnihon",
  },
  {
    id: "2",
    title: "バイトシフト調整Web/アプリサイト",
    description: "알바 스케줄 조정을 위한 간단한 웹앱입니다。Firebase 인증 포함。",
    tags: ["React", "Firebase"],
  },
  {
    id: "3",
    title: "繊維会社のサイト制作中",
    description: "섬유 기업을 위한 홈페이지 제작 프로젝트 진행 중입니다。",
    tags: ["HTML", "CSS", "React"],
  },
];

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
        <div className="flex flex-wrap gap-2 text-blue-600 font-semibold mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 px-3 py-1 rounded-full border border-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub 링크 버튼 */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-12 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub リポジトリを見る
          </a>
        )}

        {/* NHK 학습 앱(id=2)일 경우 PDF 표시 */}
        {project.id === "2" && (
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

        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2"
        >
          <AiOutlineArrowLeft /> 戻る
        </button>
      </div>

      {/* 반응형 스타일: 모바일에서 scale 줄이기 */}
      <style>
        {`
          @media (max-width: 768px) {
            iframe {
              transform: scale(0.8) !important;
              height: 80vh !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ProjectDetail;
