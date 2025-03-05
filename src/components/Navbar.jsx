import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to determine active link
  const isActive = (path) => location.pathname === path ? "text-[#3be1ac]" : "text-white";

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md p-4 z-[1000] h-16">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">Aniket</Link>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex space-x-6"
        >
          <Link to="/" className={`hover:text-[#3be1ac] transition ${isActive("/")}`}>Home</Link>
          <Link to="/about" className={`hover:text-[#3be1ac] transition ${isActive("/about")}`}>About</Link>
          <Link to="/projects" className={`hover:text-[#3be1ac] transition ${isActive("/projects")}`}>Projects</Link>
          <Link to="/contact" className={`hover:text-[#3be1ac] transition ${isActive("/contact")}`}>Contact</Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>

        {/* Mobile Sidebar & Background */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Full-screen Black Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-90 z-[999]"
                onClick={() => setIsOpen(false)}
              ></motion.div>

              {/* Sidebar */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sidebarVariants}
                className="fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg p-5 flex flex-col space-y-6 z-[1000]"
              >
                {/* Close Button */}
                <button className="self-end" onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>

                {/* Sidebar Links */}
                <Link to="/" className={`text-lg hover:text-[#3be1ac] ${isActive("/")}`} onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className={`text-lg hover:text-[#3be1ac] ${isActive("/about")}`} onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/projects" className={`text-lg hover:text-[#3be1ac] ${isActive("/projects")}`} onClick={() => setIsOpen(false)}>Projects</Link>
                <Link to="/contact" className={`text-lg hover:text-[#3be1ac] ${isActive("/contact")}`} onClick={() => setIsOpen(false)}>Contact</Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
