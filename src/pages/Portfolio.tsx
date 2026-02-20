import { motion } from 'framer-motion'
import Section from '../components/Section'
import PortfolioCard from '../components/PortfolioCard'
import { portfolioItems } from '../data/portfolio'

export default function Portfolio() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white"
          >
            Portfólio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-blue-100/90 text-lg max-w-2xl leading-relaxed"
          >
            Conheça alguns dos trabalhos e serviços realizados pela LVN Engenharia.
          </motion.p>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
