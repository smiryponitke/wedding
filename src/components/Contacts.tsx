import { config } from '@/config'

export default function Contacts() {
  return (
    <section className="contacts-section">
      <div className="contacts-container">
        <h2 className="contacts-title">КОНТАКТЫ</h2>
        <div className="contacts-list">
          {config.contacts.map(contact => (
            <div key={contact.name} className="contact">
              <p className="contact-name">{contact.name}</p>
              <p className="contact-phone">{contact.phone}</p>
              <p className="contact-telegram">
                Telegram:{' '}
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-telegram-link"
                >
                  {contact.telegram}
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="contacts-footer">
          <p className="contacts-footer-text">
            Ждём вас · {config.date.display}
          </p>
        </div>
      </div>
    </section>
  )
}
