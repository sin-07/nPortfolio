
import React, { useState, useEffect } from "react";
import me from "./assets/me.jpg";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { name: "Personal Portfolio", description: "ReactJS-based project for personal data management.", link: "https://github.com/sin-07/myPortfolio" },
  { name: "Library Management System", description: "MERN stack project for managing library operations.", link: "https://github.com/sin-07/Password-Gen" },
  { name: "Educational Website", description: "Interactive learning platform using MERN stack.", link: "https://www.raventutorials.in/" }
];

const socialLinks = [
  {
    name: "Gmail",
    icon: "ri-mail-line",
    link: "mailto:aniket.singh07vs@gmail.com",
  },
  {
    name: "GitHub",
    icon: "ri-github-line",
    link: "https://github.com/aniketsinghh",
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-fill",
    link: "https://www.linkedin.com/in/aniket-singhh/",
  },
];

const App = () => {
  // Home section logic
  const [isFullScreen, setIsFullScreen] = useState(false);
  const texts = [
    "ANIKET SINGH",
    "A FULL STACK DEVELOPER",
    "A COMPUTER SCIENCE ENGINEER",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen">
  {/* Navbar removed as per user request */}
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-black px-6 pb-4">
        <div className="mt-8 flex justify-center">
          <img
            src={me}
            alt="profile"
            className="w-[180px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300px] rounded-[1.5rem] border border-white cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => setIsFullScreen(true)}
          />
        </div>
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
                alt="profile-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-[90vw] max-w-2xl rounded-2xl border-4 border-white shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
  <div className="mt-4 text-center">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-2"
          >
            {texts[index]}
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
  <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white pb-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-extrabold text-[#3be1ac] mb-4"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl bg-[#1a1a1a] bg-opacity-80 p-6 rounded-2xl shadow-lg border border-gray-700"
        >
          <div className="flex flex-col gap-4 text-lg text-gray-300">
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
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white pb-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 w-full"
        >
          <h1 className="text-3xl font-bold text-center">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3be1ac] mt-2 block"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
  <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white pb-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <h2 className="text-white text-2xl pt-2 font-semibold">
            You are here for{"  "}
            <span className="text-[#3be1ac]">. . . .</span>
          </h2>
          <p className="py-4 text-white">
            I think you are here to get to know me. Best way is to start with my work.
          </p>
          <ul className="flex justify-center mt-8 gap-6">
            {socialLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1a1a1a] border border-gray-600 rounded-lg px-6 py-3 text-white shadow-md cursor-pointer hover:bg-[#3be1ac] hover:text-black transition-all duration-500 ease-in-out"
              >
                <a href={item.link} className="flex items-center gap-2">
                  <i className={`${item.icon} text-xl`}></i>
                  <span className="font-semibold">{item.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
