import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
export function Experience() {
  const roles = [
    'Data Research Analyst',
    'Virtual Assistant',
    'Data Enrichment & Data Sourcing',
    'Email & Phone Validation',
    'Data Management',
  ]
  return (
    <section id="experience" className="py-24 relative">
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
            Work <span className="text-spider-blue">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-spider-blue to-spider-red rounded-full" />
        </motion.div>

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
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative pl-8 md:pl-0"
        >
          {/* Timeline Line for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden" />

          <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-spider-blue/10 rounded-full filter blur-[80px] group-hover:bg-spider-blue/20 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-spider-blue" />
                    TaskMinions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((role, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 bg-dark-900/50 px-4 py-2 rounded-full border border-white/5 w-fit">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Present Experience</span>
                </div>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Worked extensively on data research, lead sourcing, contact
                  validation, and data enrichment for various clients. My role
                  involved ensuring high data quality and providing
                  comprehensive virtual assistant support.
                </p>
                <ul className="space-y-3 mt-6">
                  {[
                    'Delivered clean, verified datasets for client campaigns.',
                    'Built and managed email/phone validation workflows.',
                    'Utilized Python, automation scripts, and manual research tools to streamline data sourcing.',
                    'Provided dedicated Virtual Assistant support to optimize daily operations.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-spider-red shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
