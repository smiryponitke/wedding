// src/components/Location.tsx
import { config } from '@/config'

export default function Location() {
  const { name, address, gatheringTime, mapsUrl } = config.location

  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-text-col">
          <h2 className="location-title">ЛОКАЦИЯ</h2>
          <h3 className="location-name">{name}</h3>
          <p className="location-address">{address}</p>
          <p className="location-gathering">* Сбор гостей — {gatheringTime}</p>

          <svg
            className="location-arrow"
            viewBox="0 0 220 240"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 30 10 C 90 30, 30 80, 80 110 S 20 170, 90 215"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="0"
            />
            <path
              d="M 78 200 L 90 215 L 80 222"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

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
            <img src="/images/malinki.jpg" alt="Усадьба Малинки" />
          </div>
        </div>
      </div>
    </section>
  )
}
