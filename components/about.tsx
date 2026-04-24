import { Shield, Clock, Award, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "15+", label: "Yıllık Deneyim" },
  { icon: Shield, value: "100+", label: "Kurumsal Müşteri" },
  { icon: Clock, value: "7/24", label: "Hizmet" },
  { icon: Award, value: "50+", label: "Araçlık Filo" },
]

export function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Hakkımızda
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Yola Çıkmanın
              <br />
              <span className="text-gold">Anlamı</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SZKVIPTRANSFER olarak, 15 yılı aşkın süredir turizm ve personel taşımacılığı
              sektöründe hizmet vermekteyiz. Müşteri memnuniyetini her zaman ön planda
              tutarak, güvenli ve konforlu ulaşım çözümleri sunmaktayız.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Modern araç filomuz, deneyimli sürücü kadromuz ve profesyonel hizmet
              anlayışımızla Türkiye genelinde birçok kurumsal firmanın güvenilir
              çözüm ortağı olmaktan gurur duyuyoruz.
            </p>
            <a
              href="#iletisim"
              className="inline-block bg-foreground text-background px-8 py-4 font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              Bizimle İletişime Geçin
            </a>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
                alt="Lüks araç"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 hidden md:block">
                <p className="text-black font-serif text-4xl font-bold">15+</p>
                <p className="text-black/80 uppercase text-sm tracking-wider">Yıllık Tecrübe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-serif text-foreground mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
