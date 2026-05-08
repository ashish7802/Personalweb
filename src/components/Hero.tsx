import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Github, Linkedin } from 'lucide-react'
import { ThreeScene } from './ThreeScene'
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeScene />

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-spider-red/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-spider-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spider-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-spider-blue"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
              Available for work
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spider-red to-spider-blue">
              Ashish Yadav
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            Full Stack Developer & AI Builder
          </p>

          <div className="flex items-center gap-2 text-gray-500 mb-10">
            <MapPin className="w-5 h-5" />
            <span>Lucknow, UP, India</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-spider-red text-white font-medium hover:bg-spider-darkred transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-spider-blue/50 transition-all"
            >
              Contact Me
            </a>
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://github.com/ashish7802"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-spider-blue transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://in.linkedin.com/in/ashish-yadav-ab206124a"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-spider-blue transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            {/* Hexagon/Web styling around avatar */}
            <div className="absolute inset-0 rounded-full border-2 border-spider-red/30 border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-spider-blue/40 animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-dark-800 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              {/* Using a cool Spider-Man themed Unsplash image */}
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Spider-Man Avatar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent mix-blend-overlay" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
