import { Link } from 'react-router-dom';
import projects from './ProjectData';

function Project() {
  return (
    
    <section id="projects" className="w-full min-h-screen "
    style={{ backgroundImage: "url('/project-bg.png')" }}>
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-500 mt-12">プロゼクト</p>
      <h2 className="text-4xl font-bold">Project</h2>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {projects.map((proj) => (
            <Link
              to={`/projects/${proj.id}`}
              key={proj.id}
              className="block bg-white shadow-lg border border-gray-200 rounded-xl p-6 hover:shadow-xl transition
                         w-full max-w-4xl mx-auto"  
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {proj.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{proj.description}</p>

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
