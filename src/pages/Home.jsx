import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import me from "../assets/me.jpg";

export default function Home() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const texts = [
    "ANIKET SINGH",
    "A FULL STACK DEVELOPER",
    "A COMPUTER SCIENCE ENGINEER",
  ];
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
      <div className="mt-16 flex justify-center">
        <img
          src={me}
          alt="profile"
          className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300px] rounded-[1.5rem] border border-white cursor-pointer transition-transform duration-300 hover:scale-110"
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

      {/* Text Section */}
      <div className="text-center mt-8">
        <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
          Hi there! I'm
        </h3>

        {/* Typewriter Effect Below "Hi there! I'm" */}
        <div className="flex justify-center">
          <div className="text-[#3be1ac] font-extrabold text-2xl sm:text-3xl md:text-4xl relative inline-block w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[40px] md:h-[48px] mt-2 text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 right-0 w-full"
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
