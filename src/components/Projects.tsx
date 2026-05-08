import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
const projectsData = [
  {
    title: 'dev-launchpad',
    description:
      'Open-source developer starter toolkit: AI prompts, CLI scripts, templates & checklists.',
    tags: ['Open Source', 'CLI', 'Templates'],
    link: 'https://github.com/ashish7802/dev-launchpad',
    stars: '350+',
    color: 'from-spider-red/20 to-transparent',
  },
  {
    title: 'llm-engineer-toolkit',
    description:
      'CLI toolkit for engineers with code templates, FullStack references, and productivity tools.',
    tags: ['CLI', 'Productivity', 'FullStack'],
    link: 'https://github.com/ashish7802/llm-engineer-toolkit',
    color: 'from-spider-blue/20 to-transparent',
  },
  {
    title: 'maps-lead-scraper',
    description:
      'Google Maps scraper to find local businesses without paid APIs. Exports CSV/JSON.',
    tags: ['Python', 'Playwright', 'Scraping'],
    link: 'https://github.com/ashish7802/maps-lead-scraper',
    color: 'from-green-500/20 to-transparent',
  },
  {
    title: 'heist-master',
    description:
      'Massive terminal-based heist RPG game in Python — plan robberies, hire crew, evade police!',
    tags: ['Python', 'RPG', 'Terminal'],
    link: 'https://github.com/ashish7802/heist-master',
    color: 'from-purple-500/20 to-transparent',
  },
  {
    title: 'PyMart',
    description:
      'Full e-commerce app with cart, payments, and inventory management.',
    tags: ['React', 'Node.js', 'E-commerce'],
    link: 'https://github.com/ashish7802/pymart',
    color: 'from-orange-500/20 to-transparent',
  },
  {
    title: 'finance-tracker-ai',
    description: 'Personal finance tracker with AI-powered budget suggestions.',
    tags: ['Python', 'SQLite', 'AI'],
    link: 'https://github.com/ashish7802/finance-tracker-ai',
    color: 'from-teal-500/20 to-transparent',
  },
]
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full glass rounded-2xl p-6 border border-white/10 relative overflow-hidden group cursor-pointer"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            transform: 'translateZ(30px)',
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5 text-white group-hover:text-spider-blue transition-colors">
              <Github className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-3">
              {project.stars && (
                <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium bg-yellow-500/10 px-2 py-1 rounded-md border border-yellow-500/20">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {project.stars}
                </div>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-spider-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
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
            Featured <span className="text-spider-blue">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-spider-blue to-spider-red rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
