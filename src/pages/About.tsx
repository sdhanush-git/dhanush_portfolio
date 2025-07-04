import { motion } from "framer-motion";

const About = () => {
  const timelineItems = [
    {
      year: "2024",
      title: "Master of Computer Application",
      company: "AVS COLLEGE OF ARTS AND SCIENCE",
      description: "Attur Main Road, Ramalingapuram, Salem.   /   CGPA:8.1"
    },
    {
      year: "2024",
      title: "BSC Computer Science",
      company: "SRI GANESH COLLEGE OF ARTS AND SCIENCE",
      description: "Ammapet, Salem.   /   CGPA:7.5"
    },
    {
      year: "2021",
      title: "Computer Science",
      company: "VIDHYA VAASHINI HIGHER SECONDARY SCHOOL",
      description: "Attayampatty, Salem.   /   Percentage : 75% "
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "MERN Stack", level: "In Progress", color: "from-green-400 to-blue-500" },
        { name: "HTML/CSS", level: "Intermediate", color: "from-orange-400 to-red-500" },
        { name: "Bootstrap", level: "Basics", color: "from-purple-400 to-pink-500" },
        { name: "Java", level: "Intermediate", color: "from-blue-400 to-indigo-500" },
        { name: "SQL", level: "Basics", color: "from-yellow-400 to-orange-500" },
        { name: "Linux", level: "Basics", color: "from-gray-400 to-gray-600" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Figma", level: "Intermediate", color: "from-pink-400 to-purple-500" },
        { name: "Github", level: "Intermediate", color: "from-gray-400 to-black" },
        { name: "Cursor", level: "Intermediate", color: "from-cyan-400 to-blue-500" }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
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
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate fresher ready to embark on a journey in software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto mb-8 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border border-purple-400/20"
                />
                
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full p-1">
                    <img
                      src="/lovable-uploads/80733745-af46-4165-854f-cae4e4c73919.png"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl opacity-60 animate-pulse" />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4 text-white">Aspiring Developer</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a recent graduate with a Master's in Computer Application, I'm eager to begin my 
                career in software development. My academic journey has equipped me with strong fundamentals 
                in programming and a passion for creating innovative digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                I'm excited to apply my theoretical knowledge to real-world projects and contribute 
                to meaningful software development initiatives while growing as a professional.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Technical Skills</h3>
            
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                  {category.title}
                </h4>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: skill.level === "In Progress" ? "70%" : 
                                     skill.level === "Intermediate" ? "60%" : "30%" 
                            }}
                            transition={{ duration: 1, delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          />
                        </div>
                      </div>
                      
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg blur-sm`} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Educational Journey</h3>
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="flex flex-col lg:flex-row items-center gap-8 relative"
              >
                <div className="lg:w-1/2 text-center lg:text-right">
                  <span className="text-2xl font-bold text-purple-400">{item.year}</span>
                </div>
                
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full relative z-10" />
                  {index < timelineItems.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-400 to-transparent" />
                  )}
                </div>
                
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-purple-300 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
