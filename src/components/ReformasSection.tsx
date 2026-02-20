import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const REFORMAS_IMAGES = Array.from({ length: 27 }, (_, i) => `/Reformas/ref${i + 1}.jpeg`)
const REFORMAS_VIDEOS = Array.from({ length: 4 }, (_, i) => ({
  src: `/Reformas/video_ref${i + 1}.mp4`,
  title: `Reforma ${i + 1}`,
}))

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function ReformasSection() {
  const [lightbox, setLightbox] = useState<{ type: 'image' | 'video'; src: string } | null>(null)

  return (
    <section id="reformas" className="section-spacing bg-gray-50/80">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary mb-4 tracking-tight">
            Reformas e Obras
          </h2>
          <p className="text-secondary/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Acompanhe alguns de nossos trabalhos em reformas e obras com qualidade e responsabilidade técnica.
          </p>
        </motion.div>

        {/* Vídeos em destaque */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
        >
          {REFORMAS_VIDEOS.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden shadow-elevation hover:shadow-elevation-2xl transition-all duration-500 bg-primary/5 border border-gray-100"
            >
              <div className="aspect-video bg-primary/10 relative">
                <video
                  src={video.src}
                  title={video.title}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  poster={REFORMAS_IMAGES[index]}
                >
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <div className="p-4">
                <p className="font-semibold text-primary">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Galeria de imagens */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {REFORMAS_IMAGES.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.03, 0.4), duration: 0.4 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightbox({ type: 'image', src })}
              className="aspect-square rounded-xl overflow-hidden shadow-elevation hover:shadow-elevation-xl transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <img
                src={src}
                alt={`Reforma ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              {lightbox.type === 'image' ? (
                <img
                  src={lightbox.src}
                  alt="Ampliada"
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-[85vh] rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
