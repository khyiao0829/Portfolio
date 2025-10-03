import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import projectData from "./ProjectData";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // 🔥 HTML 허용 플러그인
import "github-markdown-css/github-markdown.css";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === id);

  const [readme, setReadme] = useState("");

  useEffect(() => {
    if (["3", "4", "5"].includes(project?.id) && project.github) {
      const repoPath = project.github.replace("https://github.com/", "");

      async function fetchReadme() {
        try {
          let res = await fetch(
            `https://raw.githubusercontent.com/${repoPath}/main/README.md`
          );
          if (!res.ok) {
            res = await fetch(
              `https://raw.githubusercontent.com/${repoPath}/master/README.md`
            );
          }
          if (res.ok) {
            const text = await res.text();
            setReadme(text);
          } else {
            setReadme("README.md が見つかりませんでした。");
          }
        } catch (err) {
          console.error("README fetch error:", err);
        }
      }

      fetchReadme();
    }
  }, [project]);

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
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg shadow-sm"
            >
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
              www.kimhyportfolio.vercel.app
            </a>
          )}
        </div>

        {/* README 표시 */}
        {readme && (
          <div className="mt-8 markdown-body">
            <h2 className="text-xl font-bold mb-4">README</h2>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]} // 🔥 HTML 허용
              components={{
                img: ({ node, ...props }) => {
                  let src = props.src;
                  if (src && !src.startsWith("http")) {
                    const repoPath = project.github.replace(
                      "https://github.com/",
                      ""
                    );
                    src = `https://raw.githubusercontent.com/${repoPath}/main/${src}`;
                  }
                  return (
                    <img
                      {...props}
                      src={src}
                      alt={props.alt}
                      className="max-w-[500px] mx-auto rounded-lg shadow-md my-4"
                    />
                  );
                },
              }}
            >
              {readme}
            </ReactMarkdown>
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
