// src/components/Cover.tsx
import { config } from '@/config'

export default function Cover() {
  return (
    <section className="min-h-screen bg-wedding-pink flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      <p className="text-xs tracking-[0.4em] text-amber-900 mb-8 md:mb-12 uppercase">
        Wedding Day
      </p>

      {/* Photos + Date row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16">
        {/* Bride photo */}
        <div className="polaroid -rotate-3 shadow-xl">
          <img
            src="/images/vikaHi.jpg"
            alt="Вика"
            className="w-64 h-80 md:w-72 md:h-96 object-cover"
          />
          <p className="polaroid-caption mt-4 text-sm leading-relaxed text-amber-900 font-light italic px-4">
            — интересно, кто будет моим мужем, когда я вырасту?
          </p>
        </div>

        {/* Date */}
        <div className="text-center font-serif text-amber-900 leading-none px-4">
          <div className="text-7xl md:text-9xl font-light tracking-tight">
            {String(config.date.day).padStart(2, '0')}
          </div>
          <div className="text-6xl md:text-8xl font-light tracking-tight">
            {String(config.date.month).padStart(2, '0')}
          </div>
          <div className="text-6xl md:text-8xl font-light tracking-tight">
            {String(config.date.year).slice(2)}
          </div>
        </div>

        {/* Groom photo */}
        <div className="polaroid rotate-2 shadow-xl">
          <img
            src="/images/egorHi.jpg"
            alt="Егор"
            className="w-64 h-80 md:w-72 md:h-96 object-cover"
          />
          <p className="polaroid-caption mt-4 text-sm leading-relaxed text-amber-900 font-light italic px-4">
            — им буду я 🤍
          </p>
        </div>
      </div>

      {/* Names */}
      <div className="font-serif text-6xl md:text-8xl tracking-[0.15em] text-amber-900 font-light">
        {config.names.groom} + {config.names.bride}
      </div>
    </section>
  )
}
