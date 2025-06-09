'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="w-full pt-[6rem] pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* 👤 Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image
            src="/profile.png" // 👈 replace with your image file in /public
            alt="Profile picture of Mercy"
            width={250}
            height={250}
            className="rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        {/* 📝 Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-8 text-gray-300">
            Hey, I&apos;m <span className="font-semibold text-white">Mercy</span> — a software engineer passionate about building clean,
            scalable web apps and AI-powered tools. I’ve worked at
            <span className="font-semibold text-white"> Accenture</span> as a Software Engineer and at
            <span className="font-semibold text-white"> SIUE</span> as a Teaching Assistant, helping others grow in data structures,
            algorithms, and practical development skills.
          </p>
          <p className="text-lg md:text-xl leading-8 text-gray-300 mt-6">
            I enjoy solving real-world problems, writing clean code, and continuously improving. Outside of tech, I love
            <span className="text-white font-medium"> cooking</span>,
            <span className="text-white font-medium"> walking</span>, and exploring
            <span className="text-white font-medium"> music</span>. Right now, I’m focused on launching side projects,
            prepping for system design interviews, and leveling up my engineering skills.
          </p>

        </motion.div>
      </div>
    </section>
  )
}
