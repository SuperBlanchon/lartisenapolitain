'use client'

import { motion } from 'framer-motion'
import Placeholder from './Placeholder'

export default function FeaturedPizzas() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 space-y-2"
      >
        <span className="text-primary font-label tracking-widest text-sm font-bold uppercase">
          La sélection
        </span>
        <h2 className="text-4xl font-headline italic text-on-surface">
          Nos incontournables
        </h2>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-[600px]">
        {/* Large featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 group relative rounded-xl overflow-hidden flex flex-col justify-end min-h-[400px]"
        >
          <Placeholder
            label="Photo vue du dessus : Margarita classique, sauce tomate, mozzarella fondante, basilic frais"
            variant="terracotta"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a]/80 via-transparent to-transparent" />
          <div className="relative z-10 p-8 text-white">
            <div className="flex justify-between items-end mb-2">
              <h3 className="text-3xl font-headline italic">Margarita</h3>
              <span className="text-xl font-body">9,00&nbsp;€</span>
            </div>
            <p className="text-surface-container-low max-w-md text-sm">
              Mozzarella râpée, olives. La reine des pizzas, simplement parfaite.
            </p>
          </div>
        </motion.div>

        {/* Right column */}
        <div className="md:col-span-5 grid grid-rows-2 gap-8">
          {/* Card: 6 Fromages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between group overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-headline italic text-on-surface">6 Fromages</h3>
                <p className="text-sm text-on-surface-variant mt-2">
                  Chèvre, bleu, reblochon, raclette, mozzarella, parmesan.
                </p>
              </div>
              <span className="text-primary font-bold">15,00&nbsp;€</span>
            </div>
            <div className="relative h-24 mt-4 overflow-visible">
              <Placeholder
                label="Photo pizza 6 fromages"
                variant="warm"
                className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full"
              />
            </div>
          </motion.div>

          {/* Card: Tartiflette (accent card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-tertiary-fixed rounded-xl p-6 flex flex-col justify-between group overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-headline italic text-on-tertiary-fixed">Tartiflette</h3>
                <p className="text-sm text-on-tertiary-fixed-variant mt-2">
                  Pommes de terre, reblochon, lardons, oignons, mozzarella.
                </p>
              </div>
              <span className="text-primary font-bold">14,50&nbsp;€</span>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Montagnarde
              </span>
              <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Base Crème
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
