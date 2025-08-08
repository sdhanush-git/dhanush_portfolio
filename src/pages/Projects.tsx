
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Amazon Clone",
      category: "UI Design",
      description: "🎨 Crafted a visually stunning Amazon clone UI using Figma, closely mimicking the original platform's look and feel with modern design principles.",
      image: "/lovable-uploads/946ba361-d35c-430e-9a65-ffaa199d1adb.png",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "Dark Mode"],
      github: "#",
      live: "https://www.behance.net/gallery/192947159/Amazon-Clone-UI-Design"
    },
    {
      id: 2,
      title: "Web Based Stock Management System",
      category: "Full Stack",
      description: "💼 Developed a comprehensive inventory management system with real-time tracking, order management, and automated reporting capabilities.",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Java", "MySQL"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my creative work and technical expertise
          </p>
        </motion.div>

        {/* UI Design Section */}
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-pink-500/20 rounded-3xl p-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  UI Design Showcase
                </h2>
              </motion.div>
              
              {projects
                .filter((project) => project.category === "UI Design")
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-pink-500/40 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/2 relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-pink-500/80 backdrop-blur-sm rounded-full text-white hover:bg-pink-600 transition-all duration-300 hover:scale-110"
                          >
                            <Globe size={20} />
                          </a>
                        </div>
                      </div>
                      
                      <div className="lg:w-1/2 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-sm font-medium text-pink-300">
                            {project.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-base">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg text-sm text-pink-200 hover:bg-pink-500/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.section>

        {/* Web Development Section */}
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-teal-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-green-900/20 via-blue-900/20 to-teal-900/20 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Web Development
                </h2>
              </motion.div>
              
              {projects
                .filter((project) => project.category === "Full Stack")
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                    whileHover={{ scale: 1.02, rotateY: -5 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-green-500/40 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col lg:flex-row-reverse">
                      <div className="lg:w-1/2 relative overflow-hidden">
                        <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-green-900/30 to-blue-900/30 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🗃️</div>
                            <p className="text-green-300 font-medium">Stock Management System</p>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-green-500/80 backdrop-blur-sm rounded-full text-white hover:bg-green-600 transition-all duration-300 hover:scale-110"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-500/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                          >
                            <Globe size={20} />
                          </a>
                        </div>
                      </div>
                      
                      <div className="lg:w-1/2 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300">
                            {project.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-base">
                          {project.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg text-sm text-green-200 hover:bg-green-500/20 transition-colors text-center"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Projects;
