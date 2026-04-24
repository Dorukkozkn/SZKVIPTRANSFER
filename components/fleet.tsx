"use client"

import { useState } from "react"
import { Users, Wifi, Wind, Music } from "lucide-react"

const vehicles = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    capacity: "3 Kişi",
    features: ["Deri Koltuk", "Klima", "Wi-Fi", "Mini Bar"],
    description: "Üst düzey konfor ve şıklık",
  },
  {
    id: 2,
    name: "Mercedes-Benz V-Class",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
    capacity: "7 Kişi",
    features: ["Deri Koltuk", "Klima", "Wi-Fi", "USB Şarj"],
    description: "Geniş ve konforlu grup transferi",
  },
  {
    id: 3,
    name: "Mercedes-Benz Sprinter VIP",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop",
    capacity: "8 Kişi",
    features: ["VIP Koltuk", "Klima", "Wi-Fi", "Mini Bar"],
    description: "Kurumsal toplantılar için ideal",
  },
  {
    id: 4,
    name: "Mercedes-Benz V-Class Long",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&h=600&fit=crop",
    capacity: "6 Kişi",
    features: ["VIP Koltuk", "Klima", "Wi-Fi", "Masaj"],
    description: "Ekstra konfor ve alan",
  },
  {
    id: 5,
    name: "Mercedes-Maybach S-Class",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    capacity: "3 Kişi",
    features: ["Executive Koltuk", "Klima", "Wi-Fi", "Şampanya"],
    description: "En üst düzey lüks deneyim",
  },
  {
    id: 6,
    name: "Rolls-Royce Phantom",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    capacity: "3 Kişi",
    features: ["Lüks Deri", "Klima", "Wi-Fi", "Özel Hizmet"],
    description: "Eşsiz prestij ve zarafet",
  },
]

const categories = ["VIP", "VIP+", "Ultra VIP"]

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState("VIP")

  const filteredVehicles = vehicles.filter((v) => v.category === activeCategory)

  return (
    <section id="filomuz" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium">
              Filomuz
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            Premium <span className="text-gold">Araç Koleksiyonu</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Her biri özenle seçilmiş, son model lüks araçlarımızla
            unutulmaz bir yolculuk deneyimi yaşayın.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-neutral-100 p-1.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-neutral-900 text-white shadow-lg"
                    : "text-foreground hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="group relative bg-neutral-50 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gold text-black px-4 py-2 text-xs font-bold uppercase tracking-wider">
                    {vehicle.category}
                  </span>
                </div>

                {/* Capacity Badge */}
                <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{vehicle.capacity}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-serif text-foreground mb-2">{vehicle.name}</h3>
                <p className="text-muted-foreground mb-6">{vehicle.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {vehicle.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white border border-border text-muted-foreground px-4 py-2 uppercase tracking-wider"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Aradığınız aracı bulamadınız mı?</p>
          <a
            href="tel:+905001234567"
            className="inline-flex items-center gap-3 border-2 border-foreground text-foreground px-10 py-5 font-semibold uppercase tracking-wider hover:bg-foreground hover:text-white transition-all duration-300"
          >
            <span>Bizi Arayın</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
