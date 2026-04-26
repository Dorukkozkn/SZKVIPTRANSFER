import Link from "next/link"

export default function KVKKPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tzoo.13733.0.1135660.iStock-821804760-1-antalya-QJTkPkfLVAnAYOU5EzyfxlLvhDZR5C.jpg"
          alt="SZKVIPTRANSFER KVKK"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-4">
          <p className="text-gold tracking-[0.5em] text-xs md:text-sm uppercase mb-4">
            SZKVIPTRANSFER
          </p>
          <h1 className="text-4xl md:text-6xl font-serif">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Kişisel verilerinizin korunması ve işlenmesine ilişkin bilgilendirme.
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
                Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni
              </h2>
              <p className="text-neutral-600">
                İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması
                Kanunu kapsamında, SZKVIPTRANSFER tarafından sunulan transfer,
                ulaşım ve rezervasyon hizmetleri kapsamında kişisel verilerinizin
                hangi amaçlarla işlendiğini açıklamak amacıyla hazırlanmıştır.
              </p>
            </div>

            <Section title="1. Veri Sorumlusu">
              SZKVIPTRANSFER olarak, tarafımıza ilettiğiniz kişisel veriler
              ilgili mevzuata uygun şekilde işlenmekte ve korunmaktadır.
              Kişisel verileriniz, hizmet süreçlerinin yürütülmesi amacıyla
              sınırlı, ölçülü ve gerekli olduğu kadar işlenir.
            </Section>

            <Section title="2. İşlenen Kişisel Veriler">
              Rezervasyon oluşturmanız halinde; ad, soyad, telefon numarası,
              nereden alınacağınız, bırakılacağınız adres, tarih, saat, yolcu
              sayısı, çocuk veya bebek yolcu bilgisi, bebek koltuğu talebi,
              uçuş kodu, ödeme para birimi tercihi ve tarafınızca paylaşılan
              not bilgileri işlenebilir.
            </Section>

            <Section title="3. Kişisel Verilerin İşlenme Amaçları">
              Kişisel verileriniz; rezervasyon talebinizin alınması, transfer
              hizmetinin planlanması, sizinle iletişime geçilmesi, yolculuk
              detaylarının organize edilmesi, hizmet kalitesinin artırılması,
              müşteri memnuniyetinin sağlanması ve yasal yükümlülüklerin yerine
              getirilmesi amaçlarıyla işlenmektedir.
            </Section>

            <Section title="4. Kişisel Verilerin Aktarılması">
              Kişisel verileriniz, yalnızca hizmetin sağlanması için gerekli
              olduğu ölçüde; sürücüler, operasyon ekibi, iletişim hizmeti
              sağlayıcıları ve yetkili kamu kurumları ile paylaşılabilir.
              Verileriniz hiçbir şekilde izniniz dışında pazarlama amacıyla
              üçüncü kişilerle paylaşılmaz.
            </Section>

            <Section title="5. Verilerin Toplanma Yöntemi">
              Kişisel verileriniz; web sitemiz üzerindeki rezervasyon formu,
              WhatsApp iletişimi, telefon görüşmeleri veya doğrudan tarafınızca
              sağlanan bilgiler aracılığıyla elektronik ortamda toplanmaktadır.
            </Section>

            <Section title="6. Hukuki Sebep">
              Verileriniz; bir hizmet sözleşmesinin kurulması veya ifası,
              veri sorumlusunun meşru menfaati, açık rıza gerektiren hallerde
              açık rızanız ve kanuni yükümlülüklerin yerine getirilmesi hukuki
              sebeplerine dayanılarak işlenmektedir.
            </Section>

            <Section title="7. Saklama Süresi">
              Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca
              saklanır. Hizmet sürecinin tamamlanması ve yasal saklama
              yükümlülüklerinin sona ermesiyle birlikte verileriniz silinir,
              yok edilir veya anonim hale getirilir.
            </Section>

            <Section title="8. KVKK Kapsamındaki Haklarınız">
              KVKK’nın 11. maddesi kapsamında; kişisel verilerinizin işlenip
              işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
              işlenme amacını öğrenme, eksik veya yanlış işlenmiş verilerin
              düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme
              ve kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın
              giderilmesini isteme haklarına sahipsiniz.
            </Section>

            <Section title="9. Başvuru ve İletişim">
              KVKK kapsamındaki talepleriniz için bizimle iletişime
              geçebilirsiniz. Başvurularınız, ilgili mevzuatta belirtilen süreler
              içerisinde değerlendirilerek tarafınıza dönüş yapılacaktır.
            </Section>

            <div className="rounded-2xl bg-neutral-100 p-5 text-sm text-neutral-600">
              Bu metin genel bilgilendirme amacıyla hazırlanmıştır. Şirket
              bilgileri, açık adres, e-posta ve resmi unvan gibi alanlar
              kesinleştiğinde metne eklenmelidir.
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
