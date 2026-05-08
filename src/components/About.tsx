import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code, Cpu, Star } from 'lucide-react'
export function About() {
  return (
    <section
      id="about"
      className="py-24 relative bg-dark-800/50 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">
            About <span className="text-spider-red">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-spider-red to-spider-blue rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I'm a passionate{' '}
              <strong className="text-white">
                Full Stack Developer & AI Builder
              </strong>{' '}
              based in Lucknow, India. I specialize in bridging the gap between
              robust web applications and cutting-edge AI automation.
            </p>
            <p>
              With a strong foundation in React, Node.js, and Python, I build
              scalable solutions that solve real-world problems. Whether it's
              crafting a seamless frontend experience, architecting a complex
              backend, or integrating AI to automate workflows, I thrive on
              building tools that empower users.
            </p>
            <p>
              My philosophy is simple: write clean code, automate the boring
              stuff, and always keep learning. Just like a certain web-slinger,
              I believe that with great technical power comes the responsibility
              to build meaningful products.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Terminal,
                label: 'Full Stack',
                desc: 'React & Node.js',
                color: 'text-spider-blue',
              },
              {
                icon: Cpu,
                label: 'AI Builder',
                desc: 'Prompt Eng & APIs',
                color: 'text-spider-red',
              },
              {
                icon: Code,
                label: 'Projects',
                desc: '6+ Major Apps',
                color: 'text-purple-500',
              },
              {
                icon: Star,
                label: 'Open Source',
                desc: '350+ GitHub Stars',
                color: 'text-yellow-500',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group"
              >
                <stat.icon
                  className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-white font-display font-semibold text-xl mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
