'use client'

import { motion } from 'framer-motion'
import ClickCollectButton from './ClickCollectButton'

export default function CTA() {
  return (
    <section className="py-32 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-[3rem] p-16 shadow-sm relative overflow-hidden grain-overlay"
      >
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline italic text-on-surface">
            À table.
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto font-body">
            Sur place au 99 rue de la Montat, en livraison ou en Click &amp; Collect.
            Appelez-nous au 04&nbsp;77&nbsp;01&nbsp;01&nbsp;22.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="tel:+33477010122"
              className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20"
            >
              Appeler
            </a>
            <ClickCollectButton variant="primary" size="lg" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
