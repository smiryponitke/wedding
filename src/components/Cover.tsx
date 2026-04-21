// src/components/Cover.tsx
import { config } from '@/config'
import Image from 'next/image'

export default function Cover() {
  return (
    <section className="min-h-screen bg-[#f2e8e4] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      <p className="text-xs tracking-[0.4em] text-[#8b6e6e] mb-8 md:mb-12 uppercase">
        Wedding Day
      </p>

      {/* Photos + Date row */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-10">
        {/* Bride photo */}
        <div className="polaroid -rotate-3">
          <div className="relative w-48 h-56 md:w-56 md:h-64 bg-gray-300">
            <Image
              src="/images/vikaHi.jpg"
              alt="Вика"
              fill
              className="object-cover"
            />
          </div>
          <p className="polaroid-caption mt-4 text-xs leading-relaxed text-amber-900 font-light italic px-3">
            — интересно, кто будет моим мужем, когда я вырасту?
          </p>
        </div>

        {/* Date */}
        <div className="text-center font-serif text-amber-900 leading-none">
          <div className="text-6xl md:text-8xl font-light">
            {String(config.date.day).padStart(2, '0')}
          </div>
          <div className="text-6xl md:text-8xl font-light">
            {String(config.date.month).padStart(2, '0')}
          </div>
          <div className="text-6xl md:text-8xl font-light">
            {String(config.date.year).slice(2)}
          </div>
        </div>

        {/* Groom photo */}
        <div className="polaroid rotate-[2deg]">
          <div className="relative w-44 h-44 md:w-56 md:h-56 bg-gray-200">
            <Image
              src="/images/groom-placeholder.jpg"
              alt="Егор в детстве"
              fill
              className="object-cover"
            />
          </div>
          <p className="polaroid-caption mt-3 text-xs leading-relaxed text-[#4a3030] font-light italic px-2">
            — им буду я 🤍
          </p>
        </div>
      </div>

      {/* Names */}
      <div className="font-serif text-5xl md:text-7xl tracking-[0.2em] text-amber-900">
        {config.names.groom} + {config.names.bride}
      </div>
    </section>
  )
}
