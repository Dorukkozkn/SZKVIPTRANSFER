"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Calendar, Users, ChevronRight, Baby } from "lucide-react"

export function Hero() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [showPassengers, setShowPassengers] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [babySeat, setBabySeat] = useState(0)

  const totalPassengers = adults + children + infants

  const handleSearch = () => {
    const currentDate = new Date()
    const formattedDate = date || currentDate.toLocaleDateString('tr-TR')
    const formattedTime = currentDate.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    
    const message = `*Yeni Rezervasyon Talebi*
📅 Tarih: ${formattedDate}
⏰ Saat: ${formattedTime}
📍 Nereden: ${from || 'Belirtilmedi'}
📍 Nereye: ${to || 'Belirtilmedi'}
👥 Yolcular:
   - Yetişkin: ${adults}
   - Çocuk: ${children}
   - Bebek: ${infants}
🪑 Bebek Koltuğu: ${babySeat > 0 ? babySeat + ' adet' : 'Hayır'}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/905379592075?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="anasayfa" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-16">
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

        {/* Booking Search Bar */}
        <div className="bg-white rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0 max-w-4xl mx-auto">
          {/* From */}
          <div className="flex-1 flex items-center gap-3 px-4 md:px-6 py-3 md:py-2 md:border-r border-neutral-200">
            <MapPin className="w-5 h-5 text-neutral-400 shrink-0" />
            <div className="text-left flex-1">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Nereden</span>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Havalimanı, Otel..."
                className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* To */}
          <div className="flex-1 flex items-center gap-3 px-4 md:px-6 py-3 md:py-2 md:border-r border-neutral-200">
            <MapPin className="w-5 h-5 text-neutral-400 shrink-0" />
            <div className="text-left flex-1">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Nereye</span>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Varış noktası..."
                className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex-1 flex items-center gap-3 px-4 md:px-6 py-3 md:py-2 md:border-r border-neutral-200">
            <Calendar className="w-5 h-5 text-neutral-400 shrink-0" />
            <div className="text-left flex-1">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Tarih</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm text-neutral-800 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="flex-1 flex items-center gap-3 px-4 md:px-6 py-3 md:py-2 relative">
            <Users className="w-5 h-5 text-neutral-400 shrink-0" />
            <div className="text-left flex-1">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Yolcular</span>
              <button
                type="button"
                onClick={() => setShowPassengers(!showPassengers)}
                className="w-full text-left text-sm text-neutral-800 focus:outline-none flex items-center gap-1"
              >
                {totalPassengers} Kişi{babySeat > 0 ? `, ${babySeat} Koltuk` : ''}
                <ChevronDown className={`w-3 h-3 transition-transform ${showPassengers ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Passenger Dropdown */}
            {showPassengers && (
              <div className="absolute top-full left-0 right-0 mt-4 bg-white border border-neutral-200 rounded-2xl shadow-xl p-5 z-50 space-y-4 min-w-[280px]">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-neutral-800 text-sm font-medium">Yetişkin</span>
                    <span className="text-neutral-400 text-xs block">12+ yaş</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-neutral-800 w-4 text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-neutral-800 text-sm font-medium">Çocuk</span>
                    <span className="text-neutral-400 text-xs block">2-11 yaş</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-neutral-800 w-4 text-center">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-neutral-800 text-sm font-medium">Bebek</span>
                    <span className="text-neutral-400 text-xs block">0-2 yaş</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setInfants(Math.max(0, infants - 1))}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-neutral-800 w-4 text-center">{infants}</span>
                    <button
                      type="button"
                      onClick={() => setInfants(infants + 1)}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Baby Seat */}
                <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                  <div className="flex items-center gap-2">
                    <Baby className="w-4 h-4 text-gold" />
                    <span className="text-neutral-800 text-sm font-medium">Bebek Koltuğu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setBabySeat(Math.max(0, babySeat - 1))}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-neutral-800 w-4 text-center">{babySeat}</span>
                    <button
                      type="button"
                      onClick={() => setBabySeat(babySeat + 1)}
                      className="w-8 h-8 border border-neutral-300 text-neutral-600 rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <span>Ara</span>
            <ChevronRight className="w-4 h-4" />
          </button>
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
