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
      <section className="rsvp-section">
        <div className="rsvp-success">
          <p className="rsvp-success-title">Спасибо!</p>
          <p className="rsvp-success-text">Мы получили вашу анкету 🤍</p>
        </div>
      </section>
    )
  }

  return (
    <section className="rsvp-section">
      <div className="rsvp-container">
        <div className="rsvp-header">
          <h2 className="rsvp-title">АНКЕТА ГОСТЯ</h2>
          <p className="rsvp-subtitle">
            Пожалуйста, подтвердите своё присутствие на мероприятии до:
          </p>
          <p className="rsvp-deadline">{config.rsvpDeadline.display}</p>
        </div>

        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="rsvp-field">
            <label>Имя и Фамилия</label>
            <input
              type="text"
              placeholder="Иван Иванов"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="rsvp-input"
            />
          </div>

          <div className="rsvp-field">
            <label>Планируете ли Вы присутствовать?</label>
            <div className="rsvp-options">
              {[
                { value: 'yes', label: 'Да, с удовольствием' },
                { value: 'no', label: 'Не смогу' },
              ].map(opt => (
                <label key={opt.value} className="rsvp-option">
                  <input
                    type="radio"
                    name="attending"
                    value={opt.value}
                    checked={attending === opt.value}
                    onChange={() => setAttending(opt.value as 'yes' | 'no')}
                  />
                  <span className="rsvp-option-label">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="rsvp-field">
            <label>Спутник/спутница (если будете не одни)</label>
            <input
              type="text"
              placeholder="Имя и Фамилия"
              value={partner}
              onChange={e => setPartner(e.target.value)}
              className="rsvp-input"
            />
          </div>

          <div className="rsvp-field">
            <label>Ваши предпочтения в напитках</label>
            <div className="rsvp-drinks-grid">
              {config.drinks.map(drink => (
                <label key={drink} className="rsvp-option">
                  <input
                    type="checkbox"
                    checked={drinks.includes(drink)}
                    onChange={() => toggleDrink(drink)}
                  />
                  <span className="rsvp-option-label">{drink}</span>
                </label>
              ))}
            </div>
          </div>

          {formState === 'error' && (
            <div className="rsvp-error">
              <p>Что-то пошло не так. Попробуйте ещё раз.</p>
            </div>
          )}

          <div className="rsvp-submit-wrap">
            <button
              type="submit"
              disabled={formState === 'submitting' || !name || !attending}
              className="rsvp-submit"
            >
              {formState === 'submitting' ? '⏳' : 'Отправить'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
