import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

const TiktokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.54-.05z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif tracking-wide text-white">
                SZKVIPTRANSFER
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-6">
              Premium VIP transfer hizmetleri ile konforlu, güvenli ve 
              prestijli bir yolculuk deneyimi sunuyoruz.
            </p>
{/* Social Media */}
<div className="flex gap-4">
  <a href="https://www.instagram.com/szkviptransfer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
    <Instagram className="w-4 h-4" />
  </a>
  <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
    <Facebook className="w-4 h-4" />
  </a>
  <a href="https://tiktok.com/@szk.vip" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
    <TiktokIcon />
  </a>
</div>

{/* Email */}
<a href="mailto:szkviptransfer@hotmail.com" className="mt-4 text-white/50 hover:text-gold transition-colors flex items-center gap-2">
  <Mail className="w-4 h-4" />
  <span className="text-sm">szkviptransfer@hotmail.com</span>
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6">Hızlı Bağlantılar</h4>
            <div className="space-y-3">
              <a href="#hakkimizda" className="block text-white/50 hover:text-gold transition-colors">
                Hakkımızda
              </a>
              <a href="#filomuz" className="block text-white/50 hover:text-gold transition-colors">
                Filomuz
              </a>
              <a href="https://wa.me/905379592075" className="block text-white/50 hover:text-gold transition-colors">
                Rezervasyon
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-6">İletişim</h4>
            <div className="space-y-4">
              <a href="tel:+905379592075" className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                <span>+90 537 959 20 75</span>
              </a>
              <a href="mailto:info@szkviptransfer.com" className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@szkviptransfer.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/50">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Antalya, Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              {new Date().getFullYear()} SZKVIPTRANSFER. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-8 text-sm">
              <Link href="#" className="text-white/30 hover:text-gold transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-white/30 hover:text-gold transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
