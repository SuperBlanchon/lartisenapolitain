const highlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Formé par un vice-champion du monde',
    body: 'Jordan Tomas, vice-champion du monde de pizza 2013 — un savoir-faire transmis avec rigueur.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Pâte à longue fermentation',
    body: 'Plusieurs jours de repos pour une pâte légère, alvéolée et digeste. La patience, au cœur de l\'art.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 22C12 22 4 16 4 9a8 8 0 0 1 16 0c0 7-8 13-8 13z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Cuisson au feu de bois',
    body: 'Une croûte charbonnée, un cœur moelleux. Le four à bois donne à chaque pizza son caractère unique.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '23 pizzas, 3 modes de service',
    body: 'Sur place, livraison, ou Click & Collect. 14 pizzas base tomate, 9 base crème, dont 7 options végétariennes.',
  },
]

export default function About() {
  return (
    <section
      id="qui-sommes-nous"
      className="bg-charcoal text-cream"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-inter text-xs uppercase tracking-[0.35em] text-ember mb-4">
            Qui sommes-nous&nbsp;?
          </p>
          <h2 className="font-playfair font-bold text-cream text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-6">
            Ni artiste,<br />ni napolitain.
          </h2>
          <span className="block w-12 h-0.5 bg-tomato mb-8" />
          <p className="font-inter text-base md:text-lg text-cream/70 leading-relaxed">
            Un passionné issu de multiples cultures, installé à Saint-Étienne avec
            une seule obsession&nbsp;: la pizza napolitaine dans sa forme la plus authentique.
            Formé par Jordan Tomas, vice-champion du monde 2013, il a fait de la lenteur
            et de l&apos;exigence les piliers de sa cuisine.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t-2 border-cream/10">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-8 border-b-2 border-r-0 border-cream/10 lg:border-b-0 lg:border-r-2 last:border-0"
            >
              <div className="text-ember mb-4">{h.icon}</div>
              <h3 className="font-playfair font-semibold text-cream text-lg mb-3 leading-snug">
                {h.title}
              </h3>
              <p className="font-inter text-sm text-cream/60 leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
