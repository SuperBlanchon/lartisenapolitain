'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

const hours = [
  { days: 'Lundi - Vendredi', times: '11h00 - 14h00  /  18h00 - 22h00' },
  { days: 'Samedi - Dimanche', times: '18h00 - 22h00' },
]

const footerLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'La Carte', href: '#carte' },
  { label: 'Notre Histoire', href: '#qui-sommes-nous' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface-container-low w-full py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="text-xl font-headline italic text-primary">
            L&apos;Artiste Napolitain
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Pizzeria artisanale à Saint-Étienne.<br />
            Chaque pizza raconte une histoire de tradition, de patience et de feu.
          </p>
          <p className="text-on-surface-variant/50 font-body text-sm">
            © 2024 L&apos;Artiste Napolitain
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h4 className="font-headline italic text-on-surface flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            Nous trouver
          </h4>
          <address className="not-italic font-body text-sm text-on-surface-variant space-y-2">
            <p>99 rue de la Montat, 42100 Saint-Étienne</p>
            <a
              href="tel:+33477010122"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              04 77 01 01 22
            </a>
          </address>
          <p className="font-body text-xs text-on-surface-variant/50">
            Commande en ligne via <span className="font-semibold">Qreat</span>
          </p>
        </motion.div>

        {/* Hours + Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h4 className="font-headline italic text-on-surface flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            Horaires
          </h4>
          <div className="space-y-3">
            {hours.map((row) => (
              <div key={row.days}>
                <p className="font-body text-sm font-medium text-on-surface">{row.days}</p>
                <p className="font-body text-sm text-on-surface-variant">{row.times}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-on-surface-variant/40 italic">
            Horaires valables jusqu&apos;à fin juillet.
          </p>

          {/* Navigation links */}
          <div className="flex gap-6 pt-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-on-surface-variant/50 hover:text-primary transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
