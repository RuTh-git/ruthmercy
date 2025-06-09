'use client'

import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

type Role = 'user' | 'assistant'

type Message = {
  role: Role
  content: string
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: input }
    ]

    setMessages(newMessages)
    setInput('')

    try {
        const res = await fetch("http://localhost:8000/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
          });
      const data = await res.json();
      const assistantReply: Message = {
        role: 'assistant',
        content: data.reply
      }

      setMessages(prev => [...prev, assistantReply])
    } catch (error) {
      console.error('Error fetching response:', error)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-[#0a0a15] text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ask Me Anything 🤖</h2>

      <div className="space-y-3 max-h-[400px] overflow-y-auto border p-4 rounded-lg bg-[#0c0c1b]">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`text-sm p-2 rounded-md ${
              m.role === 'user'
                ? 'bg-purple-800 text-white self-end'
                : 'bg-gray-800 text-gray-100'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center mt-4 gap-2">
        <input
          className="flex-1 p-2 rounded bg-[#1a1a2a] text-white focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about my work, skills..."
        />
        <button
          type="submit"
          className="bg-purple-600 p-2 rounded hover:bg-purple-700 transition"
        >
          <PaperAirplaneIcon className="h-5 w-5 text-white" />
        </button>
      </form>
    </div>
  )
}
