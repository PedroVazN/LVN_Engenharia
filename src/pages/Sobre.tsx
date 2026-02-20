import { motion } from 'framer-motion'
import Section from '../components/Section'

export default function Sobre() {
  return (
    <main className="pt-24 md:pt-28">
      <Section className="pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center overflow-hidden shadow-elevation"
          >
            <div className="text-6xl font-bold text-primary/20">LVN</div>
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight"
            >
              Sobre a LVN Engenharia
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-secondary/90 leading-relaxed mb-6"
            >
              A LVN Engenharia atua com foco em soluções técnicas em engenharia civil, oferecendo
              serviços de emissão de ART, laudos técnicos, regularização de imóveis e assessoria
              para reformas, sempre com responsabilidade, precisão e conformidade às normas técnicas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              <p className="flex gap-2">
                <span className="font-semibold text-primary min-w-[140px]">Nome:</span>
                <span className="text-secondary">Lucas Vaz</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold text-primary min-w-[140px]">Empresa:</span>
                <span className="text-secondary">LVN Engenharia</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold text-primary min-w-[140px]">Especialização:</span>
                <span className="text-secondary">Engenharia Civil</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold text-primary min-w-[140px]">Região de atendimento:</span>
                <span className="text-secondary">São Paulo e região</span>
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </main>
  )
}
