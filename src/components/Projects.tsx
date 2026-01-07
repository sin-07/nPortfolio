import { motion } from "framer-motion";
import { Github, ExternalLink, Gamepad2, GraduationCap, Heart, Code2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  github: string;
  website: string;
  gradient: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "CricketWala PlayArena",
    description: "An immersive cricket gaming platform with real-time gameplay, stunning graphics, and competitive multiplayer modes.",
    icon: Gamepad2,
    github: "https://github.com/sin-07/CricketWalaPlayArena",
    website: "https://cricketwalaplayarena.in",
    gradient: "from-green-500 to-emerald-500",
    tags: ["Gaming", "Interactive", "Multiplayer"],
  },
  {
    title: "Raven Tutorials",
    description: "A comprehensive e-learning platform with structured courses, progress tracking, and interactive learning materials.",
    icon: GraduationCap,
    github: "https://github.com/sin-07/Raven-Tutorials",
    website: "https://raventutorials.in",
    gradient: "from-purple-500 to-indigo-500",
    tags: ["Education", "E-Learning", "Platform"],
  },
  {
    title: "Samastipur Blood Bank",
    description: "A life-saving blood donation management system connecting donors with those in need with real-time inventory.",
    icon: Heart,
    github: "https://github.com/sin-07/Blood-Bank",
    website: "https://samastipurbloodbank.com",
    gradient: "from-red-500 to-rose-500",
    tags: ["Healthcare", "Social Impact", "Management"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Code2 className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Major Projects
          </h2>
          <Code2 className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 mx-auto rounded-full" />
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
          Showcasing projects that solve real problems with elegant solutions
        </p>
      </motion.div>

      {/* Full Width Project Cards */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/80 transition-colors"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} w-fit`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white/90`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium hover:opacity-90 transition-opacity`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Website
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-medium hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View more on GitHub */}
      <motion.a
        href="https://github.com/sin-07"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 font-medium hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
      >
        <Github className="w-5 h-5" />
        Explore More on GitHub
      </motion.a>
    </div>
  );
}
