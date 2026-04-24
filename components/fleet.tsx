"use client"

import { useState } from "react"
import { Users, Briefcase, Wifi, Snowflake } from "lucide-react"

const vehicles = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    capacity: "3 Kişi",
    features: ["Deri Koltuk", "Klima", "Wi-Fi", "Mini Bar"],
  },
  {
    id: 2,
    name: "Mercedes-Benz V-Class",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop",
    capacity: "7 Kişi",
    features: ["Deri Koltuk", "Klima", "Wi-Fi", "USB Şarj"],
  },
  {
    id: 3,
    name: "Mercedes-Benz Sprinter VIP",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop",
    capacity: "8 Kişi",
    features: ["VIP Koltuk", "Klima", "Wi-Fi", "Mini Bar"],
  },
  {
    id: 4,
    name: "Mercedes-Benz V-Class Long",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&h=400&fit=crop",
    capacity: "6 Kişi",
    features: ["VIP Koltuk", "Klima", "Wi-Fi", "Masaj"],
  },
  {
    id: 5,
    name: "Mercedes-Maybach S-Class",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    capacity: "3 Kişi",
    features: ["Executive Koltuk", "Klima", "Wi-Fi", "Şampanya"],
  },
  {
    id: 6,
    name: "Rolls-Royce Phantom",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    capacity: "3 Kişi",
    features: ["Lüks Deri", "Klima", "Wi-Fi", "Özel Hizmet"],
  },
]

const categories = ["VIP", "VIP+", "Ultra VIP"]

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState("VIP")

  const filteredVehicles = vehicles.filter((v) => v.category === activeCategory)

  return (
    <section id="filomuz" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Filomuz
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Modern <span className="text-gold">Araç Filosu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Son model, bakımlı ve konforlu araçlarımızla güvenli yolculuklar sunuyoruz.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? "bg-gold text-black"
                  : "bg-neutral-100 text-foreground hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-white border border-border overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 text-xs font-semibold uppercase">
                  {vehicle.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{vehicle.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{vehicle.capacity}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-neutral-100 text-muted-foreground px-2 py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
