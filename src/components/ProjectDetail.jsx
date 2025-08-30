import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const projects = [
  {
    id: "1",
    title: "LSTMを活用した株式価格予測",
    description: "딥러닝 기반 시계열 예측 모델을 통해 주가 흐름을 분석한 프로젝트입니다。",
    tags: ["Python", "LSTM", "Deep Learning"],
  },
  {
    id: "2",
    title: "生成型AIを活用したNHK学習アプリ",
    description: "OpenAI 기반 일본어 뉴스 콘텐츠로 학습할 수 있는 교육용 앱입니다。",
    tags: ["OpenAI API", "React-native", "NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    id: "3",
    title: "バイトシフト調整Web/アプリサイト",
    description: "알바 스케줄 조정을 위한 간단한 웹앱입니다。Firebase 인증 포함。",
    tags: ["React", "Firebase"],
  },
  {
    id: "4",
    title: "繊維会社のサイト制作中",
    description: "섬유 기업을 위한 홈페이지 제작 프로젝트 진행 중입니다。",
    tags: ["HTML", "CSS", "React"],
  },
];

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // id에 맞는 프로젝트 찾기
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
      <div className="flex flex-wrap gap-2 text-blue-600 font-semibold mb-12">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 px-3 py-1 rounded-full border border-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 우측 하단 "戻る" 버튼 */}
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
