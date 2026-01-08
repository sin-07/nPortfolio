'use client'

import { motion } from "framer-motion"
import { Lightbulb, Code2, Rocket } from "lucide-react"

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
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Lightbulb className="w-8 h-8 text-cyan-400" />
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <Lightbulb className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
      </motion.div>

      {/* Single Full Width Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-slate-900/80 backdrop-blur-sm p-8 sm:p-12 md:p-16 border-y border-slate-700/50"
      >
        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent mb-6 text-center">
          Full Stack Developer & Computer Science Engineer
        </p>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4 max-w-5xl mx-auto text-center">
          A dedicated creator passionate about turning ideas into reality. Whether it&apos;s
          crafting compelling narratives, designing captivating visuals, or solving complex problems, I
          thrive on challenges.
        </p>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-5xl mx-auto text-center">
          Currently pursuing Computer Science{" "}
          <span className="text-cyan-400 font-semibold">Engineering</span>,
          building a strong foundation in software development, algorithms, and system design.
        </p>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-cyan-300 font-bold text-xl">{skill.title}</h3>
                  </div>
                  <ul className="space-y-3 text-slate-400 text-base sm:text-lg">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Quote */}
          <div className="p-6 rounded-xl bg-cyan-500/5 border border-cyan-400/20 text-center">
            <p className="text-slate-300 italic text-lg">
              &quot;Transforming complex problems into elegant solutions through code.&quot;
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
