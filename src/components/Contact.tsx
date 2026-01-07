import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Send, Star } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Gmail",
      icon: Mail,
      link: "mailto:aniket.singh07vs@gmail.com",
      description: "aniket.singh07vs@gmail.com",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
      shadowColor: "shadow-red-500/50",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/sin-07",
      description: "github.com/sin-07",
      gradient: "from-slate-600 via-slate-700 to-slate-900",
      iconBg: "bg-gradient-to-br from-slate-600 to-slate-900",
      shadowColor: "shadow-slate-500/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aniket-singhh/",
      description: "Connect on LinkedIn",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/50",
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
      {/* Elegant animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.3, 1, 1.3],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Elegant Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mb-16 relative z-10"
      >
        {/* Decorative stars */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [-5, 5, -5],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
        >
          <Sparkles className="w-8 h-8 text-cyan-400/50" />
        </motion.div>

        <motion.div
          className="inline-flex items-center gap-4 mb-6 relative"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent relative">
            Let's Connect
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 opacity-20 blur-2xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </h2>
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -15, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Sparkles className="w-10 h-10 text-emerald-400" />
          </motion.div>
        </motion.div>

        {/* Animated underline */}
        <motion.div
          className="h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 mx-auto rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: 200 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/50 rounded-full"
            animate={{
              x: [-200, 200],
            }}
            transition={{3, duration: 0.8 }}
        className="text-lg sm:text-xl text-slate-300 mb-16 max-w-3xl relative z-10 leading-relaxed px-4"
      >
        Have a project in mind or just want to chat?{" "}
        <motion.span
          className="text-cyan-400 font-bold inline-block"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          I'd love to hear
        </motion.span>{" "}
        from you. Let's build something{" "}
        <motion.span
          className="text-emerald-400 font-bold inline-block"
          whileHover={{ scale: 1.1, rotate: -2 }}
        >
          amazing together
        </motion.span>
        
        </motion.div     y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Star className="w-4 h-4 text-cyan-400/30" />
          </motion.div>
        ))}
      </div>

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
        whElegant Social Links Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-6 w-full max-w-2xl relative z-10"
      >
        {socialLinks.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
                initial={false}
              />

              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative block bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden group-hover:border-slate-600/80 transition-all duration-500"
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                  animate={{
                    translateX: ["100%", "100%", "-100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />

                {/* Top accent line */}
                <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />

                <div className="flex items-center gap-6 p-6 sm:p-8 relative">
                  {/* Icon container with elegant design */}
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Icon glow */}
                    <motion.div
                      className={`absolute inset-0 ${item.iconBg} rounded-2xl blur-xl opacity-50`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className={`relative ${item.iconBg} p-5 rounded-2xl shadow-lg ${item.shadowColor}`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className="font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.h3>
                    <p className="text-slate-400 text-sm sm:text-base group-hover:text-slate-300 transition-colors break-all">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow with send icon animation */}
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Send className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </div>

                {/* Corner decorations */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.a>
            </motion.divw icon */}
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
