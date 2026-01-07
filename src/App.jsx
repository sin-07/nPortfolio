
import React, { useState, useEffect } from "react";
import me from "./assets/me.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "./hooks/useInView";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";

const projects = [
  { 
    name: "Personal Portfolio", 
    description: "ReactJS-based project for personal data management with modern UI/UX design.", 
    link: "https://github.com/sin-07/myPortfolio",
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"]
  },
  { 
    name: "Library Management System", 
    description: "Full-stack MERN application for managing library operations with real-time updates.", 
    link: "https://github.com/sin-07/Password-Gen",
    tags: ["MongoDB", "Express", "React", "Node.js"]
  },
  { 
    name: "Educational Website", 
    description: "Interactive learning platform with video tutorials and progress tracking.", 
    link: "https://www.raventutorials.in/",
    tags: ["MERN Stack", "Video Streaming", "Authentication"]
  }
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
  const { colors } = useTheme();
  
  // Home section logic
  const [isFullScreen, setIsFullScreen] = useState(false);
  const texts = [
    "ANIKET SINGH",
    "A FULL STACK DEVELOPER",
    "A COMPUTER SCIENCE ENGINEER",
  ];
  const [index, setIndex] = useState(0);
  
  // Scroll animation refs
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.primary }}>
      <ThemeToggle />
  {/* Navbar removed as per user request */}
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 pb-4">
        <div className="mt-4 sm:mt-8 flex justify-center">
          <img
            src={me}
            alt="Aniket Singh - Full Stack Developer"
            loading="eager"
            className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300px] rounded-[1.5rem] border-2 border-white cursor-pointer transition-transform duration-300 hover:scale-110 shadow-xl"
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
        <div className="mt-3 sm:mt-4 text-center px-2">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight"
          >
            {texts[index]}
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-black text-white pb-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3be1ac] mb-4 text-center"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl bg-[#1a1a1a] bg-opacity-80 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-700"
        >
          <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg text-gray-300">
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
      <section ref={projectsRef} id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-black text-white pb-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 w-full max-w-6xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#3be1ac] mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-700 hover:border-[#3be1ac] transition-all duration-300 group"
              >
                <h2 className="text-xl font-semibold text-white group-hover:text-[#3be1ac] transition-colors duration-300 mb-3">
                  {project.name}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-[#3be1ac] bg-opacity-20 text-[#3be1ac] rounded-full border border-[#3be1ac] border-opacity-30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3be1ac] hover:text-white font-medium transition-colors duration-300 group-hover:underline"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-black text-white pb-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center text-center max-w-4xl w-full"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3be1ac] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Drop me a message and I'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Connect with me</h3>
              <div className="flex flex-col gap-4 w-full max-w-sm">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-[#1a1a1a] border border-gray-600 rounded-lg px-6 py-4 text-white shadow-md hover:bg-[#3be1ac] hover:text-black transition-all duration-300 flex items-center gap-3 group"
                  >
                    <i className={`${item.icon} text-xl group-hover:scale-110 transition-transform`}></i>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-sm opacity-75 group-hover:opacity-100">
                        {item.name === 'Gmail' ? 'aniket.singh07vs@gmail.com' : 
                         item.name === 'GitHub' ? 'github.com/aniketsinghh' : 
                         'LinkedIn Profile'}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
