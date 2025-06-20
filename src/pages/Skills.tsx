import { motion } from "framer-motion";
import { Code, Database, Github, Figma, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      level: "INTERMEDIATE",
      skills: [
        { name: "HTML", icon: Code, color: "#E34F26" },
        { name: "CSS", icon: Code, color: "#1572B6" },
        { name: "JavaScript", icon: Code, color: "#F7DF1E" },
        { name: "SQL", icon: Database, color: "#336791" },
        { name: "Python", icon: Code, color: "#3776AB" },
        { name: "Java", icon: Code, color: "#007396" },
        { name: "Figma", icon: Figma, color: "#F24E1E" },
        { name: "Github", icon: Github, color: "#181717" }
      ]
    },
    {
      level: "FAMILIAR",
      skills: [
        { name: "Bootstrap", icon: Code, color: "#7952B3" },
        { name: "Latex", icon: Code, color: "#008080" },
        { name: "Linux", icon: Terminal, color: "#FCC624" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
              SKILLS
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical expertise and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.level}
              variants={categoryVariants}
              className="relative"
            >
              {/* Category Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                {/* Category Title */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {category.level}:
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full" />
                </motion.div>

                {/* Skills List */}
                <motion.div
                  className="flex flex-wrap gap-4 text-xl text-gray-200"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover="hover"
                        className="group relative flex items-center gap-2"
                      >
                        {/* Icon */}
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent 
                            size={24} 
                            style={{ color: skill.color }}
                            className="drop-shadow-lg"
                          />
                        </motion.div>
                        
                        {/* Skill Name */}
                        <span className="font-medium group-hover:text-yellow-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                        
                        {/* Separator */}
                        {skillIndex < category.skills.length - 1 && (
                          <span className="text-gray-400 mx-1">•</span>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-red-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
