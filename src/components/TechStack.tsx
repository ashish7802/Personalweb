import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { Layout, Server, Database, Wrench, Bot, Link2 } from 'lucide-react'
const categories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'text-blue-400',
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-green-400',
    skills: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-yellow-400',
    skills: ['MongoDB', 'SQLite', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'text-orange-400',
    skills: ['Git', 'GitHub', 'CLI tools', 'npm', 'Playwright'],
  },
  {
    title: 'AI & Automation',
    icon: Bot,
    color: 'text-spider-red',
    skills: [
      'AI APIs',
      'Prompt Engineering',
      'Web Scraping',
      'Automation scripts',
    ],
  },
  {
    title: 'Other APIs',
    icon: Link2,
    color: 'text-purple-400',
    skills: ['Google Maps API', 'Google Sheets API', 'Slack API'],
  },
]
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}
export function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 relative bg-dark-800/50 border-y border-white/5 bg-web-pattern"
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
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold mb-4">
            Technical <span className="text-spider-red">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-spider-red to-spider-blue rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-lg bg-white/5 border border-white/10 ${category.color} group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-dark-900/80 text-gray-300 border border-white/5 hover:border-spider-blue/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
