import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_LINK = 'https://wa.me/5511970606390'
const SCROLL_THRESHOLD = 80

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#reformas', label: 'Reformas' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const location = useLocation()

  const showLightHeader = location.pathname === '/' && isAtTop

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < SCROLL_THRESHOLD)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        showLightHeader
          ? 'bg-transparent border-b border-white/10 text-white shadow-none'
          : 'bg-background/98 border-b border-gray-100/80 shadow-lg text-secondary'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between h-20 md:h-24 py-2">
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src={showLightHeader ? '/LOGO_BRANCA.png' : '/LOGO_ESCURA.png'}
              alt="LVN Engenharia"
              className="h-20 md:h-24 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-300 ${
                  showLightHeader
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === link.to || (link.to === '/#reformas' && location.pathname === '/')
                      ? 'text-accent'
                      : 'text-secondary hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={
                showLightHeader
                  ? 'inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-semibold text-primary bg-white text-sm hover:bg-white/95 transition-all duration-300'
                  : 'btn-primary text-sm'
              }
            >
              Solicitar orçamento
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              showLightHeader ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-gray-100'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden overflow-hidden border-t ${showLightHeader ? 'border-white/10 bg-primary/95' : 'border-gray-100 bg-background'}`}
            >
              <div className="py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                      showLightHeader
                        ? 'text-white hover:bg-white/10'
                        : location.pathname === link.to || link.to === '/#reformas'
                          ? 'bg-accent/10 text-accent'
                          : 'text-secondary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mx-4 mt-2 btn-primary text-center"
                >
                  Solicitar orçamento
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
