import { motion } from 'framer-motion'

interface PortfolioCardProps {
  imageUrl?: string
  title: string
  description: string
  index?: number
}

export default function PortfolioCard({ imageUrl, title, description, index = 0 }: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl border border-gray-100/80 overflow-hidden shadow-elevation hover:shadow-elevation-2xl transition-all duration-500 ease-out"
    >
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="text-primary/20 text-6xl font-bold">LVN</div>
        )}
      </div>
      <div className="p-6 md:p-7">
        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-secondary/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  )
}
