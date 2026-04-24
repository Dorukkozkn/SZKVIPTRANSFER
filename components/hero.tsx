"use client"

import { ChevronDown, Play } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  return (
    <section id="anasayfa" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-highway-on-a-sunny-day-through-a-city-40035-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden lg:block" />
      
      {/* Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-white/20" />
        <span className="text-white/40 text-xs uppercase tracking-[0.3em] writing-mode-vertical transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Premium Transfer
        </span>
        <div className="w-px h-16 bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 mb-8">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-white/80 text-sm uppercase tracking-[0.2em]">
            VIP Transfer Hizmetleri
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.95] tracking-tight">
          <span className="block">Lüks Yolculuk</span>
          <span className="block text-gold mt-2">Eşsiz Deneyim</span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Profesyonel ekibimiz ve premium araç filomuzla 
          her yolculuğunuzu ayrıcalıklı kılıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+905001234567"
            className="group bg-gold text-black px-10 py-5 font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center gap-3"
          >
            <span>Rezervasyon</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#filomuz"
            className="group border border-white/30 text-white px-10 py-5 font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            Filomuzu Keşfet
          </a>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <div className="py-6 text-center">
              <div className="text-2xl md:text-3xl font-serif text-gold">50+</div>
              <div className="text-white/50 text-xs uppercase tracking-wider mt-1">Lüks Araç</div>
            </div>
            <div className="py-6 text-center">
              <div className="text-2xl md:text-3xl font-serif text-gold">7/24</div>
              <div className="text-white/50 text-xs uppercase tracking-wider mt-1">Hizmet</div>
            </div>
            <div className="py-6 text-center">
              <div className="text-2xl md:text-3xl font-serif text-gold">99%</div>
              <div className="text-white/50 text-xs uppercase tracking-wider mt-1">Memnuniyet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
        <a href="#hakkimizda" className="flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors group">
          <span className="text-xs uppercase tracking-[0.2em]">Keşfet</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
