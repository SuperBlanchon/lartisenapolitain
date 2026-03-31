import ClickCollectButton from './ClickCollectButton'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen texture-cream flex items-center overflow-hidden"
    >
      {/* Decorative large circle — flat, no gradient */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[520px] h-[520px] rounded-full bg-tomato opacity-[0.08] pointer-events-none"
      />
      {/* Second smaller circle for depth */}
      <div
        aria-hidden
        className="absolute right-24 top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border-2 border-tomato opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
        {/* Eyebrow */}
        <p className="font-inter text-xs uppercase tracking-[0.35em] text-ember mb-6">
          Pizza napolitaine &middot; Feu de bois &middot; Saint-Étienne
        </p>

        {/* Main title */}
        <h1 className="font-playfair font-bold text-charcoal leading-[0.9] mb-6">
          <span className="block text-[clamp(3.5rem,10vw,8rem)]">L&apos;Art</span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)]">de la</span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)] text-tomato">Pizza.</span>
        </h1>

        {/* Rule */}
        <span className="section-rule" />

        {/* Description */}
        <p className="font-inter text-base md:text-lg text-charcoal/70 max-w-md mb-10 leading-relaxed">
          Pâte à longue fermentation, ingrédients soigneusement sélectionnés,
          cuisson au feu de bois. 23 pizzas — de 9&nbsp;€ à 15&nbsp;€.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <ClickCollectButton variant="primary" size="lg" />
          <a
            href="#carte"
            className="font-inter text-sm uppercase tracking-widest font-semibold border-2 border-charcoal text-charcoal px-8 py-4 hover:bg-charcoal hover:text-cream transition-colors text-center"
          >
            Voir la carte
          </a>
        </div>
      </div>
    </section>
  )
}
