import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code, Palette, Zap, Cpu } from "lucide-react";

export default function Home() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const texts = [
    "ANIKET SINGH",
    "FULL STACK DEVELOPER",
    "COMPUTER SCIENCE ENGINEER",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-10 hidden lg:block">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <Code className="w-16 h-16 text-cyan-400/20" />
        </motion.div>
      </div>
      <div className="absolute bottom-32 right-10 hidden lg:block">
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <Palette className="w-16 h-16 text-emerald-400/20" />
        </motion.div>
      </div>

      {/* Professional Image Container */}
      <motion.div
        className="mt-16 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Animated decorative circles */}
        <motion.div
          className="absolute -inset-8 rounded-full border-2 border-cyan-400/20"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute -inset-12 rounded-full border-2 border-emerald-400/20"
          animate={{
            rotate: -360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Corner decorative elements */}
        <motion.div
          className="absolute -top-4 -left-4 w-8 h-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-8 h-8 text-cyan-400" />
        </motion.div>
        <motion.div
          className="absolute -bottom-4 -right-4 w-8 h-8"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Cpu className="w-8 h-8 text-emerald-400" />
        </motion.div>
        
        {/* Glowing gradient background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Image with professional frame */}
        <motion.div
          className="relative"
          animate={floatingAnimation}
        >
          {/* Gradient border frame */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-3xl opacity-75 blur-sm" />
          
          <motion.img
            src="/AniketSingh.jpg"
            alt="Aniket Singh - Full Stack Developer"
            whileHover={{
              scale: 1.15,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[280px] xl:w-[320px] rounded-3xl border-4 border-white cursor-pointer shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/90 hover:border-cyan-300 relative z-10 transition-all duration-500"
            onClick={() => setIsFullScreen(true)}
          />
          
          {/* Sparkle effects on corners */}
          <motion.div
            className="absolute -top-2 -right-2 text-yellow-300"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2 text-yellow-300"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Full-Screen Image View */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[1000] backdrop-blur-md"
            onClick={() => setIsFullScreen(false)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 rounded-3xl blur-2xl opacity-50" />
              
              <motion.img
                src="/AniketSingh.jpg"
                alt="Full Screen Profile"
                className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl cursor-pointer border-4 border-gradient-to-r from-cyan-400 to-emerald-400 relative z-10"
                whileHover={{ scale: 1.02 }}
              />
              
              {/* Close hint */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Click anywhere to close
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text Section with enhanced animations */}
      <motion.div
        className="text-center mt-10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Sparkles className="w-6 h-6 text-cyan-400" />
          <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Hi there! I'm
          </h3>
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </motion.div>

        {/* Animated Text with gradient */}
        <div className="flex justify-center">
          <div className="relative inline-block w-full min-w-[300px] md:min-w-[500px] lg:min-w-[700px] h-[60px] md:h-[70px] text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="absolute left-0 right-0 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-emerald-400 font-semibold">Crafting elegant solutions</span> to complex problems with{" "}
          <span className="text-cyan-400 font-semibold">passion</span> and{" "}
          <span className="text-emerald-400 font-semibold">precision</span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full mx-auto flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
