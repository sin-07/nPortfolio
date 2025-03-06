import { motion } from "framer-motion";


export default function Projects() {
    const projects = [
      { name: "Personal Portfolio", description: "ReactJS-based project for personal data management.", link: "https://github.com/sin-07/myPortfolio" },
      { name: "Library Management System", description: "MERN stack project for managing library operations.", link: "https://github.com/sin-07/Password-Gen" },
      { name: "Educational Website", description: "Interactive learning platform using MERN stack.", link: "https://www.raventutorials.in/" }
    ];
  
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-[6rem]"
      >
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
    );
  }