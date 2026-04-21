import { config } from '@/config'

export default function Contacts() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-[#1a1a1a] mb-12">
          КОНТАКТЫ
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {config.contacts.map(contact => (
            <div key={contact.name} className="text-center">
              <p className="font-serif text-xl text-[#1a1a1a] mb-2">{contact.name}</p>
              <p className="text-sm text-[#666] mb-1">{contact.phone}</p>
              <p className="text-sm text-[#888]">Telegram: {contact.telegram}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-xs tracking-[0.3em] text-[#aaa] uppercase">
          Ждём вас · {config.date.display}
        </p>
      </div>
    </section>
  )
}
