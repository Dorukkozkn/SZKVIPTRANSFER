"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Mesajınız alındı. En kısa sürede size dönüş yapacağız.")
  }

  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            İletişim
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Bizimle <span className="text-gold">İletişime Geçin</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sorularınız ve talepleriniz için bize ulaşın. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adres</h4>
                  <p className="text-muted-foreground">
                    Merkez Mahallesi, Atatürk Caddesi No:123
                    <br />
                    Kadıköy, İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <p className="text-muted-foreground">
                    +90 500 123 45 67
                    <br />
                    +90 212 123 45 67
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-posta</h4>
                  <p className="text-muted-foreground">
                    info@szkviptransfer.com
                    <br />
                    rezervasyon@szkviptransfer.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h4>
                  <p className="text-muted-foreground">
                    7 gün 24 saat hizmetinizdeyiz
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48173.30573662234!2d29.0215!3d40.9906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0x8d1b0e6e7b5f5e3d!2sKad%C4%B1k%C3%B6y%2C%20Istanbul!5e0!3m2!1sen!2str!4v1629890123456!5m2!1sen!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 lg:p-12">
            <h3 className="text-2xl font-serif text-foreground mb-6">Teklif Formu</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Konu
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-white focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Seçiniz</option>
                    <option value="vip">VIP Transfer</option>
                    <option value="personel">Personel Taşımacılığı</option>
                    <option value="havalimani">Havalimanı Transferi</option>
                    <option value="sehirlerasi">Şehirlerarası Transfer</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mesajınız *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-white focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Mesajınızı yazın..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black py-4 font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
