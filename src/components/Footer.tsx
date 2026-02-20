import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/LOGO_BRANCA.png"
                alt="LVN Engenharia"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">Engenharia Civil</p>
            <p className="text-gray-300 text-sm mt-1 leading-relaxed">São Paulo - SP</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-tight">Contato</h4>
            <p className="text-gray-300 text-sm leading-relaxed">CREA-SP: 5070822286</p>
            <a
              href="mailto:lvnengenharia@gmail.com"
              className="text-gray-300 text-sm hover:text-accent transition-colors duration-300 block mt-1"
            >
              lvnengenharia@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-tight">Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">Home</Link>
              <Link to="/#reformas" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">Reformas</Link>
              <Link to="/sobre" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">Sobre</Link>
              <Link to="/servicos" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">Serviços</Link>
              <Link to="/portfolio" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">Portfólio</Link>
              <Link to="/contato" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">Contato</Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} LVN Engenharia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
