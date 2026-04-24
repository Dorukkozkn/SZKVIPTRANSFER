"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Havalimanı transfer hizmeti nasıl çalışıyor?",
    answer: "Rezervasyon yaptıktan sonra, belirlenen saatte şoförümüz sizi karşılama noktasında isminizin yazılı olduğu tabela ile bekler. Uçuşunuzu takip ediyoruz, bu yüzden gecikmelerden endişelenmenize gerek yok."
  },
  {
    question: "Bebek koltuğu temin edebilir misiniz?",
    answer: "Evet, rezervasyon sırasında bebek koltuğu talebinizi belirtmeniz yeterlidir. 0-2 yaş için bebek koltuğu ve 2-6 yaş için çocuk koltuğu seçeneklerimiz mevcuttur. Bu hizmet ücretsiz olarak sunulmaktadır."
  },
  {
    question: "İptal ve değişiklik politikanız nedir?",
    answer: "Transferden 24 saat öncesine kadar yapılan iptallerde tam geri ödeme yapılmaktadır. Son 24 saat içinde yapılan iptallerde %50 ücret uygulanır. Tarih ve saat değişiklikleri ücretsizdir."
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Nakit (TL, EUR, USD), kredi kartı ve banka havalesi ile ödeme yapabilirsiniz. Kurumsal müşterilerimiz için faturalı ödeme seçeneği de mevcuttur."
  },
  {
    question: "Gece transferleri için ek ücret var mı?",
    answer: "22:00 - 06:00 saatleri arasındaki transferlerde %20 gece tarifesi uygulanmaktadır. Bu ücret, şoförlerimizin gece mesai ücretini karşılamak amacıyla alınmaktadır."
  },
  {
    question: "Araçlarınızda Wi-Fi ve su var mı?",
    answer: "Evet, tüm VIP araçlarımızda ücretsiz Wi-Fi, soğuk su ve meşrubat ikramı bulunmaktadır. Ultra VIP araçlarımızda ek olarak tablet, şarj istasyonu ve mini bar hizmeti sunuyoruz."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
            Yardım
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-muted-foreground">
            Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-neutral-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-medium text-foreground group-hover:text-gold transition-colors pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
