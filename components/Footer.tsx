import ClickCollectButton from './ClickCollectButton'

const hours = [
  { days: 'Lundi – Vendredi', times: '11h00 – 14h00  /  18h00 – 22h00' },
  { days: 'Samedi – Dimanche', times: '18h00 – 22h00' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream border-t-4 border-tomato">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand column */}
          <div>
            <p className="font-playfair font-bold text-cream text-2xl mb-1">
              L&apos;Artiste
            </p>
            <p className="font-playfair font-bold text-tomato text-2xl mb-6">
              Napolitain
            </p>
            <p className="font-inter text-sm text-cream/60 leading-relaxed mb-8">
              Pizzeria artisanale à Saint-Étienne.
              Pizza napolitaine, pâte longue fermentation,
              cuisson au feu de bois.
            </p>
            <ClickCollectButton variant="outline" size="sm" />
          </div>

          {/* Infos column */}
          <div>
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-ember mb-6 font-semibold">
              Nous trouver
            </h3>
            <address className="not-italic font-inter text-sm text-cream/70 leading-loose">
              99 rue de la Montat<br />
              42100 Saint-Étienne<br />
              <a
                href="tel:+33477010122"
                className="text-cream hover:text-tomato transition-colors"
              >
                04 77 01 01 22
              </a>
            </address>
            <p className="font-inter text-xs text-cream/40 mt-4">
              Commande en ligne via&nbsp;
              <span className="font-semibold text-cream/60">Qreat</span>
            </p>
          </div>

          {/* Hours column */}
          <div>
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-ember mb-6 font-semibold">
              Horaires
            </h3>
            <table className="font-inter text-sm text-cream/70 w-full">
              <tbody>
                {hours.map((row) => (
                  <tr key={row.days} className="border-t border-cream/10">
                    <td className="py-3 pr-6 font-medium text-cream/90 whitespace-nowrap">
                      {row.days}
                    </td>
                    <td className="py-3 text-cream/50">{row.times}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="font-inter text-xs text-cream/30 mt-4 italic">
              Horaires valables jusqu&apos;à fin juillet.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-inter text-xs text-cream/30">
            © L&apos;Artiste Napolitain 2024
          </p>
          <nav className="flex gap-6">
            {[
              { label: 'Accueil', href: '#accueil' },
              { label: 'La Carte', href: '#carte' },
              { label: 'Qui sommes-nous\u00a0?', href: '#qui-sommes-nous' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-xs uppercase tracking-widest text-cream/40 hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
