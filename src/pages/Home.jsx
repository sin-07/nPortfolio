import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import me from "../assets/me.jpg";

export default function Home() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const texts = ["ANIKET SINGH", "A FULL STACK DEVELOPER", "A COMPUTER SCIENCE ENGINEER"];
  const [index, setIndex] = useState(0);

  // Cycle through text every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-black px-6"
    >
      {/* Image Container */}
      <div className="mt-[6rem] flex justify-center">
        <img
          src={me}
          alt="profile"
          className="w-[200px] md:w-[250px] lg:w-[300px] rounded-[1.5rem] border border-white cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setIsFullScreen(true)}
        />
      </div>

      {/* Full-Screen Image View */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[1000]"
            onClick={() => setIsFullScreen(false)}
          >
            <motion.img
              src={me}
              alt="Full Screen Profile"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth Typewriter Text */}
      <h3 className="font-extrabold text-4xl text-white my-[2rem] text-center">
        Hi there! I'm{" "}
        <span className="text-[#3be1ac]">
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h3>
    </motion.div>
  );
}
