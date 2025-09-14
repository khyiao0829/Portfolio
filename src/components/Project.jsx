import { Link } from "react-router-dom";
import projectData from "./ProjectData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white px-8 md:px-16 lg:px-24 py-20"
    >
      <h2 className="text-5xl font-extrabold mb-12">
        Projects<span className="text-gray-500">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.map((p, index) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition block"
          >
            {/* 카드 상단 */}
            <div className="h-80 bg-gray-100 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-gray-700 text-center px-4">
                {p.title}
              </h3>
            </div>

            {/* 태그 */}
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              {p.tags.map((tag, i) => {
                if (typeof tag === "string") {
                  return (
                    <span
                      key={i}
                      className="flex items-center bg-white text-black px-2 py-1 rounded-full text-xs shadow"
                    >
                      {tag}
                    </span>
                  );
                }
                return (
                  <span
                    key={i}
                    className="flex items-center bg-white text-black px-2 py-1 rounded-full text-xs shadow"
                  >
                    {tag.icon && <span className="mr-1">{tag.icon}</span>}
                    <span>{tag.name}</span>
                  </span>
                );
              })}
            </div>

            {/* 설명 */}
            <div className="p-6">
              <p className="text-white text-left">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
