import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-wider">
                SZK<span className="text-gold">VIP</span>TRANSFER
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Profesyonel VIP transfer ve personel taşımacılığı hizmetleri ile
              konforlu ve güvenli seyahat deneyimi sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#anasayfa" className="text-white/60 hover:text-gold transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="#hakkimizda" className="text-white/60 hover:text-gold transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="text-white/60 hover:text-gold transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="#filomuz" className="text-white/60 hover:text-gold transition-colors">
                  Filomuz
                </Link>
              </li>
              <li>
                <Link href="#referanslar" className="text-white/60 hover:text-gold transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="#iletisim" className="text-white/60 hover:text-gold transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hizmetler" className="text-white/60 hover:text-gold transition-colors">
                  VIP Transfer
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-white/60 hover:text-gold transition-colors">
                  Personel Taşımacılığı
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-white/60 hover:text-gold transition-colors">
                  Havalimanı Transferi
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-white/60 hover:text-gold transition-colors">
                  Şehirlerarası Transfer
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-white/60 hover:text-gold transition-colors">
                  Etkinlik Taşımacılığı
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-white/60 hover:text-gold transition-colors">
                  Araç Kiralama
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">İletişim Bilgileri</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Merkez Mahallesi, Atatürk Caddesi No:123
                  Kadıköy, İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+905001234567" className="text-white/60 hover:text-gold transition-colors">
                  +90 500 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@szkviptransfer.com" className="text-white/60 hover:text-gold transition-colors">
                  info@szkviptransfer.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} SZKVIPTRANSFER. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
