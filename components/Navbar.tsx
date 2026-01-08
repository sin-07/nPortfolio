'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Mail, Code2 } from "lucide-react"

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const navLinks = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Projects", id: "projects", icon: Code2 },
    { label: "Contact", id: "contact", icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg shadow-lg border-b border-slate-800/50 p-4 z-[1000] h-16"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("home")
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-2xl font-bold relative group"
        >
          Aniket
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
          {/* Subtle glow on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-all duration-300 relative px-3 py-2"
              >
                <IconComponent className="w-4 h-4" />
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100"
                  layoutId="navUnderline"
                />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-cyan-400 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </motion.button>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[998]"
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar */}
              <motion.aside
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sidebarVariants}
                className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl z-[999] flex flex-col p-8 border-r border-slate-700/50"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="self-end mb-8 text-cyan-400 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </motion.button>

                {/* Logo in Sidebar */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-3xl font-bold">
                    Aniket Singh
                  </span>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-2 rounded-full" />
                </motion.div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon
                    return (
                      <motion.a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(link.id)
                          setIsOpen(false)
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1), type: "spring", stiffness: 120 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-all duration-300 p-4 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-cyan-400/30 relative overflow-hidden"
                      >
                        {/* Animated background on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all relative z-10">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-medium relative z-10">{link.label}</span>
                      </motion.a>
                    )
                  })}
                </nav>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto pt-8 border-t border-slate-700/50"
                >
                  <p className="text-slate-500 text-sm text-center">
                    © 2026 Aniket Singh
                  </p>
                </motion.div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
