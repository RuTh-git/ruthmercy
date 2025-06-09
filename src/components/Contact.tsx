'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com' // Email-JS service
import { useState } from 'react'

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = (data: any) => {
    setLoading(true)
    emailjs.send(
      'service_5uuy6a9',      // e.g. 'service_abcd1234'
      'template_13e3y7p',     // e.g. 'template_contact'
      data,
      '1kg75xuyVyhQny9KE'       // e.g. 'user_abcdXYZ'
    )
    .then(() => {
      alert('Message sent successfully!')
      reset()
    })
    .catch((error) => {
      console.error('Email send error:', error)
      alert('Failed to send message.')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-6 mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        type="text"
        placeholder="Full Name"
        {...register('name', { required: true })}
        className="w-full px-4 py-3 rounded-md bg-[#13131f] text-white border border-white/10 focus:outline-none focus:border-purple-500"
      />
      {errors.name && <p className="text-red-400 text-sm">Name is required.</p>}

      <input
        type="email"
        placeholder="Email Address"
        {...register('email', { required: true })}
        className="w-full px-4 py-3 rounded-md bg-[#13131f] text-white border border-white/10 focus:outline-none focus:border-purple-500"
      />
      {errors.email && <p className="text-red-400 text-sm">Email is required.</p>}

      <textarea
        placeholder="Your Message"
        {...register('message', { required: true })}
        rows={5}
        className="w-full px-4 py-3 rounded-md bg-[#13131f] text-white border border-white/10 focus:outline-none focus:border-purple-500"
      />
      {errors.message && <p className="text-red-400 text-sm">Message is required.</p>}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-md ${
          loading ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
        } text-white font-semibold transition`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  )
}
