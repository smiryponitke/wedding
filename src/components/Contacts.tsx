import { config } from '@/config'

export default function Contacts() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-wedding-dark mb-16">
          КОНТАКТЫ
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-16">
          {config.contacts.map(contact => (
            <div key={contact.name} className="text-center">
              <p className="font-serif text-2xl text-wedding-dark mb-4">{contact.name}</p>
              <p className="text-base text-wedding-muted mb-2 font-light">{contact.phone}</p>
              <p className="text-base text-wedding-muted font-light">Telegram: <span className="font-medium">{contact.telegram}</span></p>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-8 border-t-2 border-wedding-border">
          <p className="text-xs tracking-[0.35em] text-wedding-muted uppercase font-light">
            Ждём вас · {config.date.display}
          </p>
        </div>
      </div>
    </section>
  )
}
