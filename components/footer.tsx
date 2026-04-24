import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-bold tracking-wider">
                SZK<span className="text-gold">VIP</span>TRANSFER
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 max-w-md">
              Premium VIP transfer hizmetleri ile konforlu, güvenli ve 
              prestijli bir yolculuk deneyimi sunuyoruz. Her detay sizin 
              için tasarlandı.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">
              Hızlı Erişim
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#anasayfa" className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="#hakkimizda" className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#filomuz" className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                  Filomuz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">
              İletişim
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+905001234567" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
                  <span className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Telefon</span>
                    <span className="text-white">+90 500 123 45 67</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@szkviptransfer.com" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
                  <span className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-white/30 text-xs uppercase tracking-wider mb-1">E-posta</span>
                    <span className="text-white">info@szkviptransfer.com</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 text-white/50">
                  <span className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Adres</span>
                    <span className="text-white/70">Merkez Mah. Atatürk Cad. No:123, Kadıköy, İstanbul</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} SZKVIPTRANSFER. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                Gizlilik
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
