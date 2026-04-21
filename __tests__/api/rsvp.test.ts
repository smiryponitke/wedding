// __tests__/api/rsvp.test.ts
import { POST } from '@/app/api/rsvp/route'
import { NextRequest } from 'next/server'

global.fetch = jest.fn()

describe('POST /api/rsvp', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.TELEGRAM_BOT_TOKEN = 'test-token'
    process.env.TELEGRAM_CHAT_ID = '12345'
    ;(global.fetch as jest.Mock).mockResolvedValue({ ok: true })
  })

  it('sends Telegram message with guest data', async () => {
    const body = {
      name: 'Иван Иванов',
      attending: 'yes',
      partner: 'Мария Иванова',
      drinks: ['Шампанское', 'Белое вино'],
    }
    const req = new NextRequest('http://localhost/api/rsvp', {
      method: 'POST',
      body: JSON.stringify(body),
    })

    const res = await POST(req)
    expect(res.status).toBe(200)

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.telegram.org/bottest-token/sendMessage',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('Иван Иванов'),
      })
    )
  })

  it('returns 400 if name is missing', async () => {
    const req = new NextRequest('http://localhost/api/rsvp', {
      method: 'POST',
      body: JSON.stringify({ attending: 'yes' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 if attending is missing', async () => {
    const req = new NextRequest('http://localhost/api/rsvp', {
      method: 'POST',
      body: JSON.stringify({ name: 'Иван' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('sends message to multiple chat IDs when comma-separated', async () => {
    process.env.TELEGRAM_CHAT_ID = '12345,67890'
    const req = new NextRequest('http://localhost/api/rsvp', {
      method: 'POST',
      body: JSON.stringify({ name: 'Иван', attending: 'yes' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
    expect(global.fetch).toHaveBeenCalledTimes(2)
    expect((global.fetch as jest.Mock).mock.calls[0][1].body).toContain('"chat_id":"12345"')
    expect((global.fetch as jest.Mock).mock.calls[1][1].body).toContain('"chat_id":"67890"')
  })
})
