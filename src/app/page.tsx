// src/app/page.tsx
import Cover from '@/components/Cover'
import DateSection from '@/components/DateSection'
import Location from '@/components/Location'
import Timeline from '@/components/Timeline'
import DressCode from '@/components/DressCode'
import RSVPForm from '@/components/RSVPForm'
import Contacts from '@/components/Contacts'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <main>
      <Cover />
      <Reveal><DateSection /></Reveal>
      <Reveal><Location /></Reveal>
      <Reveal><Timeline /></Reveal>
      <Reveal><DressCode /></Reveal>
      <Reveal><RSVPForm /></Reveal>
      <Reveal><Contacts /></Reveal>
    </main>
  )
}
