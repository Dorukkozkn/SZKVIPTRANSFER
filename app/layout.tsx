import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://szkviptransfer.com"),

  title: {
    default: "SZKVIPTRANSFER | Antalya VIP Transfer ve Havalimanı Transfer Hizmeti",
    template: "%s | SZKVIPTRANSFER",
  },

  description:
    "SZKVIPTRANSFER ile Antalya VIP transfer, havalimanı transferi, özel şoförlü araç ve lüks ulaşım hizmetlerinden güvenli ve konforlu şekilde yararlanın.",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://szkviptransfer.com/#localbusiness",
      name: "SZKVIPTRANSFER",
      alternateName: "SZK VIP Transfer",
      url: "https://szkviptransfer.com",
      logo: "https://szkviptransfer.com/icon.png",
      image: "https://szkviptransfer.com/og-image.jpg",
      telephone: "+90 537 959 20 75",
      priceRange: "€€",
      description:
        "SZKVIPTRANSFER, Antalya ve Türkiye genelinde VIP transfer, havalimanı transferi, özel şoförlü araç ve lüks ulaşım hizmetleri sunar.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antalya",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.8969,
        longitude: 30.7133,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Antalya",
        },
        {
          "@type": "City",
          name: "Alanya",
        },
        {
          "@type": "City",
          name: "Belek",
        },
        {
          "@type": "City",
          name: "Side",
        },
        {
          "@type": "City",
          name: "Kemer",
        },
        {
          "@type": "Country",
          name: "Türkiye",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90 537 959 20 75",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        areaServed: "TR",
      },
      sameAs: ["https://szkviptransfer.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://szkviptransfer.com/#website",
      url: "https://szkviptransfer.com",
      name: "SZKVIPTRANSFER",
      publisher: {
        "@id": "https://szkviptransfer.com/#localbusiness",
      },
      inLanguage: "tr-TR",
    },
    {
      "@type": "Service",
      "@id": "https://szkviptransfer.com/#service",
      serviceType: "VIP Transfer",
      name: "Antalya VIP Transfer Hizmeti",
      provider: {
        "@id": "https://szkviptransfer.com/#localbusiness",
      },
      areaServed: {
        "@type": "Country",
        name: "Türkiye",
      },
      description:
        "Antalya havalimanı transferi, şehir içi VIP transfer, özel şoförlü araç ve lüks ulaşım hizmetleri.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "EUR",
        url: "https://szkviptransfer.com",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://szkviptransfer.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "SZKVIPTRANSFER hangi bölgelerde hizmet veriyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SZKVIPTRANSFER başta Antalya olmak üzere Alanya, Belek, Side, Kemer, Lara ve Türkiye genelinde VIP transfer hizmeti sunar.",
          },
        },
        {
          "@type": "Question",
          name: "Havalimanı transfer hizmeti var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Antalya Havalimanı ve çevre bölgeler için özel havalimanı transfer hizmeti sağlanır.",
          },
        },
        {
          "@type": "Question",
          name: "Rezervasyon nasıl yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web sitesindeki rezervasyon formu üzerinden alınış ve varış noktası, tarih, saat ve yolcu bilgileri girilerek WhatsApp üzerinden hızlı rezervasyon talebi oluşturulabilir.",
          },
        },
        {
          "@type": "Question",
          name: "Bebek koltuğu talep edilebilir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Rezervasyon sırasında bebek koltuğu talebi belirtilebilir.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  )
}
