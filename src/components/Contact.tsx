import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Gmail",
      icon: Mail,
      link: "mailto:aniket.singh07vs@gmail.com",
      description: "aniket.singh07vs@gmail.com",
      gradient: "from-red-500 to-pink-500",
      hoverGradient: "hover:from-red-400 hover:to-pink-400",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/sin-07",
      description: "github.com/sin-07",
      gradient: "from-slate-600 to-slate-800",
      hoverGradient: "hover:from-slate-500 hover:to-slate-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aniket-singhh/",
      description: "Connect on LinkedIn",
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "hover:from-blue-400 hover:to-cyan-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-10 h-10 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <Sparkles className="w-10 h-10 text-emerald-400" />
        </motion.div>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl relative z-10 leading-relaxed"
      >
        Have a project in mind or just want to chat? I'd{" "}
        <span className="text-cyan-400 font-semibold">love to hear</span> from you.
        Let's build something{" "}
        <span className="text-emerald-400 font-semibold">amazing together</span>.
      </motion.p>

      {/* Social Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-5 w-full max-w-md relative z-10"
      >
        {socialLinks.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`relative bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-lg border-2 border-slate-700/50 rounded-2xl px-6 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 group overflow-hidden`}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                initial={false}
              />

              {/* Icon container */}
              <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-7 h-7 text-white" />
              </div>

              {/* Text content */}
              <div className="flex flex-col items-start flex-1 relative z-10">
                <span className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </span>
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors break-all">
                  {item.description}
                </span>
              </div>

              {/* Arrow icon */}
              <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10" />

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={false}
                whileHover={{
                  boxShadow: `0 0 30px ${index === 0 ? "rgba(239, 68, 68, 0.3)" : index === 1 ? "rgba(100, 116, 139, 0.3)" : "rgba(6, 182, 212, 0.3)"}`,
                }}
              />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Bottom Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg rounded-3xl border border-slate-700/50 w-full max-w-md relative overflow-hidden group"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative z-10">
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-bold text-xl">
              Open to Opportunities
            </span>
            <Sparkles className="w-5 h-5 text-emerald-400" />
          </motion.div>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Always excited to collaborate on{" "}
            <span className="text-cyan-300 font-semibold">innovative projects</span> and explore new{" "}
            <span className="text-emerald-300 font-semibold">opportunities</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
