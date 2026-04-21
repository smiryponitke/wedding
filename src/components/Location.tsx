// src/components/Location.tsx
import { config } from '@/config'

export default function Location() {
  const { name, address, gatheringTime, mapsUrl } = config.location

  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-text">
          <h2 className="location-title">ЛОКАЦИЯ</h2>
          <h3 className="location-name">{name}</h3>
          <p className="location-address">{address}</p>
          <p className="location-gathering">* Сбор гостей — {gatheringTime}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn"
          >
            Как добраться
          </a>
        </div>

        <div className="location-image">
          <div className="location-image-inner">
            <img src="/images/malinki.png" alt="Усадьба Малинки" />
          </div>
        </div>
      </div>
    </section>
  )
}
