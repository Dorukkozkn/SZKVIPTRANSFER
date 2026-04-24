import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-8">
        <div className="flex items-center justify-between mb-16">
          <span className="text-white/60 font-medium tracking-wide">
            Iletisim
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl md:text-6xl font-serif text-neutral-700">04</span>
            <span className="text-neutral-600 text-lg">/04</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Brand & Description */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-serif tracking-wide text-white">
                SZKVIPTRANSFER
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed max-w-md text-lg">
              Premium VIP transfer hizmetleri ile konforlu, guvenli ve 
              prestijli bir yolculuk deneyimi sunuyoruz.
            </p>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-6">
            <a href="tel:+905001234567" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <Phone className="w-5 h-5" />
              <span className="text-lg">+90 500 123 45 67</span>
            </a>
            <a href="mailto:info@szkviptransfer.com" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <Mail className="w-5 h-5" />
              <span className="text-lg">info@szkviptransfer.com</span>
            </a>
            <div className="flex items-start gap-4 text-white/60">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-lg">Merkez Mah. Ataturk Cad. No:123, Istanbul</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              {new Date().getFullYear()} SZKVIPTRANSFER. Tum haklari saklidir.
            </p>
            <div className="flex gap-8 text-sm">
              <Link href="#" className="text-white/30 hover:text-white transition-colors">
                Gizlilik
              </Link>
              <Link href="#" className="text-white/30 hover:text-white transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
