"use client"

export function About() {
  return (
    <section id="hakkimizda" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 md:mb-20">
          <span className="text-foreground font-medium tracking-wide">
            Yola cikmanin anlami...
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl md:text-6xl font-serif text-neutral-300">01</span>
            <span className="text-neutral-400 text-lg">/04</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
              SZKVIPTRANSFER ile yola cikmanin anlami;
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Tecrubenin ve surekli gelisimin yol haritasiyla, her zaman dogru yonde 
                oldugunuzu bilmektir...
              </p>
              
              <p>
                SZKVIPTRANSFER; sektorunde yillardir edindigi deneyimle, yolculuga anlam katmak, 
                tasimacililikta deger yaratmak uzere yola cikti...
              </p>
              
              <p>
                Ve surekli gelisim ilkesiyle, her gecen gun, hizmeti, daha anlamli 
                kilmak icin yol aliyor...
              </p>
            </div>

            {/* Quote with gold border */}
            <div className="border-l-4 border-gold pl-6 py-2 mt-10">
              <p className="text-2xl md:text-3xl font-serif text-foreground leading-snug">
                Biz, ulasmak istediklerinizden yola cikiyoruz!
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed pt-4">
              <p>
                SZKVIPTRANSFER; turizm, organizasyon, filo ve premium tasmacilik alanlarinda, 
                ozellikle nitelikli insan kaynaklari ve prestijle konforu birarada sunan 
                ar-ge ve inovasyon yatirimlariyla, sizi kosulsuz memnuniyet odakli 
                bir yolculuga davet ediyor.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1449965408869-euj3c170f0eb?w=800&h=1000&fit=crop"
                alt="SZKVIPTRANSFER Merkez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
