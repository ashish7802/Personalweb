import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { toast } from 'sonner'
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Message sent successfully!', {
        description: "I'll get back to you as soon as possible.",
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }
  return (
    <section
      id="contact"
      className="py-24 relative bg-dark-800/50 border-t border-white/5"
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
            Get In <span className="text-spider-red">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-spider-red to-spider-blue rounded-full mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi,
            my inbox is always open. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
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
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/5">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:ashishyadav4818@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-spider-red transition-colors group"
                >
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-spider-red/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>ashishyadav4818@gmail.com</span>
                </a>

                <a
                  href="tel:+919794918800"
                  className="flex items-center gap-4 text-gray-400 hover:text-spider-blue transition-colors group"
                >
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-spider-blue/50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91 9794918800</span>
                </a>

                <div className="flex items-center gap-4 text-gray-400 group">
                  <div className="p-3 rounded-full bg-white/5 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Lucknow, UP, India</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                  Social Profiles
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ashish7802"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/ashish-yadav-ab206124a"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
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
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-2xl border border-white/5 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-spider-blue focus:ring-1 focus:ring-spider-blue transition-all"
                    placeholder="Peter Parker"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-spider-blue focus:ring-1 focus:ring-spider-blue transition-all"
                    placeholder="peter@dailybugle.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-spider-blue focus:ring-1 focus:ring-spider-blue transition-all resize-none"
                  placeholder="I have a great project idea..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-spider-red text-white font-medium hover:bg-spider-darkred transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
