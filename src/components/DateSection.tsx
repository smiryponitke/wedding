// src/components/DateSection.tsx
import { config } from '@/config'

const DAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const MONTHS_RU = [
  'Январь','Февраль','Март','Апрель','Май','Июнь',
  'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
]

function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  const startOffset = (firstDay === 0 ? 6 : firstDay - 1)
  const cells: (number | null)[] = Array(startOffset).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

export default function DateSection() {
  const { day, month, year, displaySlash } = config.date
  const cells = buildCalendar(year, month)

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 max-w-2xl w-full text-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-wedding-dark mb-10">
          МЫ ЖДЁМ ВАС
        </h2>

        <p className="text-sm tracking-[0.35em] text-wedding-muted mb-8 uppercase font-light">
          {MONTHS_RU[month - 1]}
        </p>

        <div className="mb-12 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-7 gap-2 mb-3">
            {DAYS.map(d => (
              <div key={d} className="text-xs font-semibold text-wedding-muted text-center py-2 uppercase tracking-wider">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {cells.map((d, i) => (
              <div
                key={i}
                className={`text-base text-center py-3 rounded-xl font-light transition-all ${
                  d === day
                    ? 'bg-wedding-dark text-white font-semibold shadow-md'
                    : d === null
                    ? 'bg-transparent'
                    : 'text-wedding-text hover:bg-gray-200'
                }`}
              >
                {d ?? ''}
              </div>
            ))}
          </div>
        </div>

        <p className="text-base text-wedding-muted leading-relaxed mb-10 max-w-md mx-auto">
          Не пропустите важное событие этого лета —<br />
          <span className="font-medium text-wedding-dark">день нашей свадьбы!</span>
        </p>

        <p className="font-serif text-3xl tracking-[0.15em] text-wedding-dark">
          {displaySlash}
        </p>
      </div>
    </section>
  )
}
