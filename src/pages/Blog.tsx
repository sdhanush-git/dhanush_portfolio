
import { motion } from "framer-motion";

const Blog = () => {
  const coursework = [
    {
      title: "Data Structures & Algorithms",
      description: "Comprehensive study of fundamental data structures, algorithms, and complexity analysis.",
      grade: "A+",
      semester: "Fall 2023"
    },
    {
      title: "Web Development",
      description: "Full-stack web development using modern frameworks and technologies.",
      grade: "A",
      semester: "Spring 2024"
    },
    {
      title: "Database Systems",
      description: "Database design, SQL, NoSQL databases, and data modeling principles.",
      grade: "A",
      semester: "Fall 2023"
    },
    {
      title: "Software Engineering",
      description: "Software development lifecycle, design patterns, and project management.",
      grade: "A+",
      semester: "Spring 2024"
    },
    {
      title: "Computer Networks",
      description: "Network protocols, distributed systems, and network security fundamentals.",
      grade: "A-",
      semester: "Fall 2023"
    },
    {
      title: "Machine Learning",
      description: "Introduction to ML algorithms, data analysis, and predictive modeling.",
      grade: "A",
      semester: "Spring 2024"
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
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Coursework & Education
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
        >
          Academic achievements and relevant coursework that shaped my technical foundation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coursework.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.grade}
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {course.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{course.semester}</span>
                <span className="text-blue-400">Completed</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
