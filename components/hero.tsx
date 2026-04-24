"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="anasayfa" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-highway-on-a-sunny-day-through-a-city-40035-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 block">
          Premium Transfer Hizmeti
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tight">
          Lüks Ulaşımın <span className="text-gold">Yeni Adresi</span>
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Konfor, güvenlik ve prestij bir arada.
          Her yolculuğunuz özel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#filomuz"
            className="border border-white/40 text-white px-10 py-4 font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Filomuzu Keşfet
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#hakkimizda" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
