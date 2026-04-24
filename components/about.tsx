"use client"

export function About() {
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

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eujcb170f0eb?w=800&h=1000&fit=crop"
                alt="SZKVIPTRANSFER Merkez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-neutral-200">
          <div>
            <span className="text-4xl md:text-5xl font-serif text-gold">500+</span>
            <p className="text-muted-foreground mt-2">Mutlu Müşteri</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-serif text-gold">50+</span>
            <p className="text-muted-foreground mt-2">Lüks Araç</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-serif text-gold">15K+</span>
            <p className="text-muted-foreground mt-2">Tamamlanan Transfer</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-serif text-gold">7/24</span>
            <p className="text-muted-foreground mt-2">Hizmetinizdeyiz</p>
          </div>
        </div>
      </div>
    </section>
  )
}
