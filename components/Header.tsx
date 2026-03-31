'use client'

import { useState } from 'react'
import ClickCollectButton from './ClickCollectButton'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'La Carte', href: '#carte' },
  { label: 'Qui sommes-nous\u00a0?', href: '#qui-sommes-nous' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#accueil"
          className="font-playfair text-lg font-bold text-charcoal tracking-tight leading-none"
        >
          L&apos;Artiste<br />
          <span className="text-tomato">Napolitain</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-xs uppercase tracking-[0.15em] font-medium text-charcoal hover:text-tomato transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ClickCollectButton variant="primary" size="sm" />
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t-2 border-charcoal">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-inter text-sm uppercase tracking-[0.15em] font-medium text-charcoal hover:text-tomato transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div>
              <ClickCollectButton variant="primary" size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
