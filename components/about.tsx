"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Crown, Clock } from "lucide-react"

const expertise = [
  {
    icon: Crown,
    title: "Premium Deneyim",
    description: "Lüks araçlar ve birinci sınıf hizmet anlayışı",
  },
  {
    icon: Shield,
    title: "Güvenli Yolculuk",
    description: "Profesyonel sürücüler ve sigortalı araçlar",
  },
  {
    icon: Zap,
    title: "Hızlı Rezervasyon",
    description: "Anında onay ve esnek planlama",
  },
  {
    icon: Clock,
    title: "7/24 Hizmet",
    description: "Kesintisiz destek ve ulaşılabilirlik",
  },
]

export function About() {
  return (
    <section id="hakkimizda" className="relative py-32 bg-neutral-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium">
              Neden Biz
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight text-balance">
            Transfer Hizmetlerinde
            <span className="block text-gold mt-2">Yeni Standart</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Kurumsal ve bireysel müşterilerimize sunduğumuz premium VIP transfer deneyimi 
            ile sektörde fark yaratıyoruz.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 blur-3xl" />
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-2">500+</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-2">50+</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">Lüks Araç</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-2">15K+</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">Tamamlanan Transfer</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-2">99%</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.description}</p>
              
              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+905001234567"
            className="inline-flex items-center gap-3 bg-gold text-black px-10 py-5 font-semibold uppercase tracking-wider hover:bg-white transition-colors group"
          >
            <span>Hemen Rezervasyon Yapın</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
