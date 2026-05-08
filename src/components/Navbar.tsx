import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
const navLinks = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Tech Stack',
    href: '#tech',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))
      let current = ''
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-spider-red/10 flex items-center justify-center border border-spider-red/20 group-hover:border-spider-red/50 transition-colors">
            <Code2 className="w-5 h-5 text-spider-red" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Ashish<span className="text-spider-red">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-spider-blue rounded-full"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-spider-blue/50 transition-all"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  )
}
