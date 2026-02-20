import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const WHATSAPP_LINK = 'https://wa.me/5511970606390'
const HERO_IMAGE = '/bannerh.png'

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(true)
  const [imgError, setImgError] = useState(false)

  return (
    <section className="relative min-h-[90vh] flex items-center justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {!imgError && (
          <img
            src={HERO_IMAGE}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
        {/* Overlay: stronger when no image; image shows through when present */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 ${imgError ? '' : 'from-primary/92 via-primary/75 to-primary/50'}`}
          aria-hidden
        />
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 max-w-6xl py-28 md:py-36">
        <div className="max-w-xl ml-0 md:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent/90 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Engenharia Civil
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1] tracking-tight"
          >
            LVN Engenharia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-blue-100/95 font-medium mb-4 leading-relaxed"
          >
            Soluções técnicas em engenharia civil com responsabilidade e precisão.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300/90 text-base md:text-lg mb-10 leading-relaxed"
          >
            Emissão de ART, laudos técnicos, regularizações e assessoria para reformas e edificações.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-accent hover:bg-blue-600 text-center"
            >
              Solicitar orçamento
            </a>
            <Link
              to="/servicos"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary text-center"
            >
              Ver serviços
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
