// src/components/DressCode.tsx
import { config } from '@/config'

export default function DressCode() {
  const { text, colors } = config.dresscode

  return (
    <section className="dresscode-section">
      <div className="dresscode-container">
        <h2 className="dresscode-title">ДРЕСС-КОД</h2>

        <p className="dresscode-text">{text}</p>

        <div className="dresscode-colors">
          {colors.map(color => (
            <div key={color.hex} className="dresscode-color">
              <div
                className="dresscode-swatch"
                style={{ backgroundColor: color.hex }}
              />
              <span className="dresscode-label">{color.label}</span>
            </div>
          ))}
        </div>

        <div className="dresscode-divider" />
      </div>
    </section>
  )
}
