interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index?: number
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-gray-100/80 p-7 md:p-8 shadow-elevation hover:shadow-elevation-2xl hover:border-accent/10 transition-all duration-300 h-full flex flex-col">
      <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-secondary/80 text-[15px] leading-relaxed flex-1">
        {description}
      </p>
    </article>
  )
}
