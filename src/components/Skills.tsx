'use client'

import { motion } from 'framer-motion'

const skills = {
    Frontend: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-original' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    ],
    Backend: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'FastAPI', icon: 'devicon-python-plain' }, // no FastAPI icon
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ],
    DevOps: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'GitHub Actions', icon: 'devicon-github-original' },
      { name: 'Vercel', icon: 'devicon-vercel-original' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
    ],
    AI: [
      { name: 'PyTorch', icon: 'devicon-pytorch-original' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
      { name: 'OpenAI API', icon: 'devicon-python-plain' },
      { name: 'RAG', icon: 'devicon-python-plain' },
      { name: 'HuggingFace', icon: 'devicon-python-plain' },
    ],
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
            {items.map(({ name, icon }, j) => (
            <motion.span
                key={name}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-purple-200 hover:bg-purple-500/20 hover:text-white flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <i className={`${icon} text-lg`} />
                {name}
            </motion.span>
            ))}

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
