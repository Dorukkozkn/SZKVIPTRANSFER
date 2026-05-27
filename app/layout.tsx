import type { Metadata } from "next"
import "./globals.css"

const siteUrl = "https://szkviptransfer.com"
const ogImage = `${siteUrl}/szkvip-og-v3.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SZKVIPTRANSFER | Antalya VIP Transfer ve Havalimanı Transfer Hizmeti",
    template: "%s | SZKVIPTRANSFER",
  },

  description:
    "SZKVIPTRANSFER ile Antalya VIP transfer, havalimanı transferi, özel şoförlü araç ve lüks ulaşım hizmetlerinden güvenli ve konforlu şekilde yararlanın.",

  alternates: {
    canonical: siteUrl,
  },

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

    shortcut: ["/favicon.ico"],

    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "SZKVIPTRANSFER | Antalya VIP Transfer",
    description:
      "Antalya VIP transfer, havalimanı transferi ve özel şoförlü lüks ulaşım hizmetleri için hızlı rezervasyon oluşturun.",
    url: siteUrl,
    siteName: "SZKVIPTRANSFER",
    locale: "tr_TR",
    type: "website",

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SZKVIPTRANSFER Antalya VIP Transfer",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SZKVIPTRANSFER | Antalya VIP Transfer",
    description:
      "Antalya VIP transfer, havalimanı transferi ve özel şoförlü lüks ulaşım hizmetleri.",
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,

      name: "SZKVIPTRANSFER",
      alternateName: "SZK VIP Transfer",

      url: siteUrl,

      logo: `${siteUrl}/icon.png`,
      image: ogImage,

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

      sameAs: [siteUrl],
    },

    {
      "@type": "WebSite",

      "@id": `${siteUrl}/#website`,

      url: siteUrl,

      name: "SZKVIPTRANSFER",

      publisher: {
        "@id": `${siteUrl}/#localbusiness`,
      },

      inLanguage: "tr-TR",
    },

    {
      "@type": "Service",

      "@id": `${siteUrl}/#service`,

      serviceType: "VIP Transfer",

      name: "Antalya VIP Transfer Hizmeti",

      provider: {
        "@id": `${siteUrl}/#localbusiness`,
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
        url: siteUrl,
      },
    },

    {
      "@type": "FAQPage",

      "@id": `${siteUrl}/#faq`,

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>

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
