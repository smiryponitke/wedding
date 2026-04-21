// src/components/Location.tsx
import { config } from '@/config'

export default function Location() {
  const { name, address, gatheringTime, mapsUrl } = config.location

  return (
    <section className="min-h-screen flex items-center bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-[#1a1a1a] mb-8">
            ЛОКАЦИЯ
          </h2>
          <h3 className="text-xl font-light text-[#1a1a1a] mb-2">{name}</h3>
          <p className="text-[#666] text-sm mb-6">{address}</p>
          <p className="font-serif italic text-lg text-[#444] mb-8">
            * Сбор гостей — {gatheringTime}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#1a1a1a] rounded-full px-6 py-3 text-xs tracking-[0.2em] uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Как добраться
          </a>
        </div>

        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] bg-[#e8e4e0] rounded-lg overflow-hidden flex items-center justify-center">
            <p className="text-[#aaa] text-sm tracking-wider">Фото локации</p>
          </div>
        </div>
      </div>
    </section>
  )
}
