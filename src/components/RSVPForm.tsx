'use client'
import { config } from '@/config'
import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function RSVPForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [name, setName] = useState('')
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('')
  const [partner, setPartner] = useState('')
  const [drinks, setDrinks] = useState<string[]>([])

  function toggleDrink(drink: string) {
    setDrinks(prev =>
      prev.includes(drink) ? prev.filter(d => d !== drink) : [...prev, drink]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !attending) return
    setFormState('submitting')

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, attending, partner, drinks }),
      })
      setFormState(res.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f5f4f2] px-4 py-16">
        <div className="text-center">
          <p className="font-serif text-3xl text-[#1a1a1a] mb-4">Спасибо!</p>
          <p className="text-[#666] text-sm">Мы получили вашу анкету 🤍</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f4f2] px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-[#1a1a1a] mb-4">
            АНКЕТА ГОСТЯ
          </h2>
          <p className="text-sm text-[#666]">Пожалуйста, подтвердите своё присутствие на мероприятии до:</p>
          <p className="font-serif text-xl text-[#1a1a1a] mt-2">{config.rsvpDeadline.display}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <div>
            <label className="block text-sm text-[#555] mb-2">
              Пожалуйста, подтвердите Ваше присутствие:
            </label>
            <input
              type="text"
              placeholder="Имя и Фамилия"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full border border-[#e0e0e0] rounded-full px-5 py-3 text-sm outline-none focus:border-[#888] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-[#555] mb-3">
              Планируете ли Вы присутствовать?
            </label>
            <div className="space-y-2">
              {[
                { value: 'yes', label: 'Да, с удовольствием' },
                { value: 'no', label: 'Не смогу' },
              ].map(opt => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value={opt.value}
                    checked={attending === opt.value}
                    onChange={() => setAttending(opt.value as 'yes' | 'no')}
                    className="accent-[#1a1a1a]"
                  />
                  <span className="text-sm text-[#333]">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#555] mb-2">
              Если Вы будете не одни, пожалуйста, заполните поле ниже:
            </label>
            <input
              type="text"
              placeholder="Имя и Фамилия Вашего спутника/спутницы"
              value={partner}
              onChange={e => setPartner(e.target.value)}
              className="w-full border border-[#e0e0e0] rounded-full px-5 py-3 text-sm outline-none focus:border-[#888] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-[#555] mb-3">Ваши предпочтения</label>
            <div className="grid grid-cols-2 gap-2">
              {config.drinks.map(drink => (
                <label key={drink} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={drinks.includes(drink)}
                    onChange={() => toggleDrink(drink)}
                    className="accent-[#1a1a1a]"
                  />
                  <span className="text-sm text-[#333]">{drink}</span>
                </label>
              ))}
            </div>
          </div>

          {formState === 'error' && (
            <p className="text-red-500 text-sm text-center">
              Что-то пошло не так. Попробуйте ещё раз.
            </p>
          )}

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-16 h-16 rounded-full border border-[#1a1a1a] text-xs tracking-[0.15em] uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors disabled:opacity-50"
            >
              {formState === 'submitting' ? '...' : 'Отправить'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
