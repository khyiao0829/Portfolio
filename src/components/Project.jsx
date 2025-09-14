import { motion } from "framer-motion";
import projects from "./ProjectData";

function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* 프로젝트 기본 정보 */}
            <div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                {project.detail}
              </p>
            </div>

            {/* 태그 아이콘 */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800"
                >
                  {tag.icon}
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
