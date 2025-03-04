import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center mt-6 justify-center px-6 bg-black text-white"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl font-extrabold text-[#3be1ac] mb-6"
      >
        About Me
      </motion.h1>

      {/* Content Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl bg-[#1a1a1a] bg-opacity-80 p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        <div className="flex flex-col gap-6 text-lg text-gray-300">
          <p>
            A dedicated and passionate creator with a love for turning ideas into reality. Whether it's 
            crafting compelling narratives, designing captivating visuals, or solving complex problems, I 
            thrive on the challenges that come with bringing ideas to life.
          </p>

          <p>
            Currently immersed in the captivating world of Computer Science{" "}
            <span className="text-[#3be1ac] font-semibold">Engineering</span> as a college student. 
            My educational roots trace back to{" "}
            <span className="text-[#3be1ac] font-semibold">National High School</span>, where I laid 
            the foundation for my academic journey.
          </p>

          <p>
            Proficient in <span className="text-[#3be1ac] font-semibold">web development</span>, I've honed 
            my skills in crafting dynamic and user-friendly websites that seamlessly blend form and function. 
            Beyond the code, I immerse myself in the realm of{" "}
            <span className="text-[#3be1ac] font-semibold">UI designing</span>, ensuring that each digital 
            experience is not just efficient but aesthetically pleasing.
          </p>

          <p>
            In addition to my academic pursuits, I've embraced the challenges of{" "}
            <span className="text-[#3be1ac] font-semibold">Data Structures and Algorithms</span>, 
            recognizing their fundamental role in building robust and efficient software.
          </p>
        </div>
      </motion.div>

      {/* Button Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8"
      >
        <a
          href="/projects"
          className="px-6 py-3 rounded-full text-lg font-semibold bg-[#3be1ac] text-black 
                     hover:bg-[#2dc99d] transition duration-300 ease-in-out shadow-lg"
        >
          Explore My Work
        </a>
      </motion.div>
    </motion.div>
  );
}
