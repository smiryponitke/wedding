// src/components/DressCode.tsx
import { config } from '@/config'

export default function DressCode() {
  const { text, colors } = config.dresscode

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-wedding-dark mb-10">
          ДРЕСС-КОД
        </h2>

        <p className="text-base text-wedding-muted leading-relaxed mb-14 max-w-lg mx-auto">
          {text}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center gap-3">
              <div
                className="w-24 h-24 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                style={{ backgroundColor: color.hex, border: '1px solid rgba(0,0,0,0.1)' }}
              />
              <span className="text-sm font-light text-wedding-muted">{color.label}</span>
            </div>
          ))}
        </div>

        <div className="w-1 h-20 bg-wedding-border rounded-full mx-auto" />
      </div>
    </section>
  )
}
