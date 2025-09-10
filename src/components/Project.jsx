import { Link } from 'react-router-dom';
import projects from './ProjectData';

function Project() {
  return (
    <section id="projects" className="bg-[#0a192f] min-h-screen max-w-4xl mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
      <h2 className="max-w-4xl text-3xl font-bold text-white text-center mb-12 mt-16 scroll-mt-32 tracking-tight">
        Project
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {projects.map((proj) => (
          <Link
            to={`/projects/${proj.id}`}
            key={proj.id}
            className="block bg-white shadow-lg border border-gray-200 rounded-xl p-6 hover:shadow-xl transition"
          >
            {/* 제목 */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {proj.title}
            </h3>
            
            {/* 설명 */}
            <p className="text-gray-700 text-sm mb-4">{proj.description}</p>

            {/* 태그 */}
            <div className="flex flex-wrap gap-3">
              {proj.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  {tag.icon}
                  <span className="text-sm font-medium">{tag.name}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Project;
