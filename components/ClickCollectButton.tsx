'use client'

import { useState } from 'react'

type Props = {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'lg'
}

export default function ClickCollectButton({ variant = 'primary', size = 'sm' }: Props) {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(true)
    setTimeout(() => setVisible(false), 3500)
  }

  const base =
    'font-inter uppercase tracking-widest font-semibold transition-colors cursor-pointer border-2'

  const sizeClass = size === 'lg' ? 'text-sm px-8 py-4' : 'text-xs px-5 py-2.5'

  const variantClass =
    variant === 'primary'
      ? 'bg-tomato text-white border-tomato hover:bg-white hover:text-tomato'
      : 'bg-transparent text-tomato border-tomato hover:bg-tomato hover:text-white'

  return (
    <>
      <button onClick={handleClick} className={`${base} ${sizeClass} ${variantClass}`}>
        Click &amp; Collect
      </button>

      {/* Toast notification */}
      {visible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-charcoal text-cream font-inter text-sm px-6 py-4 border-2 border-cream flex items-center gap-3 whitespace-nowrap"
        >
          <span className="text-ember">●</span>
          Disponible prochainement — commandez via&nbsp;
          <span className="font-semibold">Qreat</span>
        </div>
      )}
    </>
  )
}
