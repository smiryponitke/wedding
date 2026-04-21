// src/app/page.tsx
import Cover from '@/components/Cover'
import DateSection from '@/components/DateSection'
import Location from '@/components/Location'
import Timeline from '@/components/Timeline'
import DressCode from '@/components/DressCode'
import RSVPForm from '@/components/RSVPForm'
import Contacts from '@/components/Contacts'

export default function Home() {
  return (
    <main>
      <Cover />
      <DateSection />
      <Location />
      <Timeline />
      <DressCode />
      <RSVPForm />
      <Contacts />
    </main>
  )
}
