import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Helper for smooth scroll
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md p-4 z-[1000] h-16">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); scrollToSection("home"); }} className="text-white text-2xl font-bold">Aniket</a>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex space-x-6"
        >
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => { e.preventDefault(); scrollToSection(link.id); }}
              className="hover:text-[#3be1ac] transition text-white"
            >
              {link.label}
            </a>
          ))}
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-70 z-[999]"
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar */}
              <motion.aside
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sidebarVariants}
                className="fixed top-0 left-0 h-full w-64 bg-[#181818] shadow-lg z-[1000] flex flex-col p-8"
              >
                <button className="self-end mb-8 text-white" onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map(link => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={e => { e.preventDefault(); scrollToSection(link.id); setIsOpen(false); }}
                      className="hover:text-[#3be1ac] transition text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
