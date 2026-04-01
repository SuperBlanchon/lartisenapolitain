type Variant = 'terracotta' | 'olive' | 'warm' | 'dark' | 'cream'

const variantStyles: Record<Variant, { bg: string; text: string }> = {
  terracotta: { bg: 'bg-[#ddc0b9]', text: 'text-[#57423c]' },
  olive: { bg: 'bg-[#e0e5cc]', text: 'text-[#444937]' },
  warm: { bg: 'bg-[#efeeeb]', text: 'text-[#8a726b]' },
  dark: { bg: 'bg-[#57423c]', text: 'text-[#ddc0b9]' },
  cream: { bg: 'bg-[#f4f3f1]', text: 'text-[#8a726b]' },
}

export default function Placeholder({
  label,
  variant = 'terracotta',
  className = '',
}: {
  label: string
  variant?: Variant
  className?: string
}) {
  const { bg, text } = variantStyles[variant]
  return (
    <div className={`${bg} flex items-center justify-center ${className}`}>
      <span className={`text-xs font-label text-center opacity-70 px-4 leading-relaxed ${text}`}>
        {label}
      </span>
    </div>
  )
}
