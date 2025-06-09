import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Skills from '../components/Skills'
import ContactForm from '../components/Contact'

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
        <section id="contact" className="py-24 text-center px-6 bg-[#0a0a15] text-white">
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I'm open to new opportunities, collaborations, or just a friendly chat.
            Feel free to reach out!
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </section>
        {/*
        <section id="chat" className="py-24 px-6">
          <Chatbot />
        </section>
        */}
      </div>
    </>
  )
}
