'use client'

import { motion } from 'framer-motion'
import { Timer, Flame, Users } from 'lucide-react'
import Placeholder from './Placeholder'

const pillars = [
  {
    icon: <Timer size={28} />,
    title: 'Fermentation longue',
    body: 'Plusieurs jours de repos pour une pâte légère, alvéolée et digeste. La patience est notre premier ingrédient.',
  },
  {
    icon: <Flame size={28} />,
    title: 'Cuisson au feu de bois',
    body: 'Notre four à bois donne à chaque pizza une croûte charbonnée et un cœur moelleux, un caractère unique.',
  },
  {
    icon: <Users size={28} />,
    title: 'Ancrage local',
    body: 'Des touches montagnardes et savoyardes assumées — Raclette, Tartiflette, Truffade — la pizza à notre sauce.',
  },
]

export default function About() {
  return (
    <>
      {/* Story section */}
      <section id="qui-sommes-nous" className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden rotate-2 shadow-2xl">
              <Placeholder
                label="Photo : four à bois traditionnel avec flammes, briques chaudes et lueur orangée"
                variant="dark"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-surface-container-lowest p-4 rounded-xl shadow-lg -rotate-3 hidden md:block overflow-hidden">
              <Placeholder
                label="Photo : mains du pizzaiolo pétrissant la pâte"
                variant="terracotta"
                className="w-full h-full rounded-lg"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 space-y-8"
          >
            <span className="text-primary font-label tracking-widest text-sm font-bold uppercase">
              Notre histoire
            </span>
            <h2 className="text-4xl md:text-6xl font-headline italic text-on-surface leading-tight">
              Ni artiste,<br />
              <span className="text-primary-container">ni napolitain.</span>
            </h2>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed">
              Un passionné issu de multiples cultures, installé au 99 rue de la Montat
              à Saint-Étienne, avec une seule obsession : la pizza napolitaine dans
              sa forme la plus authentique.
            </p>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed italic border-l-4 border-primary pl-6">
              &laquo;&nbsp;Formé par Jordan Tomas, vice-champion du monde de pizza 2013,
              il a fait de la lenteur et de l&apos;exigence les piliers de sa cuisine.&nbsp;&raquo;
            </p>
            <a
              href="#carte"
              className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all duration-300"
            >
              Voir la carte
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden grain-overlay">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-headline text-4xl text-on-surface mb-4 italic">
              Nos piliers
            </h2>
            <p className="font-body text-on-surface-variant max-w-lg mx-auto">
              Les principes qui font de chaque pizza un moment de partage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface-container-lowest p-10 rounded-2xl flex flex-col items-start gap-6 transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="bg-primary-fixed p-4 rounded-full text-primary">
                  {p.icon}
                </div>
                <h3 className="font-headline text-2xl italic">{p.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-headline text-5xl text-on-surface mb-4">
            En&nbsp;
            <span className="italic text-primary">images.</span>
          </h2>
          <p className="font-body text-on-surface-variant text-lg">
            Du pétrissage à la sortie du four, un voyage visuel dans notre cuisine.
          </p>
        </motion.div>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          {/* Large feature */}
          <div className="md:col-span-8 md:row-span-2 rounded-3xl overflow-hidden">
            <Placeholder
              label="Photo : pizza sortant du four, braises visibles, croûte dorée"
              variant="dark"
              className="w-full h-full"
            />
          </div>
          {/* Tall right */}
          <div className="md:col-span-4 md:row-span-3 rounded-3xl overflow-hidden">
            <Placeholder
              label="Photo : ingrédients frais — basilic, mozzarella, tomates"
              variant="olive"
              className="w-full h-full"
            />
          </div>
          {/* Small bottom-left */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden">
            <Placeholder
              label="Photo : pizzaiolo en action"
              variant="terracotta"
              className="w-full h-full"
            />
          </div>
          {/* Small bottom-right */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden">
            <Placeholder
              label="Photo : intérieur chaleureux du restaurant"
              variant="warm"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-outline-variant text-6xl block mb-8 font-headline">&ldquo;</span>
          <blockquote className="font-headline text-3xl md:text-4xl text-on-surface italic leading-snug mb-8">
            La pizza, ce n&apos;est pas juste un plat. C&apos;est un rituel
            de chaleur, de temps et de patience.
          </blockquote>
          <cite className="font-label uppercase tracking-widest text-primary font-bold not-italic">
            — L&apos;Artiste Napolitain
          </cite>
        </motion.div>
      </section>
    </>
  )
}
