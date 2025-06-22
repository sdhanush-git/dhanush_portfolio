
import { motion } from "framer-motion";

const Blog = () => {
  const coursework = [
    {
      title: "Web Technology",
      description: "Modern web development technologies including HTML, CSS, JavaScript, and frameworks for building responsive web applications.",
      grade: "A",
      semester: "Fall 2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      title: "Object Oriented Programming",
      description: "Core OOP concepts including classes, objects, inheritance, polymorphism, and encapsulation using modern programming languages.",
      grade: "A+",
      semester: "Spring 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Data Structures and Algorithms Basics",
      description: "Fundamental data structures like arrays, linked lists, stacks, queues and basic algorithmic problem-solving techniques.",
      grade: "A",
      semester: "Fall 2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Data Base Management System",
      description: "Database design principles, SQL queries, normalization, and database administration using relational database systems.",
      grade: "A+",
      semester: "Spring 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Programming Fundamentals",
      description: "Basic programming concepts, syntax, control structures, and problem-solving methodologies using various programming languages.",
      grade: "A",
      semester: "Fall 2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      title: "Basics of Linux",
      description: "Linux operating system fundamentals, command line interface, file systems, and system administration basics.",
      grade: "A-",
      semester: "Spring 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
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
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.grade}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {course.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{course.semester}</span>
                  <span className="text-blue-400">Completed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
