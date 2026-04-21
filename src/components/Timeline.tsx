// src/components/Timeline.tsx
import { config } from '@/config'

export default function Timeline() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-wedding-cream px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <h2 className="font-serif text-5xl md:text-6xl tracking-[0.2em] text-wedding-dark mb-20">
          ТАЙМИНГ
        </h2>

        <div className="space-y-16">
          {config.timeline.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="text-5xl">{item.icon}</div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-2xl md:text-3xl tracking-[0.15em] font-light text-wedding-dark">
                  {item.time}
                </p>
                <p className="uppercase tracking-[0.2em] text-sm md:text-base font-medium text-wedding-muted">
                  {item.label}
                </p>
              </div>
              {index < config.timeline.length - 1 && (
                <div className="w-1 h-10 bg-wedding-border rounded-full mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
