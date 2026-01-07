import { motion } from "framer-motion";
import { Github, ExternalLink, Gamepad2, GraduationCap, Heart, Star, GitFork, Code2, Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  github: string;
  website: string;
  gradient: string;
  tags: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "CricketWala PlayArena",
    description: "An immersive cricket gaming platform that brings the excitement of cricket to your fingertips. Features real-time gameplay, stunning graphics, and competitive multiplayer modes.",
    icon: Gamepad2,
    github: "https://github.com/sin-07/CricketWalaPlayArena",
    website: "https://cricketwalaplayarena.in",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    tags: ["Gaming", "Interactive", "Multiplayer"],
    highlights: ["Real-time gameplay", "Stunning UI", "Competitive modes"],
  },
  {
    title: "Raven Tutorials",
    description: "A comprehensive e-learning platform designed to make education accessible and engaging. Features structured courses, progress tracking, and interactive learning materials.",
    icon: GraduationCap,
    github: "https://github.com/sin-07/Raven-Tutorials",
    website: "https://raventutorials.in",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    tags: ["Education", "E-Learning", "Platform"],
    highlights: ["Structured courses", "Progress tracking", "Interactive content"],
  },
  {
    title: "Blood Bank",
    description: "A life-saving blood donation management system connecting donors with those in need. Features donor registration, blood inventory management, and emergency request handling.",
    icon: Heart,
    github: "https://github.com/sin-07/Blood-Bank",
    website: "https://samastipurbloodbank.com",
    gradient: "from-red-500 via-rose-500 to-pink-500",
    tags: ["Healthcare", "Social Impact", "Management"],
    highlights: ["Donor management", "Real-time inventory", "Emergency alerts"],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 className="w-10 h-10 text-cyan-400" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Major Projects
          </h2>
          <Code2 className="w-10 h-10 text-emerald-400" />
        </motion.div>
        <motion.div
          className="h-1 w-40 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 160 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
        >
          Showcasing my best work - projects that solve real problems with elegant solutions
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full relative z-10"
      >
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                initial={false}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-lg rounded-3xl border border-slate-700/50 group-hover:border-slate-600/80 overflow-hidden transition-all duration-500 h-full">
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                {/* Animated corner decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="p-6 relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <Star className="w-4 h-4" />
                        <span>Featured Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white/90 border border-white/10`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-slate-400 text-sm"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        initial={false}
                      />
                      <Globe className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">View Live</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span className="hidden sm:inline">Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute bottom-4 right-4 text-slate-700"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GitFork className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* View more on GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 relative z-10"
      >
        <motion.a
          href="https://github.com/sin-07"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 font-medium shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group"
        >
          <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span>Explore More on GitHub</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  );
}
