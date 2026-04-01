'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Utensils } from 'lucide-react'
import { pizzasTomate, pizzasCreme, type Pizza } from '@/lib/pizzas'
import Placeholder from './Placeholder'

/* ---- Circular pizza card (for top 3 featured per base) ---- */
function CircularPizzaCard({ pizza, index }: { pizza: Pizza; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      <div className="relative mb-6">
        <div className="aspect-square rounded-full overflow-hidden">
          <Placeholder
            label={`Photo : ${pizza.name}`}
            variant={index % 2 === 0 ? 'terracotta' : 'warm'}
            className="w-full h-full"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-surface-container-lowest p-4 rounded-full shadow-sm">
          <span className="font-headline italic text-primary text-xl">{pizza.price.replace(' €', '€')}</span>
        </div>
      </div>
      <h3 className="font-headline text-2xl mb-2 flex items-center gap-2">
        {pizza.name}
        {pizza.vegetarian && <Leaf size={14} className="text-tertiary" />}
      </h3>
      <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-4">
        {pizza.ingredients}
      </p>
      {pizza.calzone && (
        <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase w-fit">
          Calzone
        </span>
      )}
    </motion.div>
  )
}

/* ---- List item (for the rest) ---- */
function PizzaListItem({ pizza, index }: { pizza: Pizza; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="flex gap-6 items-start group"
    >
      <div className="pt-2 shrink-0">
        <span className="font-headline italic text-2xl text-primary-container">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-baseline mb-2 gap-4">
          <h3 className="font-headline text-xl group-hover:text-primary transition-colors flex items-center gap-2">
            {pizza.name}
            {pizza.vegetarian && <Leaf size={12} className="text-tertiary" />}
            {pizza.calzone && <Utensils size={12} className="text-primary-container" />}
          </h3>
          <span className="font-headline italic text-lg text-primary shrink-0">{pizza.price.replace(' €', '€')}</span>
        </div>
        <p className="font-body text-on-surface-variant text-sm leading-relaxed">
          {pizza.ingredients}
        </p>
      </div>
    </motion.div>
  )
}

type Tab = 'tomate' | 'creme'

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('tomate')

  const pizzas = activeTab === 'tomate' ? pizzasTomate : pizzasCreme
  const featured = pizzas.slice(0, 3)
  const rest = pizzas.slice(3)

  return (
    <section id="carte" className="relative overflow-hidden">
      {/* Hero header */}
      <header className="max-w-7xl mx-auto px-8 pt-28 pb-16 text-center relative grain-overlay">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline italic text-6xl text-primary mb-4"
        >
          La Carte
        </motion.h2>
        <p className="font-body text-on-surface-variant max-w-xl mx-auto">
          23 pizzas cuites au feu de bois, pâte fermentée sur plusieurs jours.
          De 9,00&nbsp;€ à 15,00&nbsp;€.
        </p>
      </header>

      {/* Tab pills */}
      <div className="flex justify-center gap-3 mb-16 px-8">
        <button
          onClick={() => setActiveTab('tomate')}
          className={`px-6 py-2.5 rounded-full font-label text-sm font-semibold transition-all duration-200 ${
            activeTab === 'tomate'
              ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary'
              : 'bg-surface-container-low text-tertiary hover:bg-tertiary-fixed'
          }`}
        >
          Base Tomate (14)
        </button>
        <button
          onClick={() => setActiveTab('creme')}
          className={`px-6 py-2.5 rounded-full font-label text-sm font-semibold transition-all duration-200 ${
            activeTab === 'creme'
              ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary'
              : 'bg-surface-container-low text-tertiary hover:bg-tertiary-fixed'
          }`}
        >
          Base Crème (9)
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Featured 3 with circular images */}
          <div className="max-w-7xl mx-auto px-8 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {featured.map((pizza, i) => (
                <CircularPizzaCard key={pizza.name} pizza={pizza} index={i} />
              ))}
            </div>
          </div>

          {/* Remaining pizzas as numbered list */}
          <div className="bg-surface-container-low py-24">
            <div className="max-w-7xl mx-auto px-8">
              <div className="flex items-center gap-4 mb-12">
                <h3 className="font-headline italic text-3xl text-on-surface">
                  {activeTab === 'tomate' ? 'Toutes nos pizzas tomate' : 'Toutes nos pizzas crème'}
                </h3>
                <div className="h-px flex-grow bg-outline-variant/30" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {rest.map((pizza, i) => (
                  <PizzaListItem key={pizza.name} pizza={pizza} index={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center gap-6 text-sm text-on-surface-variant">
        <span className="flex items-center gap-1.5">
          <Leaf size={14} className="text-tertiary" />
          Végétarien
        </span>
        <span className="flex items-center gap-1.5">
          <Utensils size={14} className="text-primary-container" />
          Calzone
        </span>
      </div>
    </section>
  )
}
