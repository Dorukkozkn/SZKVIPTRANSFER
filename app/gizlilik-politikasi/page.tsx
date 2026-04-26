import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tzoo.13733.0.1135660.iStock-821804760-1-antalya-QJTkPkfLVAnAYOU5EzyfxlLvhDZR5C.jpg"
          alt="SZKVIPTRANSFER Gizlilik Politikası"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-4">
          <p className="text-gold tracking-[0.5em] text-xs md:text-sm uppercase mb-4">
            SZKVIPTRANSFER
          </p>
          <h1 className="text-4xl md:text-6xl font-serif">
            Gizlilik Politikası
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Kişisel bilgilerinizin gizliliği ve güvenliği bizim için önemlidir.
          </p>
        </div>
      </section>

      <section className="bg-white text-neutral-800 px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex rounded-full bg-neutral-900 text-white px-5 py-2 text-sm hover:bg-neutral-700 transition"
            >
              Ana Sayfaya Dön
            </Link>
          </div>

          <article className="rounded-3xl border border-neutral-200 shadow-xl p-6 md:p-10 space-y-8 leading-relaxed">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-neutral-950 mb-3">
                Gizlilik Politikası
              </h2>
              <p className="text-neutral-600">
                Bu Gizlilik Politikası, SZKVIPTRANSFER web sitesi üzerinden
                sunulan transfer, ulaşım ve rezervasyon hizmetleri kapsamında
                kullanıcı bilgilerinin nasıl toplandığını, işlendiğini,
                saklandığını ve korunduğunu açıklamak amacıyla hazırlanmıştır.
              </p>
            </div>

            <Section title="1. Toplanan Bilgiler">
              Web sitemiz üzerinden rezervasyon talebi oluşturmanız halinde ad,
              soyad, telefon numarası, alınış ve varış adresi, tarih, saat,
              yolcu sayısı, çocuk veya bebek yolcu bilgisi, bebek koltuğu talebi,
              uçuş kodu, ödeme para birimi tercihi ve tarafınızca paylaşılan not
              bilgileri toplanabilir.
            </Section>

            <Section title="2. Bilgilerin Kullanım Amacı">
              Toplanan bilgiler; rezervasyon talebinizi almak, transfer sürecini
              planlamak, sizinle iletişime geçmek, hizmet detaylarını organize
              etmek, müşteri memnuniyetini sağlamak ve hizmet kalitesini
              artırmak amacıyla kullanılır.
            </Section>

            <Section title="3. Bilgilerin Paylaşımı">
              Kişisel bilgileriniz, hizmetin sağlanması için gerekli olduğu
              ölçüde operasyon ekibi, sürücüler veya ilgili hizmet sağlayıcılarla
              paylaşılabilir. Bilgileriniz izniniz dışında üçüncü kişilerle
              reklam veya pazarlama amacıyla paylaşılmaz.
            </Section>

            <Section title="4. WhatsApp Üzerinden İletişim">
              Web sitemizdeki rezervasyon formu, talep bilgilerinizi WhatsApp
              üzerinden tarafımıza iletmek amacıyla çalışabilir. WhatsApp
              üzerinden paylaşılan bilgiler, ilgili platformun kendi gizlilik
              politikalarına da tabi olabilir.
            </Section>

            <Section title="5. Çerezler ve Teknik Veriler">
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve sitenin düzgün
              çalışmasını sağlamak amacıyla temel teknik veriler ve çerezler
              kullanabilir. Tarayıcı ayarlarınız üzerinden çerez tercihlerinizi
              değiştirebilirsiniz.
            </Section>

            <Section title="6. Bilgilerin Saklanması">
              Kişisel bilgileriniz yalnızca gerekli süre boyunca saklanır.
              Hizmetin tamamlanması, yasal yükümlülüklerin sona ermesi veya
              saklama amacının ortadan kalkması halinde bilgileriniz silinebilir,
              yok edilebilir veya anonim hale getirilebilir.
            </Section>

            <Section title="7. Bilgi Güvenliği">
              SZKVIPTRANSFER, kullanıcı bilgilerinin yetkisiz erişim, kayıp,
              kötüye kullanım veya izinsiz paylaşım risklerine karşı korunması
              için gerekli teknik ve idari önlemleri almaya özen gösterir.
            </Section>

            <Section title="8. Kullanıcı Hakları">
              Kişisel verilerinizle ilgili bilgi talep etme, yanlış veya eksik
              bilgilerin düzeltilmesini isteme, verilerinizin silinmesini talep
              etme ve mevzuat kapsamında diğer haklarınızı kullanma hakkına
              sahipsiniz.
            </Section>

            <Section title="9. Politika Değişiklikleri">
              SZKVIPTRANSFER, bu Gizlilik Politikası’nı gerekli gördüğü
              durumlarda güncelleyebilir. Güncel politika web sitemizde
              yayınlandığı tarihten itibaren geçerli olur.
            </Section>

            <Section title="10. İletişim">
              Gizlilik Politikası ve kişisel verilerinizle ilgili sorularınız
              için bizimle web sitemizde yer alan iletişim kanalları üzerinden
              iletişime geçebilirsiniz.
            </Section>

            <div className="rounded-2xl bg-neutral-100 p-5 text-sm text-neutral-600">
              Son güncelleme: 26.04.2026
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-neutral-950 mb-2">{title}</h3>
      <p className="text-neutral-600">{children}</p>
    </section>
  )
}
