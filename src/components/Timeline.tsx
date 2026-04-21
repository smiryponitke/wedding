// src/components/Timeline.tsx
import { config } from '@/config'

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">ТАЙМИНГ</h2>

        <div className="timeline-list">
          {config.timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-info">
                <p className="timeline-time">{item.time}</p>
                <p className="timeline-label">{item.label}</p>
              </div>
              {index < config.timeline.length - 1 && (
                <div className="timeline-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
