'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const workItems = [
  {
    title: 'Software Engineer',
    company: 'Accenture',
    date: '2021 – 2022',
    description: 'Developed software, automated workflows, improved system performance.',
    color: 'from-purple-500 to-pink-500',
    align: 'left',
    tagColor: 'bg-purple-600',
  },
  {
    title: 'Graduate Assistant',
    company: 'SIUE',
    date: '2022 – 2023',
    description: 'Mentored students in Data Structures and Computer Architecture.',
    color: 'from-indigo-500 to-cyan-500',
    align: 'right',
    tagColor: 'bg-indigo-600',
  },
  {
    title: 'Mentor',
    company: 'Code.org',
    date: '2023 – Present',
    description: 'Taught responsive UI basics and game design to middle school students.',
    color: 'from-blue-500 to-purple-500',
    align: 'left',
    tagColor: 'bg-blue-600',
  },
]

export default function Work() {
  return (
    <section id="work" className="w-full py-24 px-6 bg-[#0a0a15]">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line with gradient */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 transform -translate-x-1/2 z-0" />

        <div className="space-y-20">
          {workItems.map((item, index) => {
            const isLeft = item.align === 'left'
            return (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                } items-center w-full`}
              >
              
                {/* Left side content */}
                <div className="w-full md:w-1/2 px-4">
                  {isLeft && (
                    <div className="text-right md:pr-8">
                      <div
                        className={`inline-block px-4 py-1 mb-2 rounded-md text-sm font-medium text-white ${item.tagColor}`}
                      >
                        {item.date}
                      </div>
                      <h3 className="text-xl text-white font-bold">
                        {item.title}{' '}
                        <span className="text-purple-400 font-normal">@ {item.company}</span>
                      </h3>
                      <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Center icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`p-2 rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_12px_4px_rgba(164,86,255,0.4)]`}
                  >
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>

                {/* Right side content */}
                <div className="w-full md:w-1/2 px-4">
                  {!isLeft && (
                    <div className="md:pl-8 text-left">
                      <div
                        className={`inline-block px-4 py-1 mb-2 rounded-md text-sm font-medium text-white ${item.tagColor}`}
                      >
                        {item.date}
                      </div>
                      <h3 className="text-xl text-white font-bold">
                        {item.title}{' '}
                        <span className="text-purple-400 font-normal">@ {item.company}</span>
                      </h3>
                      <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
