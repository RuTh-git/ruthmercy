'use client'

import { useEffect, useState } from 'react'

const sections = ['home', 'about', 'projects', 'work', 'skills', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      let current = 'home'
  
      for (const id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            current = id
            break
          }
        }
      }
  
      setActive(current)
    }
  
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Trigger once on load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
    

  return (
    <nav className="fixed top-5 inset-x-0 z-50 flex justify-center">
      <div className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-full shadow-sm flex gap-6 text-sm font-medium text-white">
        {sections.map((id) => (
          <a
          key={id}
          href={`#${id}`}
          className={`transition ${
            active === id
              ? 'text-purple-400 font-semibold'
              : 'hover:text-purple-300'
          }`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
        
        ))}
      </div>
    </nav>
  )
}
