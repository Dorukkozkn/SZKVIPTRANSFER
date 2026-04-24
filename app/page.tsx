import { Navbar } from "@/components/navbar"
import { Booking } from "@/components/booking"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Fleet } from "@/components/fleet"
import { FAQ } from "@/components/faq"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Booking />
      <Hero />
      <About />
      <Fleet />
      <FAQ />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
