import React from 'react'
import { Toaster } from 'sonner'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-spider-red/30 selection:text-white">
      <Toaster theme="dark" position="bottom-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
