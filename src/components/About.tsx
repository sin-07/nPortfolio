import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Award } from "lucide-react";

export default function About() {
  const skills = [
    {
      title: "Technical Expertise",
      icon: Code2,
      items: [
        "Full Stack Web Development",
        "React & Modern JavaScript",
        "RESTful API Development",
        "Database Management",
        "UI/UX Design",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Core Strengths",
      icon: Rocket,
      items: [
        "Data Structures & Algorithms",
        "Problem Solving",
        "System Design",
        "Responsive Design",
        "Clean Code Practices",
      ],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <Lightbulb className="w-10 h-10 text-cyan-400" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <Award className="w-10 h-10 text-emerald-400" />
        </motion.div>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-lg p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 relative"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-tr-full" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 relative z-10"
        >
          <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            Full Stack Developer & Computer Science Engineer
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A dedicated and passionate creator with a love for turning ideas into reality. Whether it's
            crafting compelling narratives, designing captivating visuals, or solving complex problems, I
            thrive on the challenges that come with bringing ideas to life.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Currently pursuing Computer Science{" "}
            <span className="text-cyan-400 font-semibold">Engineering</span>,
            where I'm building a strong foundation in software development, algorithms, and system design.
            My journey began at{" "}
            <span className="text-emerald-400 font-semibold">National High School</span>,
            where I discovered my passion for technology and innovation.
          </motion.p>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 mt-6"
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="bg-slate-950/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <h3 className="text-cyan-300 font-bold text-lg group-hover:text-cyan-200">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2 text-slate-400 relative z-10">
                    {skill.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="relative mt-6 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20"
          >
            <div className="absolute top-2 left-4 text-6xl text-cyan-400/20 font-serif">"</div>
            <p className="text-center text-slate-300 italic text-lg relative z-10 pt-4">
              Transforming complex problems into elegant solutions through code.
            </p>
            <div className="absolute bottom-2 right-4 text-6xl text-emerald-400/20 font-serif rotate-180">"</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
