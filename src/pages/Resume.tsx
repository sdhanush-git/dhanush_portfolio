
import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Globe, Building2, GraduationCap } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would download the actual PDF
    console.log("Downloading resume...");
  };

  const internships = [
    {
      company: "Microsoft",
      position: "Software Engineering Intern",
      duration: "Summer 2023",
      description: "Developed cloud-based solutions using Azure services and React",
      technologies: ["React", "Azure", "TypeScript", "C#"]
    },
    {
      company: "Google",
      position: "Frontend Development Intern",
      duration: "Summer 2022",
      description: "Built responsive web applications and improved user experience",
      technologies: ["JavaScript", "Angular", "Material Design", "Firebase"]
    },
    {
      company: "Amazon",
      position: "Full Stack Intern",
      duration: "Summer 2021",
      description: "Created scalable web applications using modern technologies",
      technologies: ["Node.js", "React", "AWS", "MongoDB"]
    }
  ];

  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "AVS COLLEGE OF ARTS AND SCIENCE",
      location: "Attur Main Road, Ramalingapuram, Salem",
      duration: "Pursuing",
      grade: "CGPA: 8.1 / 10",
      status: "current"
    },
    {
      degree: "BSC Computer Science",
      institution: "SRI GANESH COLLEGE OF ARTS AND SCIENCE",
      location: "Ammapet, Salem",
      duration: "May 2024",
      grade: "CGPA: 7.4 / 10",
      status: "completed"
    },
    {
      degree: "Computer Science",
      institution: "VIDHYA VAASHINI HIGHER SECONDARY SCHOOL",
      location: "Attayampatty, Salem",
      duration: "May 2021",
      grade: "Percentage: 75%",
      status: "completed"
    }
  ];

  const skillCategories = [
    {
      title: "INTERMEDIATE",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "SQL", "Java", "Figma", "Github"],
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "FAMILIAR",
      skills: ["Latex", "Linux", "React"],
      color: "from-green-400 to-blue-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <Download size={20} />
            Download PDF
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8"
        >
          {/* Header */}
          <div className="text-center border-b border-white/10 pb-8">
            <h2 className="text-3xl font-bold text-white mb-4">DHANUSH Developer</h2>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>medhanush100@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9629 736 731</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Salem, TamilNadu</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <motion.section
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-orange-400 mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Recent Computer Science graduate with a Master's in Computer Application, eager to begin my career in software development. 
              Strong foundation in programming languages including Java, JavaScript, and web technologies. 
              Passionate about learning new technologies and contributing to innovative software solutions as a fresher in the tech industry.
            </p>
          </motion.section>

          {/* Internships Section */}
          <motion.section
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Building2 className="text-purple-400" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold text-purple-400">Internships</h3>
            </div>
            
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.company}
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -50 : 50,
                    rotateY: index % 2 === 0 ? -15 : 15
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    rotateY: 0
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.9 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                  className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl p-6 group cursor-pointer overflow-hidden"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <motion.h4 
                          className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {internship.position}
                        </motion.h4>
                        <motion.p 
                          className="text-purple-300 font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 + index * 0.2 }}
                        >
                          {internship.company}
                        </motion.p>
                      </div>
                      <motion.span 
                        className="text-gray-400 text-sm"
                        animate={{ 
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        {internship.duration}
                      </motion.span>
                    </div>
                    
                    <motion.p 
                      className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.2 }}
                    >
                      {internship.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ 
                            scale: 0,
                            rotate: -180
                          }}
                          animate={{ 
                            scale: 1,
                            rotate: 0
                          }}
                          transition={{ 
                            delay: 1.6 + index * 0.2 + techIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(147, 51, 234, 0.3)"
                          }}
                          className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full"
                    animate={{
                      y: [0, 8, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.6
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <GraduationCap className="text-blue-400" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold text-blue-400">Education</h3>
            </div>
            
            <div className="space-y-6">
              {educationData.map((education, index) => (
                <motion.div
                  key={education.institution}
                  initial={{ 
                    opacity: 0, 
                    y: 30,
                    scale: 0.9
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                  className={`relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border ${
                    education.status === 'current' 
                      ? 'border-blue-400/30 shadow-blue-400/20' 
                      : 'border-blue-400/20'
                  } rounded-xl p-6 group cursor-pointer overflow-hidden`}
                >
                  {/* Animated Background for Current Education */}
                  {education.status === 'current' && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <motion.h4 
                          className={`text-lg font-semibold ${
                            education.status === 'current' ? 'text-blue-300' : 'text-white'
                          } group-hover:text-blue-300 transition-colors duration-300`}
                          whileHover={{ scale: 1.02 }}
                        >
                          {education.degree}
                        </motion.h4>
                        <motion.p 
                          className="text-blue-300 font-medium text-sm mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 + index * 0.2 }}
                        >
                          {education.institution}
                        </motion.p>
                        <motion.p 
                          className="text-gray-400 text-xs"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 + index * 0.2 }}
                        >
                          {education.location}
                        </motion.p>
                      </div>
                      <div className="text-right">
                        <motion.span 
                          className={`text-sm font-medium ${
                            education.status === 'current' ? 'text-blue-300' : 'text-gray-400'
                          }`}
                          animate={{ 
                            opacity: education.status === 'current' ? [0.7, 1, 0.7] : 1
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: education.status === 'current' ? Infinity : 0,
                            delay: index * 0.3
                          }}
                        >
                          {education.duration}
                        </motion.span>
                        <motion.p 
                          className="text-blue-400 text-sm font-semibold mt-1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 1.6 + index * 0.2,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          {education.grade}
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    {education.status === 'current' && (
                      <motion.div
                        className="flex items-center gap-2 mt-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 + index * 0.2 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                        <span className="text-xs text-blue-300 font-medium">Currently Pursuing</span>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Floating Academic Icons */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-indigo-400 rounded-full"
                    animate={{
                      y: [0, 6, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.4, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.6
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-xl font-bold text-orange-400 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + categoryIndex * 0.2 }}
                  className="space-y-3"
                >
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                    {category.title}
                  </h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 1.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                        }}
                        className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer overflow-hidden"
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        
                        <span className="text-sm text-gray-300 font-medium relative z-10 group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                        
                        <motion.div
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-500`}
                        />
                        
                        <motion.div
                          className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: skillIndex * 0.2
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
