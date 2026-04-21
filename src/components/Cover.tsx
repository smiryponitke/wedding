// src/components/Cover.tsx
import { config } from '@/config'

export default function Cover() {
  return (
    <section className="min-h-screen bg-wedding-pink flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      <p className="text-xs tracking-[0.4em] text-amber-900 mb-6 md:mb-8 uppercase">
        Wedding Day
      </p>

      {/* Photos + Date row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
        {/* Bride photo */}
        <div className="polaroid -rotate-3">
          <img
            src="/images/vika.jpg"
            alt="Вика"
            className="w-28 h-28 md:w-32 md:h-32 object-cover"
          />
          <p className="polaroid-caption mt-2 text-xs leading-relaxed text-amber-900 font-light italic px-2">
            — интересно, кто будет моим мужем, когда я вырасту?
          </p>
        </div>

        {/* Date */}
        <div className="text-center font-serif text-amber-900 leading-none px-2">
          <div className="text-4xl md:text-5xl font-light tracking-tight">
            {String(config.date.day).padStart(2, '0')}
          </div>
          <div className="text-3xl md:text-4xl font-light tracking-tight">
            {String(config.date.month).padStart(2, '0')}
          </div>
          <div className="text-3xl md:text-4xl font-light tracking-tight">
            {String(config.date.year).slice(2)}
          </div>
        </div>

        {/* Groom photo */}
        <div className="polaroid rotate-2">
          <img
            src="/images/egor.jpg"
            alt="Егор"
            className="w-28 h-36 md:w-32 md:h-40 object-cover"
          />
          <p className="polaroid-caption mt-2 text-xs leading-relaxed text-amber-900 font-light italic px-2">
            — им буду я 🤍
          </p>
        </div>
      </div>

      {/* Names */}
      <div className="font-serif text-2xl md:text-4xl tracking-[0.15em] text-amber-900 font-light">
        {config.names.groom} + {config.names.bride}
      </div>
    </section>
  )
}
