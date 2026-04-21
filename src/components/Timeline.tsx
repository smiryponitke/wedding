// src/components/Timeline.tsx
import { config } from '@/config'

export default function Timeline() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f4f2] px-4 py-16">
      <div className="max-w-lg w-full text-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-[0.2em] text-[#1a1a1a] mb-16">
          ТАЙМИНГ
        </h2>

        <div className="space-y-12">
          {config.timeline.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="text-3xl">{item.icon}</div>
              <p className="text-lg md:text-xl tracking-[0.1em] text-[#333]">
                <span className="font-medium">{item.time}</span>
                <span className="mx-3 text-[#aaa]">·</span>
                <span className="uppercase tracking-[0.15em] text-sm md:text-base">{item.label}</span>
              </p>
              {index < config.timeline.length - 1 && (
                <div className="w-px h-6 bg-[#ccc] mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
