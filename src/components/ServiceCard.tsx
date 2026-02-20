import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index?: number
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl border border-gray-100/80 p-7 md:p-8 shadow-elevation hover:shadow-elevation-2xl hover:border-accent/10 transition-all duration-500 ease-out h-full flex flex-col"
    >
      <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-secondary/80 text-[15px] leading-relaxed flex-1">
        {description}
      </p>
    </motion.article>
  )
}
