interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export default function Section({ id, title, subtitle, children, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-spacing ${dark ? 'bg-gray-50/80' : 'bg-background'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {(title || subtitle) && (
          <div className="text-center mb-16 md:mb-20">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary mb-4 tracking-tight leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-secondary/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
