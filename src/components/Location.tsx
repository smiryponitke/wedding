// src/components/Location.tsx
import { config } from '@/config'
import Image from 'next/image'

export default function Location() {
  const { name, address, gatheringTime, mapsUrl } = config.location

  return (
    <section className="min-h-screen flex items-center bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-wedding-dark mb-8">
            ЛОКАЦИЯ
          </h2>
          <h3 className="text-2xl font-light text-wedding-dark mb-3">{name}</h3>
          <p className="text-wedding-muted text-base mb-6">{address}</p>
          <p className="font-serif italic text-lg text-wedding-text mb-8">
            * Сбор гостей — {gatheringTime}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-wedding-dark rounded-full px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium text-wedding-dark hover:bg-wedding-dark hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Как добраться
          </a>
        </div>

        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/malinki.png"
              alt="Усадьба Малинки"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
