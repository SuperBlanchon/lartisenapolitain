'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X } from 'lucide-react'

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

  const sizeClass = size === 'lg' ? 'text-sm px-8 py-4 gap-2.5' : 'text-xs px-5 py-2.5 gap-2'

  const variantClass =
    variant === 'primary'
      ? 'bg-gradient-to-r from-tomato to-tomato-600 text-white hover:shadow-glow-tomato hover:scale-[1.02]'
      : 'bg-transparent text-tomato border border-tomato/30 hover:border-tomato hover:bg-tomato/5'

  return (
    <>
      <button
        onClick={handleClick}
        className={`font-inter uppercase tracking-widest font-semibold rounded-2xl transition-all duration-300 cursor-pointer flex items-center ${sizeClass} ${variantClass}`}
      >
        <ShoppingBag size={size === 'lg' ? 18 : 14} />
        Click &amp; Collect
      </button>

      {/* Toast notification */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-charcoal text-cream font-inter text-sm pl-5 pr-4 py-4 rounded-2xl shadow-soft-xl flex items-center gap-3 border border-cream/10"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-ember to-tomato text-white shrink-0">
              <ShoppingBag size={14} />
            </span>
            <span className="text-cream/80">
              Disponible prochainement — commandez via&nbsp;
              <span className="font-semibold text-cream">Qreat</span>
            </span>
            <button
              onClick={() => setVisible(false)}
              className="ml-2 p-1 rounded-lg hover:bg-cream/10 transition-colors shrink-0"
              aria-label="Fermer"
            >
              <X size={14} className="text-cream/40" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
