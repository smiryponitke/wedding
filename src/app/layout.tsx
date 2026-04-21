// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/jost/300.css'
import '@fontsource/jost/400.css'

export const metadata: Metadata = {
  title: 'Егор & Вика — 29.08.2026',
  description: 'Приглашаем вас разделить с нами этот особенный день',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
