// src/app/api/rsvp/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, attending, partner, drinks } = body

  if (!name || !attending) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatIds = (process.env.TELEGRAM_CHAT_ID || '')
    .split(',')
    .map(id => id.trim())
    .filter(Boolean)

  const attendingText = attending === 'yes' ? '✅ Придёт' : '❌ Не сможет'
  const drinksText = drinks?.length ? drinks.join(', ') : 'не указано'
  const partnerText = partner ? `\n👫 Спутник/спутница: ${partner}` : ''

  const message = [
    '🎊 *Новая анкета гостя!*',
    '',
    `👤 *Имя:* ${name}`,
    `${attendingText}`,
    partnerText,
    `🥂 *Напитки:* ${drinksText}`,
  ].join('\n')

  await Promise.all(
    chatIds.map(chatId =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      })
    )
  )

  return NextResponse.json({ ok: true })
}
