"use client"

import { useState } from "react"
import { X, Users, Wifi, Wind, Music, Shield, Star, Sparkles } from "lucide-react"

interface Vehicle {
  id: number
  name: string
  category: string
  image: string
  capacity: string
  features: string[]
  benefits: string[]
  exclusive: string
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Mercedes-Benz Vito",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop",
    capacity: "3 Kişi",
    features: ["Deri Koltuk", "Klima", "Wi-Fi", "USB Şarj"],
    benefits: ["Profesyonel şoför", "Karşılama hizmeti", "Su ikramı"],
    exclusive: "Business class konfor ile şehir içi transferleriniz için ideal seçim.",
  },
  {
    id: 2,
    name: "Mercedes-Benz V-Class",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop",
    capacity: "7 Kişi",
    features: ["VIP Koltuk", "Klima", "Wi-Fi", "Mini Buzdolabı"],
    benefits: ["Geniş bagaj alanı", "Aile grupları için ideal", "Rahat yolculuk"],
    exclusive: "Grup transferleri ve aile tatilleri için mükemmel konfor.",
  },
  {
    id: 3,
    name: "Mercedes-Benz Vito",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop",
    capacity: "8 Kişi",
    features: ["Executive Koltuk", "Klima", "Wi-Fi", "TV Ekranı"],
    benefits: ["Toplantı yapabilme", "Çalışma masası", "Premium ses sistemi"],
    exclusive: "İş toplantıları ve kurumsal transferler için tasarlandı.",
  },
  {
    id: 4,
    name: "Mercedes-Benz V-Class Long",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&h=500&fit=crop",
    capacity: "6 Kişi",
    features: ["Masaj Koltuğu", "Klima", "Wi-Fi", "Şampanya Soğutucu"],
    benefits: ["Ekstra bacak mesafesi", "Panoramik tavan", "Ambient aydınlatma"],
    exclusive: "Uzun yolculuklarda birinci sınıf deneyim.",
  },
  {
    id: 5,
    name: "Mercedes-Benz Vito",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    capacity: "3 Kişi",
    features: ["First Class Koltuk", "Klima", "Wi-Fi", "Buzdolabı"],
    benefits: ["Özel şoför", "7/24 concierge", "Havalimanı VIP karşılama"],
    exclusive: "Dünyanın en lüks sedanı ile unutulmaz bir deneyim.",
  },
  {
    id: 6,
    name: "Rolls-Royce Phantom",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1563720360137-88e2f579c6e1?w=800&h=500&fit=crop",
    capacity: "3 Kişi",
    features: ["Starlight Tavan", "Klima", "Wi-Fi", "Özel İçecek Servisi"],
    benefits: ["Kırmızı halı karşılama", "Fotoğraf çekimi", "Özel güzergah"],
    exclusive: "Kraliyet ailesinin tercihi. Mutlak lüks ve prestij.",
  },
]

const categories = ["VIP", "VIP+", "Ultra VIP"]

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState("VIP")
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

  const filteredVehicles = vehicles.filter((v) => v.category === activeCategory)

  return (
    <>
      <section id="filomuz" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="text-gold text-sm tracking-[0.2em] uppercase block mb-4">Filomuz</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
                Profesyonel, konforlu hizmet
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 md:gap-4 bg-neutral-100 rounded-full p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${activeCategory === category
                      ? "bg-foreground text-white"
                      : "text-neutral-500 hover:text-foreground"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicles Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className="group cursor-pointer bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      Detayları Gör
                    </span>
                    <span className="text-white text-sm bg-gold px-3 py-1 rounded-full">
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Users className="w-4 h-4" />
                        <span>{vehicle.capacity}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                      <Sparkles className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Detail Popup */}
      {selectedVehicle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedVehicle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup Header Image */}
            <div className="relative aspect-video">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-gold text-sm font-medium">{selectedVehicle.category}</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mt-1">{selectedVehicle.name}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm mt-2">
                  <Users className="w-4 h-4" />
                  <span>{selectedVehicle.capacity}</span>
                </div>
              </div>
            </div>

            {/* Popup Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Exclusive Note */}
              <div className="bg-gold/10 border border-gold/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm leading-relaxed">{selectedVehicle.exclusive}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold" />
                  Araç Özellikleri
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedVehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      {index === 0 && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                      {index === 1 && <Wind className="w-4 h-4 text-neutral-400" />}
                      {index === 2 && <Wifi className="w-4 h-4 text-neutral-400" />}
                      {index === 3 && <Music className="w-4 h-4 text-neutral-400" />}
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  Dahil Hizmetler
                </h4>
                <div className="space-y-2">
                  {selectedVehicle.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const message = `Merhaba, ${selectedVehicle.name} (${selectedVehicle.category}) aracı hakkında bilgi almak istiyorum.`
                  const phone = "905379592075"
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
                }}
                className="w-full bg-gold hover:bg-gold/90 text-black font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Bu Aracı Rezerve Et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
