import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import projectData from "./ProjectData";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center text-red-500">
        <h2 className="text-2xl font-bold mb-4">プロジェクトが見つかりません</h2>
        <button
          onClick={() => navigate("/#projects")}
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

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-4 mb-6">
          {project.tags.map((tag, idx) => (
            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg shadow-sm">
              {tag.icon}
              <span className="text-sm font-semibold">{tag.name}</span>
            </div>
          ))}
        </div>

        {/* GitHub / Demo 버튼 */}
        <div className="flex gap-4 mb-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Demo
            </a>
          )}
        </div>

        {/* PDF */}
        {project.pdf && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">アプリ紹介PDF</h2>
            <iframe
            src={project.pdf}
            title={`${project.title} PDF`}   
            className="w-full h-[80vh] border rounded"
          />
          </div>
        )}

        {/* Demo 이미지 */}
        {project.demoImage && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">デモ画像</h2>
            <img src={project.demoImage} alt={project.title} className="rounded-lg shadow-md max-h-[500px] object-contain mx-auto" />
          </div>
        )}

        {/* 뒤로가기 */}
        <button
          onClick={() => navigate(-1)}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition z-50"
        >
          <AiOutlineArrowLeft size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;
