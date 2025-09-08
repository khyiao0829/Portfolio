
import { Link } from 'react-router-dom';
import projects from './ProjectData';

function Project() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 mt-32 scroll-mt-32 tracking-tight">
        プロジェクト一覧
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <Link
            to={`/projects/${proj.id}`}
            key={proj.id}
            className="block bg-white shadow-lg border border-gray-200 rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{proj.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{proj.description}</p>

            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
                >
                  {tag.icon} 
                  <span className="text-sm">{tag.name}</span> 
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Project;
