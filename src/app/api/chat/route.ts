import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a friendly assistant chatbot that answers questions about Mercy. Respond casually and helpfully.'
      },
      ...messages
    ]
  })

  const reply = completion.choices[0]?.message?.content || 'Sorry, I didn’t get that.'
  return NextResponse.json({ reply })
}
