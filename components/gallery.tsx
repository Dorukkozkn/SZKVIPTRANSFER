"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://blog.obilet.com/wp-content/uploads/2021/11/anagorsel-min-scaled.jpeg",
    alt: "antakla1432"
  },
  {
    src: "https://cdn.sanity.io/images/nxpteyfv/goguides/7da3e0d858268e0c7395f471a02a0067bed0c33f-1600x1066.jpg",
    alt: "antakla14"
  },
  {
    src: "https://www.villanizburada.com/assets/images/blog/big/side_antik_kenti_drone_cekim_manzarasi.jpg",
    alt: "antakla1"
  },
  {
    src: "https://content.skyscnr.com/m/02050fae0e05eb3b/original/GettyImages-186915211_doc.jpg?resize=1224%3Aauto",
    alt: "antakla121321"
  },
  {
    src: "https://gezimanya.com/sites/default/files/styles/800x600_/public/gezilecek-yerler/2019-12/antalya-kaleici-1024x640.jpg",
    alt: "antakla1341"
  },
  {
    src: "https://www.thelandoflegends.com/ee244d9090c23c4c27d12c00baf12f3e/1/page/117/antalya-gezilecek-yerler-ve-aktiviteler-181.webp?w=1280",
    alt: "antakla1ds"
  }
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const maxIndex = galleryImages.length - 3

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const visibleImages = galleryImages.slice(currentIndex, currentIndex + 3)

  // Handle wrap-around for last items
  const displayImages = visibleImages.length < 3
    ? [...visibleImages, ...galleryImages.slice(0, 3 - visibleImages.length)]
    : visibleImages

  return (
    <section className="py-20 md:py-28 bg-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Gezilecek Yerler
          </h2>
        </div>

        {/* Gallery Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-700" />
          </button>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {displayImages.map((image, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-6 h-6 text-neutral-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                ? 'bg-gold w-6'
                : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              aria-label={`Sayfa ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
