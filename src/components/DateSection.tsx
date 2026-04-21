// src/components/DateSection.tsx
import { config } from '@/config'

const DAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const MONTHS_RU = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
]

function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1
  const cells: (number | null)[] = Array(startOffset).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

export default function DateSection() {
  const { day, month, year, displaySlash } = config.date
  const cells = buildCalendar(year, month)

  return (
    <section className="date-section">
      <div className="date-card">
        <h2 className="date-title">МЫ ЖДЁМ ВАС</h2>
        <p className="date-month-label">{MONTHS_RU[month - 1]}</p>

        <div className="date-calendar">
          <div className="date-calendar-header">
            {DAYS.map(d => (
              <div key={d} className="date-calendar-day-name">{d}</div>
            ))}
          </div>
          <div className="date-calendar-grid">
            {cells.map((d, i) => {
              const classNames = ['date-calendar-cell']
              if (d === null) classNames.push('date-calendar-cell-empty')
              if (d === day) classNames.push('date-calendar-cell-highlight')
              return (
                <div key={i} className={classNames.join(' ')}>
                  {d ?? ''}
                </div>
              )
            })}
          </div>
        </div>

        <p className="date-message">
          Не пропустите важное событие этого лета —<br />
          <strong>день нашей свадьбы!</strong>
        </p>

        <p className="date-display">{displaySlash}</p>
      </div>
    </section>
  )
}
