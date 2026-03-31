'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Utensils } from 'lucide-react'
import { pizzasTomate, pizzasCreme, type Pizza } from '@/lib/pizzas'

function PizzaCard({ pizza, accent, index }: { pizza: Pizza; accent: 'tomato' | 'ember'; index: number }) {
  const gradientClass =
    accent === 'tomato'
      ? 'from-tomato to-tomato-600'
      : 'from-ember to-ember-500'
  const textClass = accent === 'tomato' ? 'text-tomato' : 'text-ember'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1"
    >
      {/* Top accent gradient */}
      <div className={`h-1 bg-gradient-to-r ${gradientClass} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Name + badges */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-playfair font-bold text-charcoal text-lg leading-tight group-hover:text-charcoal-700 transition-colors">
            {pizza.name}
          </h3>
          <div className="flex gap-1.5 shrink-0 mt-0.5">
            {pizza.vegetarian && (
              <span
                title="V&eacute;g&eacute;tarien"
                className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600"
              >
                <Leaf size={12} />
              </span>
            )}
            {pizza.calzone && (
              <span
                title="Calzone"
                className="flex items-center justify-center w-6 h-6 rounded-full bg-ember-50 text-ember"
              >
                <Utensils size={12} />
              </span>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <p className="font-inter text-sm text-charcoal/50 leading-relaxed flex-1 mb-5">
          {pizza.ingredients}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className={`font-inter font-bold text-lg ${textClass}`}>
            {pizza.price}
          </p>
          <div className={`w-8 h-px bg-gradient-to-r ${gradientClass} opacity-30 group-hover:w-12 transition-all duration-300`} />
        </div>
      </div>
    </motion.div>
  )
}

type Tab = 'tomate' | 'creme'

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('tomate')

  const pizzas = activeTab === 'tomate' ? pizzasTomate : pizzasCreme
  const accent = activeTab === 'tomate' ? 'tomato' : 'ember'

  return (
    <section id="carte" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-tomato-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-inter text-xs uppercase tracking-[0.35em] text-ember mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-ember" />
            La carte
          </p>
          <h2 className="font-playfair font-bold text-charcoal text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-4">
            23 pizzas,
            <br />
            <span className="bg-gradient-to-r from-tomato to-ember bg-clip-text text-transparent">
              cuites au feu de bois.
            </span>
          </h2>
          <span className="section-rule" />
          <div className="flex items-center gap-4 font-inter text-sm text-charcoal/40">
            <span className="flex items-center gap-1.5">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600">
                <Leaf size={10} />
              </span>
              V&eacute;g&eacute;tarien
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-ember-50 text-ember">
                <Utensils size={10} />
              </span>
              Calzone
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-12"
        >
          <button
            onClick={() => setActiveTab('tomate')}
            className={`font-inter text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 ${
              activeTab === 'tomate'
                ? 'bg-gradient-to-r from-tomato to-tomato-600 text-white shadow-glow-tomato'
                : 'bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10'
            }`}
          >
            Base Tomate&nbsp;
            <span className="opacity-60 font-normal">(14)</span>
          </button>
          <button
            onClick={() => setActiveTab('creme')}
            className={`font-inter text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 ${
              activeTab === 'creme'
                ? 'bg-gradient-to-r from-ember to-ember-500 text-white shadow-glow-ember'
                : 'bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10'
            }`}
          >
            Base Cr&egrave;me&nbsp;
            <span className="opacity-60 font-normal">(9)</span>
          </button>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {pizzas.map((pizza, i) => (
              <PizzaCard key={pizza.name} pizza={pizza} accent={accent} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Price range note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-inter text-xs text-charcoal/30 mt-8 text-center"
        >
          De 9,00&nbsp;&euro; &agrave; 15,00&nbsp;&euro; &nbsp;&middot;&nbsp; Cuisson au feu de bois
        </motion.p>
      </div>
    </section>
  )
}
