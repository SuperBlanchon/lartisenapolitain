'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X } from 'lucide-react'

type Props = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'lg'
}

export default function ClickCollectButton({ variant = 'primary', size = 'sm' }: Props) {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(true)
    setTimeout(() => setVisible(false), 3500)
  }

  const sizeClass = size === 'lg' ? 'text-base px-8 py-4 gap-2.5' : 'text-sm px-6 py-2.5 gap-2'

  const variantClass =
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary hover:opacity-90'
      : variant === 'outline'
        ? 'border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest'
        : 'text-primary font-semibold hover:text-primary-container'

  return (
    <>
      <button
        onClick={handleClick}
        className={`font-label font-semibold rounded-full transition-all duration-200 cursor-pointer flex items-center active:scale-95 ${sizeClass} ${variantClass}`}
      >
        <ShoppingBag size={size === 'lg' ? 18 : 14} />
        Click &amp; Collect
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-[#1a1c1a] text-white font-body text-sm pl-5 pr-4 py-4 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container text-white shrink-0">
              <ShoppingBag size={14} />
            </span>
            <span className="text-white/80">
              Disponible prochainement — commandez via&nbsp;
              <span className="font-semibold text-white">Qreat</span>
            </span>
            <button
              onClick={() => setVisible(false)}
              className="ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0"
              aria-label="Fermer"
            >
              <X size={14} className="text-white/40" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
