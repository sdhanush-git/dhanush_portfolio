
import { motion } from "framer-motion";

const Blog = () => {
  const coursework = [
    {
      title: "Web Technology",
      description: "Modern web development technologies including HTML, CSS, JavaScript, and frameworks for building responsive web applications.",
      grade: "A",
      semester: "Fall 2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Prompt Engineering",
      description: "Advanced techniques for crafting effective prompts for AI systems, understanding AI behavior, and optimizing human-AI interactions.",
      grade: "A+",
      semester: "Spring 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Object Oriented Programming",
      description: "Core OOP concepts including classes, objects, inheritance, polymorphism, and encapsulation using modern programming languages.",
      grade: "A+",
      semester: "Spring 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Structures and Algorithms Basics",
      description: "Fundamental data structures like arrays, linked lists, stacks, queues and basic algorithmic problem-solving techniques.",
      grade: "A",
      semester: "Fall 2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Base Management System",
      description: "Database design principles, SQL queries, normalization, and database administration using relational database systems.",
      grade: "A+",
      semester: "Spring 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Programming Fundamentals",
      description: "Basic programming concepts, syntax, control structures, and problem-solving methodologies using various programming languages.",
      grade: "A",
      semester: "Fall 2023",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Intermediate of Linux",
      description: "Advanced Linux operating system concepts, shell scripting, system administration, and server management techniques.",
      grade: "A-",
      semester: "Spring 2024",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop",
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
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {coursework.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.5 + index * 0.1, 
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card container */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Image section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Grade badge */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="absolute top-4 right-4"
                  >
                    <div className={`bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20`}>
                      {course.grade}
                    </div>
                  </motion.div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                      {course.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
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
                </div>
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

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.div>
  );
};

export default Blog;
