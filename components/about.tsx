"use client"

import { useEffect, useState } from "react"

const aboutImages = [
  "https://i.ibb.co/fzVg5Bmz/Whats-App-mage-2026-04-07-at-22-43-46.jpg",
  "https://i.ibb.co/RT3v4Ggy/MG-7118.jpg",
  "https://i.ibb.co/8LYjXS2d/02ce76ab-424d-4e0c-8e73-87c46bd66536.jpg",
  "https://i.ibb.co/TBBtNpGV/MG-4662.jpg",
  "https://i.ibb.co/8n9wSWN0/4957781b-bee4-4872-82f4-18f9a27f1e85.jpg",
]

export function About() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hakkimizda" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span className="text-gold text-sm tracking-[0.2em] uppercase">
            Yola çıkmanın anlamı...
          </span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
              SZKVIPTRANSFER ile yola çıkmanın anlamı;
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Tecrübenin ve sürekli gelişimin yol haritasıyla, her zaman doğru yönde
                olduğunuzu bilmektir...
              </p>

              <p>
                SZKVIPTRANSFER; sektöründe yıllardır edindiği deneyimle, yolculuğa anlam katmak,
                taşımacılıkta değer yaratmak üzere yola çıktı...
              </p>

              <p>
                Ve sürekli gelişim ilkesiyle, her geçen gün, hizmeti, daha anlamlı
                kılmak için yol alıyor...
              </p>
            </div>

            {/* Quote with gold border */}
            <div className="border-l-4 border-gold pl-6 py-2 mt-10">
              <p className="text-2xl md:text-3xl font-serif text-foreground leading-snug">
                Biz, ulaşmak istediklerinizden yola çıkıyoruz!
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed pt-4">
              <p>
                SZKVIPTRANSFER; turizm, organizasyon, filo ve premium taşımacılık alanlarında,
                özellikle nitelikli insan kaynakları ve prestijle konforu birarada sunan
                ar-ge ve inovasyon yatırımlarıyla, sizi koşulsuz memnuniyet odaklı
                bir yolculuğa davet ediyor.
              </p>
            </div>
          </div>

          {/* Right Column - Image Slider */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100 relative">
              {aboutImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`SZKVIPTRANSFER Görsel ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "w-8 bg-gold"
                      : "w-2 bg-neutral-300"
                  }`}
                  aria-label={`Görsel ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
