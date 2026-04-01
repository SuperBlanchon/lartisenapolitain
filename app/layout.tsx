import type { Metadata } from 'next'
import { Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "L'Artiste Napolitain — Pizza napolitaine à Saint-Étienne",
  description:
    "Pizzeria artisanale à Saint-Étienne. Pâte à longue fermentation, cuisson au feu de bois. 23 pizzas, sur place, livraison et Click & Collect.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${jakarta.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
