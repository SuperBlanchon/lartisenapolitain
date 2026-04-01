'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ClickCollectButton from './ClickCollectButton'
import Placeholder from './Placeholder'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[920px] flex items-center overflow-hidden px-8">
      {/* Full-bleed placeholder image */}
      <div className="absolute inset-0 z-0">
        <Placeholder
          label="Photo hero : pizza napolitaine sortant du four à bois, croûte dorée, mozzarella fondante, éclairage chaud"
          variant="dark"
          className="w-full h-full"
        />
        {/* Dark overlay gradient like reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1a]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-headline italic text-white leading-tight"
          >
            L&apos;authenticité<br />
            dans chaque<br />
            <span className="text-primary-fixed">bouchée.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-surface-container-low max-w-md font-body leading-relaxed"
          >
            Pâte à longue fermentation, ingrédients locaux sélectionnés avec soin
            et cuisson au feu de bois. Le goût de Naples, à Saint-Étienne.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#carte"
              className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all active:scale-95"
            >
              Voir la carte
            </a>
            <ClickCollectButton variant="primary" size="lg" />
          </motion.div>
        </div>
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
          <ChevronDown size={24} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
