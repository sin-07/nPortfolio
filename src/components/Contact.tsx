import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Gmail",
      icon: Mail,
      link: "mailto:aniket.singh07vs@gmail.com",
      description: "aniket.singh07vs@gmail.com",
      color: "text-red-400",
      bg: "bg-red-500/20",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/sin-07",
      description: "github.com/sin-07",
      color: "text-slate-300",
      bg: "bg-slate-500/20",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aniket-singhh/",
      description: "Connect on LinkedIn",
      color: "text-blue-400",
      bg: "bg-blue-500/20",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <Sparkles className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg text-slate-300 mb-10 max-w-xl"
      >
        Have a project in mind? Let's build something{" "}
        <span className="text-cyan-400 font-semibold">amazing together</span>.
      </motion.p>

      {/* Social Links - Simple and Fast */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        {socialLinks.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 bg-slate-900/80 border border-slate-700/50 rounded-xl hover:border-cyan-400/50 hover:bg-slate-800/80 transition-colors group"
            >
              <div className={`p-3 rounded-xl ${item.bg}`}>
                <IconComponent className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className="flex flex-col items-start flex-1">
                <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </span>
                <span className="text-sm text-slate-400">{item.description}</span>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
            </motion.a>
          );
        })}
      </div>

      {/* Simple bottom card */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 p-6 bg-slate-900/60 border border-slate-700/50 rounded-xl max-w-md text-center"
      >
        <p className="text-cyan-400 font-semibold text-lg">Open to Opportunities</p>
        <p className="text-slate-400 text-sm mt-2">
          Always excited to collaborate on innovative projects
        </p>
      </motion.div>
    </div>
  );
}
