'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Stocks for Noobs',
    description:
      'A simulation-based learning platform for stock market beginners. Features company search, visual stock data, and clean UI for learning.',
    tech: ['Next.js', 'Alpha Vantage API', 'Tailwind CSS'],
    link: 'https://your-link.com',
    image: '/stocks.jpeg', // Place in /public folder
  },
  {
    title: 'AI Portfolio Chatbot',
    description:
      'An AI assistant built into my portfolio that responds to questions about my experience and projects using OpenAI.',
    tech: ['Next.js', 'OpenAI API', 'Framer Motion'],
    link: 'https://your-chatbot-link.com',
    image: '/chatbot-bg.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            >
            Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c0f1a] to-[#151f3a] border border-white/10 p-6 shadow-xl group hover:scale-[1.01] transition"
            >
              {/* Background image overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-25 transition duration-500"
                style={{ backgroundImage: `url(${proj.image})` }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{proj.title}</h3>
                  <p className="text-gray-300 mt-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/10 text-purple-200 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={proj.link}
                  target="_blank"
                  className="self-start mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-[1.03] transition"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
