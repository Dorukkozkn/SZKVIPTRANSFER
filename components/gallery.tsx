"use client"

import { useEffect, useState } from "react"

const antalyaImages = [
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=600&fit=crop",
    alt: "Antalya Kaleiçi"
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
    alt: "Antalya Sahil"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
    alt: "Antalya Otel"
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=600&fit=crop",
    alt: "Antalya Lüks Otel"
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop",
    alt: "Antalya Resort"
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop",
    alt: "Antalya Tatil"
  }
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % antalyaImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-10">
        <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
          Antalya
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Eşsiz Destinasyonlar
        </h2>
      </div>

      {/* Sliding Gallery */}
      <div className="relative w-full">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {antalyaImages.map((image, index) => (
            <div key={index} className="min-w-full">
              <div className="aspect-[21/9] md:aspect-[3/1]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {antalyaImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gold w-6' 
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Fotoğraf ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
