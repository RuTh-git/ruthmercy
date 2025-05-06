'use client'

import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiMongodb,
  SiGit, SiDocker, SiGithubactions, SiVercel, SiLinux,
  SiPytorch, SiTensorflow, SiOpenai, SiHuggingface
} from 'react-icons/si'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const skillGroups = [
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
  },
  {
    category: 'ML / AI',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'OpenAI API', icon: <SiOpenai /> },
      { name: 'HuggingFace', icon: <SiHuggingface /> },
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Linux', icon: <SiLinux /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 bg-[#0a0a15]">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{group.category}</h3>
            <div className="flex flex-wrap gap-6">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="relative group cursor-pointer">
                  <motion.div
                    data-tooltip-id={skill.name}
                    data-tooltip-content={skill.name}
                    className="text-white text-3xl md:text-4xl p-4 rounded-full border border-white/10 bg-black/20 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <Tooltip id={skill.name} place="top" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
