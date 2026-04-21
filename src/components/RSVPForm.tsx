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
      <section className="min-h-screen flex items-center justify-center bg-wedding-cream px-4 py-16">
        <div className="text-center">
          <p className="font-serif text-4xl text-wedding-dark mb-6">Спасибо!</p>
          <p className="text-wedding-muted text-base">Мы получили вашу анкету 🤍</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-wedding-cream px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-wedding-dark mb-6">
            АНКЕТА ГОСТЯ
          </h2>
          <p className="text-base text-wedding-muted mb-2">Пожалуйста, подтвердите своё присутствие на мероприятии до:</p>
          <p className="font-serif text-2xl text-wedding-dark">{config.rsvpDeadline.display}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 md:p-12 shadow-lg space-y-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-wedding-muted mb-3 tracking-wide uppercase">
              Имя и Фамилия
            </label>
            <input
              type="text"
              placeholder="Иван Иванов"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full border-2 border-wedding-border rounded-2xl px-6 py-4 text-base text-wedding-dark outline-none focus:border-wedding-dark focus:shadow-md transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Attending */}
          <div>
            <label className="block text-sm font-medium text-wedding-muted mb-4 tracking-wide uppercase">
              Планируете ли Вы присутствовать?
            </label>
            <div className="space-y-3">
              {[
                { value: 'yes', label: 'Да, с удовольствием' },
                { value: 'no', label: 'Не смогу' },
              ].map(opt => (
                <label key={opt.value} className="flex items-center gap-4 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="attending"
                    value={opt.value}
                    checked={attending === opt.value}
                    onChange={() => setAttending(opt.value as 'yes' | 'no')}
                    className="w-5 h-5 accent-wedding-dark cursor-pointer"
                  />
                  <span className="text-base text-wedding-text font-light">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Partner */}
          <div>
            <label className="block text-sm font-medium text-wedding-muted mb-3 tracking-wide uppercase">
              Спутник/спутница (если будете не одни)
            </label>
            <input
              type="text"
              placeholder="Имя и Фамилия"
              value={partner}
              onChange={e => setPartner(e.target.value)}
              className="w-full border-2 border-wedding-border rounded-2xl px-6 py-4 text-base text-wedding-dark outline-none focus:border-wedding-dark focus:shadow-md transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Drinks */}
          <div>
            <label className="block text-sm font-medium text-wedding-muted mb-4 tracking-wide uppercase">
              Ваши предпочтения в напитках
            </label>
            <div className="grid grid-cols-2 gap-3">
              {config.drinks.map(drink => (
                <label key={drink} className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition">
                  <input
                    type="checkbox"
                    checked={drinks.includes(drink)}
                    onChange={() => toggleDrink(drink)}
                    className="w-5 h-5 accent-wedding-dark cursor-pointer rounded"
                  />
                  <span className="text-sm text-wedding-text font-light">{drink}</span>
                </label>
              ))}
            </div>
          </div>

          {formState === 'error' && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
              <p className="text-red-600 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={formState === 'submitting' || !name || !attending}
              className="w-20 h-20 rounded-full border-2 border-wedding-dark text-xs tracking-[0.2em] uppercase font-semibold text-wedding-dark hover:bg-wedding-dark hover:text-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center hover:shadow-lg"
            >
              {formState === 'submitting' ? '⏳' : 'Отправить'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
