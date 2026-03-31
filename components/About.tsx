'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Flame, LayoutGrid } from 'lucide-react'

const highlights = [
  {
    icon: <Award size={24} />,
    title: 'Form\u00e9 par un vice-champion du monde',
    body: 'Jordan Tomas, vice-champion du monde de pizza 2013 \u2014 un savoir-faire transmis avec rigueur.',
    gradient: 'from-tomato/10 to-tomato/5',
  },
  {
    icon: <Clock size={24} />,
    title: 'P\u00e2te \u00e0 longue fermentation',
    body: "Plusieurs jours de repos pour une p\u00e2te l\u00e9g\u00e8re, alv\u00e9ol\u00e9e et digeste. La patience, au c\u0153ur de l'art.",
    gradient: 'from-ember/10 to-ember/5',
  },
  {
    icon: <Flame size={24} />,
    title: 'Cuisson au feu de bois',
    body: 'Une cro\u00fbte charbonn\u00e9e, un c\u0153ur moelleux. Le four \u00e0 bois donne \u00e0 chaque pizza son caract\u00e8re unique.',
    gradient: 'from-tomato/10 to-ember/5',
  },
  {
    icon: <LayoutGrid size={24} />,
    title: '23 pizzas, 3 modes de service',
    body: 'Sur place, livraison, ou Click & Collect. 14 pizzas base tomate, 9 base cr\u00e8me, dont 7 options v\u00e9g\u00e9tariennes.',
    gradient: 'from-ember/10 to-tomato/5',
  },
]

export default function About() {
  return (
    <section
      id="qui-sommes-nous"
      className="relative bg-charcoal text-cream overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-tomato/8 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <p className="font-inter text-xs uppercase tracking-[0.35em] text-ember mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-ember" />
            Qui sommes-nous&nbsp;?
          </p>
          <h2 className="font-playfair font-bold text-cream text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-6">
            Ni artiste,
            <br />
            <span className="bg-gradient-to-r from-tomato-300 to-ember-300 bg-clip-text text-transparent">
              ni napolitain.
            </span>
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block h-0.5 bg-gradient-to-r from-tomato to-ember rounded-full mb-8"
          />
          <p className="font-inter text-base md:text-lg text-cream/60 leading-relaxed">
            Un passionn&eacute; issu de multiples cultures, install&eacute; &agrave; Saint-&Eacute;tienne avec
            une seule obsession&nbsp;: la pizza napolitaine dans sa forme la plus authentique.
            Form&eacute; par Jordan Tomas, vice-champion du monde 2013, il a fait de la lenteur
            et de l&apos;exigence les piliers de sa cuisine.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${h.gradient} border border-cream/5 hover:border-cream/15 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-tomato to-ember text-white mb-6 shadow-glow-tomato group-hover:scale-110 transition-transform duration-300">
                {h.icon}
              </div>
              <h3 className="font-playfair font-semibold text-cream text-lg mb-3 leading-snug">
                {h.title}
              </h3>
              <p className="font-inter text-sm text-cream/50 leading-relaxed group-hover:text-cream/70 transition-colors duration-300">
                {h.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
