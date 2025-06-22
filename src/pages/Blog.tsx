
import { motion } from "framer-motion";

const Blog = () => {
  const coursework = [
    {
      title: "Web Technology",
      description: "Modern web development technologies including HTML, CSS, JavaScript, and frameworks for building responsive web applications.",
      grade: "A",
      semester: "Fall 2023",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Prompt Engineering",
      description: "Advanced techniques for crafting effective prompts for AI systems, understanding AI behavior, and optimizing human-AI interactions.",
      grade: "A+",
      semester: "Spring 2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Object Oriented Programming",
      description: "Core OOP concepts including classes, objects, inheritance, polymorphism, and encapsulation using modern programming languages.",
      grade: "A+",
      semester: "Spring 2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Structures and Algorithms Basics",
      description: "Fundamental data structures like arrays, linked lists, stacks, queues and basic algorithmic problem-solving techniques.",
      grade: "A",
      semester: "Fall 2023",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Base Management System",
      description: "Database design principles, SQL queries, normalization, and database administration using relational database systems.",
      grade: "A+",
      semester: "Spring 2024",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Programming Fundamentals",
      description: "Basic programming concepts, syntax, control structures, and problem-solving methodologies using various programming languages.",
      grade: "A",
      semester: "Fall 2023",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Intermediate of Linux",
      description: "Advanced Linux operating system concepts, shell scripting, system administration, and server management techniques.",
      grade: "A-",
      semester: "Spring 2024",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 px-4 relative z-10"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Academic Journey
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exploring the foundations of computer science through comprehensive coursework 
            and hands-on learning experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coursework.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.5 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
                {/* Gradient accent line */}
                <div className={`w-full h-1 bg-gradient-to-r ${course.color} rounded-full mb-4`} />
                
                {/* Header with title and grade */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 flex-1 pr-2">
                    {course.title}
                  </h3>
                  <div className={`bg-gradient-to-r ${course.color} text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg flex-shrink-0`}>
                    {course.grade}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1 group-hover:text-gray-200 transition-colors duration-300">
                  {course.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <span className="text-sm text-gray-400 font-medium">
                    {course.semester}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.color}`} />
                    <span className="text-sm text-cyan-400 font-medium">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">7</div>
            <div className="text-gray-300">Courses Completed</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">8.5</div>
            <div className="text-gray-300">Average Grade</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-gray-300">Completion Rate</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
