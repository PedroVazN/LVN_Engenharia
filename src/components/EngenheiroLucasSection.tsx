import { motion } from 'framer-motion'
import lucasPortrait from '../assets/Lucas.jpg'
import lucasObra from '../assets/LucasObra.jpg'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function EngenheiroLucasSection() {
  return (
    <section id="engenheiro" className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div {...fadeIn} className="text-center mb-14 md:mb-18">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Quem atende
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary tracking-tight">
            Engenheiro Lucas Vaz
          </h2>
          <p className="text-secondary/80 text-lg max-w-2xl mx-auto mt-3">
            Responsável técnico pela LVN Engenharia
          </p>
        </motion.div>

        {/* Layout 2x2 em X: foto retrato (top-left), texto (top-right e bottom-left), foto obra (bottom-right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-center md:items-stretch">
          {/* Top-left: Retrato profissional - menor e centralizado no mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg w-full max-w-[240px] md:max-w-none mx-auto"
          >
            <img
              src={lucasPortrait}
              alt="Lucas Vaz - Engenheiro Civil"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Top-right: Nome e credenciais - centralizado no mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center order-2 md:order-none text-center md:text-left max-w-md mx-auto md:mx-0 w-full"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-3">
              Lucas Vaz
            </h3>
            <p className="text-accent font-semibold mb-4">Engenharia Civil</p>
            <p className="text-secondary/80 leading-relaxed">
              Engenheiro registrado no CREA-SP, com atuação em emissão de ART, laudos técnicos,
              regularização de imóveis e assessoria para reformas. Comprometido com normas técnicas
              e com atendimento ágil e transparente em São Paulo e região.
            </p>
          </motion.div>

          {/* Bottom-left: Texto institucional - centralizado no mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center order-4 md:order-none text-center md:text-left max-w-md mx-auto md:mx-0 w-full"
          >
            <p className="text-secondary/80 leading-relaxed">
              Atuando de forma direta em obra e em escritório, o engenheiro Lucas une experiência
              de campo e rigor técnico para entregar soluções que atendem às exigências legais
              e às necessidades do seu projeto.
            </p>
          </motion.div>

          {/* Bottom-right: Lucas na obra - menor e centralizado no mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg order-3 md:order-none w-full max-w-[240px] md:max-w-none mx-auto"
          >
            <img
              src={lucasObra}
              alt="Lucas Vaz em obra - Engenharia Civil"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
