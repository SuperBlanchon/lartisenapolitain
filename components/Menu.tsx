'use client'

import { useState } from 'react'
import { pizzasTomate, pizzasCreme, type Pizza } from '@/lib/pizzas'

function PizzaCard({ pizza, accent }: { pizza: Pizza; accent: 'tomato' | 'ember' }) {
  const accentBg = accent === 'tomato' ? 'bg-tomato' : 'bg-ember'

  return (
    <div className="bg-cream border-2 border-charcoal flex flex-col">
      {/* Top accent stripe */}
      <div className={`${accentBg} h-1`} />

      <div className="p-5 flex flex-col flex-1">
        {/* Name + badges */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-playfair font-bold text-charcoal text-lg leading-tight">
            {pizza.name}
          </h3>
          <div className="flex gap-1 shrink-0 mt-0.5">
            {pizza.vegetarian && (
              <span
                title="Végétarien"
                className="font-inter text-[10px] uppercase tracking-wide font-semibold text-white bg-charcoal px-1.5 py-0.5"
              >
                V
              </span>
            )}
            {pizza.calzone && (
              <span
                title="Calzone"
                className="font-inter text-[10px] uppercase tracking-wide font-semibold text-white bg-ember px-1.5 py-0.5"
              >
                C
              </span>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <p className="font-inter text-xs text-charcoal/60 leading-relaxed flex-1 mb-4">
          {pizza.ingredients}
        </p>

        {/* Price */}
        <p
          className={`font-inter font-semibold text-base ${
            accent === 'tomato' ? 'text-tomato' : 'text-ember'
          }`}
        >
          {pizza.price}
        </p>
      </div>
    </div>
  )
}

type Tab = 'tomate' | 'creme'

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('tomate')

  const pizzas = activeTab === 'tomate' ? pizzasTomate : pizzasCreme
  const accent = activeTab === 'tomate' ? 'tomato' : 'ember'

  return (
    <section id="carte" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.35em] text-ember mb-4">
            La carte
          </p>
          <h2 className="font-playfair font-bold text-charcoal text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-4">
            23 pizzas,<br />cuites au feu de bois.
          </h2>
          <span className="section-rule" />
          <p className="font-inter text-sm text-charcoal/50 italic">
            ⓥ V&nbsp;= végétarien &nbsp;&middot;&nbsp; C&nbsp;= calzone
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-10 border-2 border-charcoal w-fit">
          <button
            onClick={() => setActiveTab('tomate')}
            className={`font-inter text-xs uppercase tracking-widest font-semibold px-6 py-3 transition-colors ${
              activeTab === 'tomate'
                ? 'bg-tomato text-white'
                : 'bg-white text-charcoal hover:bg-cream'
            }`}
          >
            Base Tomate&nbsp;
            <span className="opacity-60 font-normal">(14)</span>
          </button>
          <button
            onClick={() => setActiveTab('creme')}
            className={`font-inter text-xs uppercase tracking-widest font-semibold px-6 py-3 transition-colors border-l-2 border-charcoal ${
              activeTab === 'creme'
                ? 'bg-ember text-white'
                : 'bg-white text-charcoal hover:bg-cream'
            }`}
          >
            Base Crème&nbsp;
            <span className="opacity-60 font-normal">(9)</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-charcoal border-2 border-charcoal">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.name} pizza={pizza} accent={accent} />
          ))}
        </div>

        {/* Price range note */}
        <p className="font-inter text-xs text-charcoal/40 mt-6">
          De 9,00&nbsp;€ à 15,00&nbsp;€ &nbsp;&middot;&nbsp; Cuisson au feu de bois
        </p>
      </div>
    </section>
  )
}
