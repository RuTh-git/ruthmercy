'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#0a0a23] via-[#0a0a1f] to-[#0b0e1c] text-white">
        <Hero />
        <About />
        <Projects />
        <Work />
        <Skills />
      </div>

      {/* Future: <Projects /> <Work /> etc. */}
    </>
  )
}
