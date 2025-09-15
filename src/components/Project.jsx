import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectData from "./ProjectData";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    
    <motion.section
      id="projects"
      className="bg-black text-white justify-center px-8 md:px-16 lg:px-24 py-20"
      initial={{ opacity: 0, y: mounted ? 100 : 0 }}       
      whileInView={{ opacity: 1, y: 0 }}      
      viewport={{ once: false, amount: 0.3 }}  
      exit={{ opacity: 0, y: 100 }}  
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-5xl font-extrabold mb-12">
        Projects<span className="text-blue-500">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition white"
          >
            {/* 썸네일 이미지 */}
            <img
              src={p.image} 
              alt={p.title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* hover 오버레이 */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {p.title}
              </h3>

              {/* 태그 */}
              <div className="flex flex-wrap justify-center gap-2">
                {p.tags.map((tag, i) =>
                  typeof tag === "string" ? (
                    <span
                      key={i}
                      className="flex items-center bg-white text-black px-2 py-1 rounded-full text-xs shadow"
                    >
                      {tag}
                    </span>
                  ) : (
                    <span
                      key={i}
                      className="flex items-center bg-white text-black px-2 py-1 rounded-full text-xs shadow"
                    >
                      {tag.icon && <span className="mr-1">{tag.icon}</span>}
                      <span>{tag.name}</span>
                    </span>
                  )
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
