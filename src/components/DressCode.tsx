// src/components/DressCode.tsx
import { config } from '@/config'

export default function DressCode() {
  const { text, colors } = config.dresscode

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-[#1a1a1a] mb-8">
          ДРЕСС-КОД
        </h2>

        <p className="text-sm text-[#555] leading-relaxed mb-12 max-w-sm mx-auto">
          {text}
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 rounded-sm shadow-sm"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs text-[#888]">{color.label}</span>
            </div>
          ))}
        </div>

        <div className="w-px h-16 bg-[#ccc] mx-auto" />
      </div>
    </section>
  )
}
