import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, TrendingUp } from "lucide-react"

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
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <TrendingUp className="w-4 h-4" />
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
