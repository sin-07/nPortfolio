import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50 h-16">

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">Aniket</Link>

        {/* Desktop Links */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.4 }}
          className="hidden md:flex space-x-6 text-white"
        >
          <Link to="/" className="hover:text-[#3be1ac] transition">Home</Link>
          <Link to="/about" className="hover:text-[#3be1ac] transition">About</Link>
          <Link to="/projects" className="hover:text-[#3be1ac] transition">Projects</Link>
          <Link to="/contact" className="hover:text-[#3be1ac] transition">Contact</Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>

        {/* Sidebar for Mobile */}
        {isOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg p-5 flex flex-col space-y-6"
          >
            {/* Close Button */}
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            {/* Sidebar Links */}
            <Link to="/" className="text-lg hover:text-[#3be1ac]" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-lg hover:text-[#3be1ac]" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" className="text-lg hover:text-[#3be1ac]" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" className="text-lg hover:text-[#3be1ac]" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
