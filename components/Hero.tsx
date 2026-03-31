'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ClickCollectButton from './ClickCollectButton'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen texture-cream flex items-center overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-tomato/10 to-ember/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-ember/5 to-transparent blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute right-20 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-tomato/10 pointer-events-none animate-float"
      />
      <div
        aria-hidden
        className="absolute right-48 top-[30%] w-[180px] h-[180px] rounded-full border border-ember/10 pointer-events-none animate-float"
        style={{ animationDelay: '-3s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-xs uppercase tracking-[0.35em] text-ember mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-ember" />
          Pizza napolitaine &middot; Feu de bois &middot; Saint-&Eacute;tienne
        </motion.p>

        {/* Main title */}
        <h1 className="font-playfair font-bold text-charcoal leading-[0.9] mb-8">
          {['L\u2019Art', 'de la', 'Pizza.'].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 60, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`block text-[clamp(3.5rem,10vw,8rem)] ${
                i === 2
                  ? 'bg-gradient-to-r from-tomato to-tomato-600 bg-clip-text text-transparent'
                  : ''
              }`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Rule */}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: '3rem' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="section-rule"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-inter text-base md:text-lg text-charcoal/60 max-w-lg mb-12 leading-relaxed"
        >
          P&acirc;te &agrave; longue fermentation, ingr&eacute;dients soigneusement s&eacute;lectionn&eacute;s,
          cuisson au feu de bois. 23 pizzas — de 9&nbsp;&euro; &agrave; 15&nbsp;&euro;.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <ClickCollectButton variant="primary" size="lg" />
          <a
            href="#carte"
            className="group font-inter text-sm uppercase tracking-widest font-semibold border-2 border-charcoal/20 text-charcoal px-8 py-4 rounded-2xl hover:border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 text-center hover:shadow-soft-lg"
          >
            Voir la carte
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-charcoal/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
