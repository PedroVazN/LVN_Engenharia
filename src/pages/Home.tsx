import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import ReformasSection from '../components/ReformasSection'
import EngenheiroLucasSection from '../components/EngenheiroLucasSection'
import { services, differentials } from '../data/services'

export default function Home() {
  useEffect(() => {
    if (window.location.hash === '#reformas') {
      const el = document.getElementById('reformas')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <main>
      <Hero />
      <Section
        id="servicos"
        title="Nossos Serviços"
        subtitle="Soluções técnicas especializadas para sua obra, reforma ou regularização."
      >
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
        <div className="mt-14 text-center">
          <Link to="/servicos" className="btn-outline">
            Ver todos os serviços
          </Link>
        </div>
      </Section>

      <EngenheiroLucasSection />

      <ReformasSection />

      <Section title="Diferenciais" dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {differentials.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 bg-white rounded-xl px-6 py-5 shadow-elevation hover:shadow-elevation-lg border border-gray-100/80 transition-all duration-400"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-semibold text-primary">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Pronto para começar?"
        subtitle="Entre em contato e solicite um orçamento sem compromisso."
      >
        <motion.div
          {...fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/5511970606390"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar orçamento via WhatsApp
          </a>
          <Link to="/contato" className="btn-outline">
            Enviar mensagem
          </Link>
        </motion.div>
      </Section>
    </main>
  )
}
