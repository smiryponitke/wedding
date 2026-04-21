// src/components/Cover.tsx
import { config } from '@/config'

export default function Cover() {
  return (
    <section className="cover">
      <p className="cover-label">Wedding Day</p>

      <div className="cover-photos">
        <div className="polaroid polaroid-rotate-left">
          <img src="/images/vika.jpg" alt="Вика" />
          <p className="polaroid-caption">
            — интересно, кто будет моим мужем, когда я вырасту?
          </p>
        </div>

        <div className="cover-date">
          <div className="cover-date-day">
            {String(config.date.day).padStart(2, '0')}
          </div>
          <div className="cover-date-month">
            {String(config.date.month).padStart(2, '0')}
          </div>
          <div className="cover-date-year">
            {String(config.date.year).slice(2)}
          </div>
        </div>

        <div className="polaroid polaroid-tall polaroid-rotate-right">
          <img src="/images/egor.jpg" alt="Егор" />
          <p className="polaroid-caption">— им буду я 🤍</p>
        </div>
      </div>

      <div className="cover-names">
        {config.names.groom} + {config.names.bride}
      </div>
    </section>
  )
}
