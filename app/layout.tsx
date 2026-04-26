import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://szkviptransfer.com"),

  title: {
    default: "SZKVIPTRANSFER | Antalya VIP Transfer ve Havalimanı Transfer Hizmeti",
    template: "%s | SZKVIPTRANSFER",
  },

  description:
    "SZKVIPTRANSFER ile Antalya VIP transfer, havalimanı transferi, özel şoförlü araç ve lüks ulaşım hizmetlerinden güvenli ve konforlu şekilde yararlanın. Antalya, Alanya, Belek, Side, Kemer ve Türkiye geneli VIP transfer çözümleri.",

  keywords: [
    "SZKVIPTRANSFER",
    "SZK VIP Transfer",
    "Antalya VIP transfer",
    "VIP transfer Antalya",
    "Antalya havalimanı transfer",
    "Antalya airport transfer",
    "Antalya özel transfer",
    "Antalya lüks transfer",
    "Antalya şoförlü araç",
    "VIP ulaşım Antalya",
    "Antalya transfer hizmeti",
    "Alanya VIP transfer",
    "Belek VIP transfer",
    "Side VIP transfer",
    "Kemer VIP transfer",
    "Lara VIP transfer",
    "Antalya şehir içi transfer",
    "Türkiye VIP transfer",
    "özel şoförlü araç",
    "lüks ulaşım hizmeti",
  ],

  authors: [
    {
      name: "SZKVIPTRANSFER",
      url: "https://szkviptransfer.com",
    },
  ],

  creator: "SZKVIPTRANSFER",
  publisher: "SZKVIPTRANSFER",
  applicationName: "SZKVIPTRANSFER",
  category: "Travel",

  alternates: {
    canonical: "https://szkviptransfer.com",
    languages: {
      "tr-TR": "https://szkviptransfer.com",
      "en-US": "https://szkviptransfer.com/en",
      "x-default": "https://szkviptransfer.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "SZKVIPTRANSFER | Antalya VIP Transfer ve Özel Ulaşım",
    description:
      "Antalya ve Türkiye genelinde güvenli, konforlu ve prestijli VIP transfer hizmeti. Havalimanı transferi, özel şoförlü araç ve lüks ulaşım çözümleri için hızlı rezervasyon yapın.",
    url: "https://szkviptransfer.com",
    siteName: "SZKVIPTRANSFER",
    locale: "tr_TR",
    type: "website",
    countryName: "Türkiye",
    phoneNumbers: ["+90 537 959 20 75"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SZKVIPTRANSFER Antalya VIP Transfer Hizmeti",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SZKVIPTRANSFER | Antalya VIP Transfer",
    description:
      "Antalya VIP transfer, havalimanı transferi ve özel şoförlü lüks ulaşım hizmetleri için SZKVIPTRANSFER.",
    images: ["/og-image.jpg"],
    creator: "@szkviptransfer",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
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

  manifest: "/site.webmanifest",

  other: {
    "theme-color": "#c9a227",
    "msapplication-TileColor": "#c9a227",

    "geo.region": "TR-07",
    "geo.placename": "Antalya",
    "geo.position": "36.8969;30.7133",
    ICBM: "36.8969, 30.7133",

    "business:contact_data:locality": "Antalya",
    "business:contact_data:country_name": "Türkiye",
    "business:contact_data:phone_number": "+90 537 959 20 75",

    "og:updated_time": "2026-04-26T12:00:00+03:00",

    "twitter:label1": "Hizmet",
    "twitter:data1": "VIP Transfer",
    "twitter:label2": "Bölge",
    "twitter:data2": "Antalya ve Türkiye Geneli",
  },
}
