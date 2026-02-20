import { motion } from 'framer-motion'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { services, differentials } from '../data/services'

export default function Servicos() {
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
            Nossos Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-blue-100/90 text-lg max-w-2xl leading-relaxed"
          >
            Soluções técnicas especializadas em engenharia civil para obras, reformas e regularizações.
          </motion.p>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </Section>
      <Section title="Por que nos escolher?" dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {differentials.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 bg-white rounded-xl px-6 py-5 shadow-elevation hover:shadow-elevation-lg border border-gray-100/80 transition-all duration-400"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-semibold text-primary">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  )
}
