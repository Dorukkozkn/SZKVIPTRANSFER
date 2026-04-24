"use client"

import { useState } from "react"

const vehicles = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&bg=white",
    capacity: "3 Kişi",
  },
  {
    id: 2,
    name: "Mercedes-Benz V-Class",
    category: "VIP",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&bg=white",
    capacity: "7 Kişi",
  },
  {
    id: 3,
    name: "Mercedes-Benz Sprinter VIP",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop&bg=white",
    capacity: "8 Kişi",
  },
  {
    id: 4,
    name: "Mercedes-Benz V-Class Long",
    category: "VIP+",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&h=500&fit=crop&bg=white",
    capacity: "6 Kişi",
  },
  {
    id: 5,
    name: "Mercedes-Maybach S-Class",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&bg=white",
    capacity: "3 Kişi",
  },
  {
    id: 6,
    name: "Rolls-Royce Phantom",
    category: "Ultra VIP",
    image: "https://images.unsplash.com/photo-1563720360137-88e2f579c6e1?w=800&h=500&fit=crop&bg=white",
    capacity: "3 Kişi",
  },
]

const categories = ["VIP", "VIP+", "Ultra VIP"]

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState("VIP")

  const filteredVehicles = vehicles.filter((v) => v.category === activeCategory)

  return (
    <section id="filomuz" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span className="text-gold text-sm tracking-[0.2em] uppercase">
            Filo
          </span>
        </div>

        {/* Title and Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-md">
            Profesyonel,
            <br />
            konforlu hizmet
          </h2>

          {/* Category Filter */}
          <div className="flex items-center gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-base md:text-lg transition-all duration-300 ${
                  activeCategory === category
                    ? "text-foreground font-medium"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] bg-neutral-50 overflow-hidden mb-6">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Vehicle Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-foreground">
                    {vehicle.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{vehicle.capacity}</span>
                </div>
                <span className="text-sm text-gold font-medium">
                  {vehicle.category}
                </span>
              </div>
              
              {/* Divider Line */}
              <div className="mt-4 h-px bg-neutral-200 w-full">
                <div className="h-px bg-gold w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
