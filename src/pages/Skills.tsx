
import { motion } from "framer-motion";
import { Code, Database, Github, Figma, Terminal } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: Code, color: "#E34F26", level: "Intermediate" },
    { name: "CSS", icon: Code, color: "#1572B6", level: "Intermediate" },
    { name: "JavaScript", icon: Code, color: "#F7DF1E", level: "Intermediate" },
    { name: "SQL", icon: Database, color: "#336791", level: "Intermediate" },
    { name: "Python", icon: Code, color: "#3776AB", level: "Intermediate" },
    { name: "Java", icon: Code, color: "#007396", level: "Intermediate" },
    { name: "Figma", icon: Figma, color: "#F24E1E", level: "Intermediate" },
    { name: "Github", icon: Github, color: "#181717", level: "Intermediate" },
    { name: "Bootstrap", icon: Code, color: "#7952B3", level: "Familiar" },
    { name: "Latex", icon: Code, color: "#008080", level: "Familiar" },
    { name: "Linux", icon: Terminal, color: "#FCC624", level: "Familiar" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-24 pb-16 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I love working with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Background Glow */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <IconComponent 
                      size={40} 
                      style={{ color: skill.color }}
                      className="drop-shadow-lg"
                    />
                  </motion.div>
                  
                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Level Badge */}
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    skill.level === "Intermediate" 
                      ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                      : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
