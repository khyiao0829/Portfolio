import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "./ProjectData";

function Projects() {
  return (
    <section id="projects" className="py-16 px-6 min-h-screen w-screen">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* 카드 전체를 Link로 감싸기 */}
            <Link
              to={`/projects/${project.id}`}
              className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
