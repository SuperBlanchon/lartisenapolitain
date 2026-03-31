'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
import ClickCollectButton from './ClickCollectButton'

const hours = [
  { days: 'Lundi - Vendredi', times: '11h00 - 14h00  /  18h00 - 22h00' },
  { days: 'Samedi - Dimanche', times: '18h00 - 22h00' },
]

const footerLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'La Carte', href: '#carte' },
  { label: 'Qui sommes-nous\u00a0?', href: '#qui-sommes-nous' },
]

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 text-cream overflow-hidden">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-tomato via-ember to-tomato" />

      {/* Background glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-tomato/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-playfair font-bold text-cream text-3xl mb-1">
              L&apos;Artiste
            </p>
            <p className="font-playfair font-bold text-3xl mb-6">
              <span className="bg-gradient-to-r from-tomato to-ember bg-clip-text text-transparent">
                Napolitain
              </span>
            </p>
            <p className="font-inter text-sm text-cream/50 leading-relaxed mb-8 max-w-xs">
              Pizzeria artisanale &agrave; Saint-&Eacute;tienne.
              Pizza napolitaine, p&acirc;te longue fermentation,
              cuisson au feu de bois.
            </p>
            <ClickCollectButton variant="outline" size="sm" />
          </motion.div>

          {/* Infos column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-ember mb-8 font-semibold flex items-center gap-2">
              <MapPin size={14} />
              Nous trouver
            </h3>
            <address className="not-italic font-inter text-sm text-cream/60 leading-loose space-y-1">
              <p>99 rue de la Montat</p>
              <p>42100 Saint-&Eacute;tienne</p>
              <a
                href="tel:+33477010122"
                className="flex items-center gap-2 text-cream/80 hover:text-tomato transition-colors duration-300 mt-3"
              >
                <Phone size={14} />
                04 77 01 01 22
              </a>
            </address>
            <p className="font-inter text-xs text-cream/30 mt-6">
              Commande en ligne via&nbsp;
              <span className="font-semibold text-cream/50">Qreat</span>
            </p>
          </motion.div>

          {/* Hours column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-ember mb-8 font-semibold flex items-center gap-2">
              <Clock size={14} />
              Horaires
            </h3>
            <div className="space-y-4">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="pb-4 border-b border-cream/5 last:border-0"
                >
                  <p className="font-inter text-sm font-medium text-cream/80 mb-1">
                    {row.days}
                  </p>
                  <p className="font-inter text-sm text-cream/40">
                    {row.times}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-inter text-xs text-cream/20 mt-6 italic">
              Horaires valables jusqu&apos;&agrave; fin juillet.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-inter text-xs text-cream/20">
            &copy; L&apos;Artiste Napolitain 2024
          </p>
          <nav className="flex gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-xs uppercase tracking-widest text-cream/30 hover:text-cream/70 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
