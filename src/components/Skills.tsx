'use client'

import { motion } from 'framer-motion'

const skills = {
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  Backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'MongoDB'],
  DevOps: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'Linux'],
  AI: ['PyTorch', 'TensorFlow', 'OpenAI API', 'RAG', 'HuggingFace'],
}

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 bg-[#0a0a15] relative z-0">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full z-[-1]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 z-10 relative">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-md rounded-xl p-6 hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-xl text-white font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, j) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 text-purple-200 hover:bg-purple-500/20 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
