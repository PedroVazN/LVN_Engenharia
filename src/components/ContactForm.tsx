import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ nome: '', telefone: '', email: '', mensagem: '' })
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-elevation"
      >
        <p className="text-green-800 font-medium">Mensagem enviada com sucesso!</p>
        <p className="text-green-700 text-sm mt-2">Entraremos em contato em breve.</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-primary mb-1">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          value={formData.nome}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
          placeholder="Seu nome"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-primary mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            value={formData.telefone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
            placeholder="(11) 99999-9999"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
            placeholder="seu@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-primary mb-1">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          value={formData.mensagem}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 resize-none"
          placeholder="Descreva sua necessidade..."
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Enviar
      </button>
    </motion.form>
  )
}
