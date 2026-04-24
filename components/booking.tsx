"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Baby, ChevronDown } from "lucide-react"

export function Booking() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [babySeat, setBabySeat] = useState(0)
  const [showPassengers, setShowPassengers] = useState(false)

  const totalPassengers = adults + children + infants

  const handleBooking = () => {
    const currentDate = new Date()
    const formattedDate = date || currentDate.toLocaleDateString('tr-TR')
    const formattedTime = time || currentDate.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    
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
    <section className="bg-neutral-950 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 block">
            Rezervasyon
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            Hemen Yerinizi <span className="text-gold">Ayırtın.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Kesintisiz ve lüks bir VIP ulaşım deneyimi için yolculuğunuzu şimdi planlayın.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
            {/* Date */}
            <div className="lg:col-span-1">
              <label className="flex items-center gap-2 text-gold text-xs tracking-wider uppercase mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Tarih
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border-b border-neutral-700 text-white py-3 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Time */}
            <div className="lg:col-span-1">
              <label className="flex items-center gap-2 text-gold text-xs tracking-wider uppercase mb-2">
                <Clock className="w-3.5 h-3.5" />
                Saat
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent border-b border-neutral-700 text-white py-3 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* From */}
            <div className="lg:col-span-1">
              <label className="flex items-center gap-2 text-gold text-xs tracking-wider uppercase mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Nereden
              </label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Havalimanı / Otel"
                className="w-full bg-transparent border-b border-neutral-700 text-white py-3 placeholder:text-neutral-600 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* To */}
            <div className="lg:col-span-1">
              <label className="flex items-center gap-2 text-gold text-xs tracking-wider uppercase mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Nereye
              </label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Varış Noktası"
                className="w-full bg-transparent border-b border-neutral-700 text-white py-3 placeholder:text-neutral-600 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Passengers Dropdown */}
            <div className="lg:col-span-1 relative">
              <label className="flex items-center gap-2 text-gold text-xs tracking-wider uppercase mb-2">
                <Users className="w-3.5 h-3.5" />
                Yolcular
              </label>
              <button
                type="button"
                onClick={() => setShowPassengers(!showPassengers)}
                className="w-full bg-transparent border-b border-neutral-700 text-white py-3 text-left flex items-center justify-between focus:outline-none focus:border-gold transition-colors"
              >
                <span>{totalPassengers} Kişi</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showPassengers ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {showPassengers && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-700 rounded-sm p-4 z-50 space-y-4">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white text-sm">Yetişkin</span>
                      <span className="text-neutral-500 text-xs block">12+ yaş</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white w-4 text-center">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white text-sm">Çocuk</span>
                      <span className="text-neutral-500 text-xs block">2-11 yaş</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white w-4 text-center">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white text-sm">Bebek</span>
                      <span className="text-neutral-500 text-xs block">0-2 yaş</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white w-4 text-center">{infants}</span>
                      <button
                        type="button"
                        onClick={() => setInfants(infants + 1)}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Baby Seat */}
                  <div className="flex items-center justify-between border-t border-neutral-700 pt-4">
                    <div className="flex items-center gap-2">
                      <Baby className="w-4 h-4 text-gold" />
                      <span className="text-white text-sm">Bebek Koltuğu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setBabySeat(Math.max(0, babySeat - 1))}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white w-4 text-center">{babySeat}</span>
                      <button
                        type="button"
                        onClick={() => setBabySeat(babySeat + 1)}
                        className="w-8 h-8 border border-neutral-600 text-white rounded-full hover:border-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Book Button */}
            <div className="lg:col-span-1 flex items-end">
              <button
                onClick={handleBooking}
                className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-3.5 uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Book Transfer</span>
                <span className="text-[10px] font-normal opacity-70">WhatsApp 7/24</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
