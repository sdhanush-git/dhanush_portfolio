
import { motion } from "framer-motion";
import { Github, Code, Trophy, Target } from "lucide-react";

const Profiles = () => {
  const profiles = [
    {
      name: "GitHub",
      icon: Github,
      description: "Open source contributions and repositories",
      stats: "150+ repos, 500+ commits",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "LeetCode",
      icon: Code,
      description: "Algorithm and data structure practice",
      stats: "200+ problems solved",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "HackerRank",
      icon: Trophy,
      description: "Competitive programming challenges",
      stats: "Gold badge, 5-star rating",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Codeforces",
      icon: Target,
      description: "Programming contests and competitions",
      stats: "Expert level, 1600+ rating",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}  
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Coding Profiles
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} opacity-10`}></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <profile.icon size={32} className="mr-4" />
                  <h3 className="text-2xl font-bold">{profile.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{profile.description}</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {profile.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profiles;
