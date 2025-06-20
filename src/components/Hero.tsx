'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050505] via-[#0a0a23] to-[#0f0f38] text-white px-6">
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Hi, I&apos;m <span className="text-purple-400">Mercy👋</span> 
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-300 mt-4"
        >
          MS in CS, SIUE · Ex-SWE @ Accenture
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg text-gray-300"
        >
          Software engineer crafting scalable, elegant, and AI-powered web experiences.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex justify-center gap-6"
            >
            <a
              href="mailto:ruthmercym7@gmail.com"
              className="hover:scale-110 transition"
            >
              <Image src="/gmail.svg" alt="Gmail" width={32} height={32} />
            </a>
            <a
                href="https://github.com/RuTh-git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
            >
                <Image src="/github.png" alt="GitHub" width={32} height={32} />
            </a>
            <a
                href="https://linkedin.com/in/ruthmercy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
            >
                <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
            </a>
        </motion.div>

      </div>
    </section>
  )
}
