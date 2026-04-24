"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="anasayfa" className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium">
          VIP Ulaşım Hizmetleri
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
          Konforunuz İçin
          <br />
          <span className="text-gold">Yola Çıkıyoruz</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          SZKVIPTRANSFER olarak, lüks araç filomuz ve profesyonel ekibimizle
          size en konforlu ve güvenli seyahat deneyimini sunuyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#iletisim"
            className="bg-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors"
          >
            Teklif Alın
          </a>
          <a
            href="#hizmetler"
            className="border-2 border-white text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            Hizmetlerimiz
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#hakkimizda" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}
