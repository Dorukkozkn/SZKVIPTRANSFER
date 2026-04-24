"use client"

const references = [
  { name: "Kurumsal A", logo: "A" },
  { name: "Kurumsal B", logo: "B" },
  { name: "Kurumsal C", logo: "C" },
  { name: "Kurumsal D", logo: "D" },
  { name: "Kurumsal E", logo: "E" },
  { name: "Kurumsal F", logo: "F" },
  { name: "Kurumsal G", logo: "G" },
  { name: "Kurumsal H", logo: "H" },
]

export function References() {
  return (
    <section id="referanslar" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Referanslarımız
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Güvenilir <span className="text-gold">İş Ortaklarımız</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen kurum ve kuruluşlarına hizmet vermekten gurur duyuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {references.map((ref, index) => (
            <div
              key={index}
              className="bg-white p-8 flex items-center justify-center border border-border hover:border-gold/50 hover:shadow-lg transition-all group"
            >
              <div className="w-20 h-20 bg-neutral-100 group-hover:bg-gold/10 rounded-full flex items-center justify-center transition-colors">
                <span className="text-3xl font-serif text-gold">{ref.logo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-neutral-900 p-12 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gold flex items-center justify-center">
              <span className="text-4xl text-black font-serif">&ldquo;</span>
            </div>
          </div>
          <p className="text-white/80 text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto mt-4">
            SZKVIPTRANSFER ile çalışmaya başladığımızdan beri personel taşımacılığında
            hiçbir aksaklık yaşamadık. Profesyonel ekip ve kaliteli hizmet anlayışları
            için teşekkür ederiz.
          </p>
          <div className="mt-8">
            <p className="text-gold font-semibold">Ahmet Yılmaz</p>
            <p className="text-white/60 text-sm">İK Direktörü - ABC Holding</p>
          </div>
        </div>
      </div>
    </section>
  )
}
