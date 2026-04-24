import { Car, Briefcase, Plane, MapPin, Users, Calendar } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Personel Taşımacılığı",
    description:
      "Kurumsal firmalar için düzenli personel servis hizmetleri. Güvenli ve zamanında ulaşım garantisi.",
  },
  {
    icon: Car,
    title: "VIP Transfer",
    description:
      "Özel misafirleriniz için lüks araçlarla konforlu ve prestijli transfer hizmetleri.",
  },
  {
    icon: Plane,
    title: "Havalimanı Transferi",
    description:
      "Tüm havalimanlarına 7/24 güvenilir ve konforlu transfer hizmeti sunuyoruz.",
  },
  {
    icon: MapPin,
    title: "Şehirlerarası Transfer",
    description:
      "Türkiye genelinde şehirlerarası konforlu ve güvenli ulaşım çözümleri.",
  },
  {
    icon: Users,
    title: "Toplantı & Etkinlik",
    description:
      "Kurumsal toplantılar, kongreler ve özel etkinlikler için grup taşımacılığı.",
  },
  {
    icon: Calendar,
    title: "Uzun Dönem Kiralama",
    description:
      "İşletmeler için şoförlü veya şoförsüz uzun dönemli araç kiralama hizmetleri.",
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Hizmetlerimiz
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Size Özel <span className="text-gold">Çözümler</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Her ihtiyaca uygun, profesyonel ve güvenilir ulaşım hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-neutral-800/50 p-8 hover:bg-neutral-800 transition-all duration-300 border border-neutral-700 hover:border-gold/50"
            >
              <service.icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
