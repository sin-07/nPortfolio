import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Image Container */}
      <motion.div
        className="mt-16 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Simple glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-2xl opacity-20" />
        
        <motion.img
          src="/AniketSingh.jpg"
          alt="Aniket Singh - Full Stack Developer"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] rounded-3xl border-4 border-cyan-400/50 cursor-pointer shadow-2xl shadow-cyan-500/30 relative z-10 hover:border-cyan-400 transition-colors"
          onClick={() => setIsFullScreen(true)}
        />
      </motion.div>

      {/* Full-Screen Image View */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[1000] backdrop-blur-sm"
            onClick={() => setIsFullScreen(false)}
          >
            <motion.img
              src="/AniketSingh.jpg"
              alt="Full Screen Profile"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border-4 border-cyan-400"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text Section */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-cyan-400" />
          <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Hi there! I'm
          </h3>
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </div>

        {/* Animated Text */}
        <div className="flex justify-center w-full px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={texts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent text-center"
              style={{ 
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
                lineHeight: '1.2'
              }}
            >
              {texts[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto"
        >
          <span className="text-emerald-400 font-semibold">Crafting elegant solutions</span> to complex problems
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full mx-auto flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
