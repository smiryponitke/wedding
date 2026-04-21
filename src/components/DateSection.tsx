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
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-14 max-w-lg w-full text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-[#1a1a1a] mb-8">
          МЫ ЖДЁМ ВАС
        </h2>

        <p className="text-sm tracking-[0.3em] text-[#666] mb-4 uppercase">
          {MONTHS_RU[month - 1]}
        </p>

        <div className="mb-6">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map(d => (
              <div key={d} className="text-xs text-[#999] text-center py-1">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => (
              <div
                key={i}
                className={`text-sm text-center py-2 rounded-full ${
                  d === day
                    ? 'border border-[#1a1a1a] text-[#1a1a1a] font-medium'
                    : d === null
                    ? ''
                    : 'text-[#333]'
                }`}
              >
                {d ?? ''}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#555] leading-relaxed mb-6">
          Не пропустите важное событие этого лета —<br />
          день нашей свадьбы!
        </p>

        <p className="font-serif text-2xl tracking-[0.2em] text-[#1a1a1a]">
          {displaySlash}
        </p>
      </div>
    </section>
  )
}
