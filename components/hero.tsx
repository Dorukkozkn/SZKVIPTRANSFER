"use client"

import { useState } from "react"
import {
  ChevronDown,
  MapPin,
  Calendar,
  Users,
  Baby,
  Wallet,
  Clock,
} from "lucide-react"

type Gender = "Kadın" | "Erkek" | ""

type PassengerInfo = {
  fullName: string
  gender: Gender
}

const currencies = [
  { label: "Pound", value: "GBP" },
  { label: "Euro", value: "EUR" },
  { label: "Dolar", value: "USD" },
  { label: "Ruble", value: "RUB" },
  { label: "TL", value: "TRY" },
]

export function Hero() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [currency, setCurrency] = useState("EUR")

  const [showPassengers, setShowPassengers] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [babySeat, setBabySeat] = useState(0)

  const totalPassengers = adults + children + infants

  const handleSearch = () => {
    const formattedDate = date
      ? `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`
      : "Belirtilmedi"

    const message = `Yeni Rezervasyon Talebi

Tarih: ${formattedDate}
Saat: ${time || "Belirtilmedi"}

Nereden: ${from || "Belirtilmedi"}
Nereye: ${to || "Belirtilmedi"}

Yetişkin: ${adults}
Çocuk: ${children}
Bebek: ${infants}

Bebek Koltuğu: ${babySeat}
Para Birimi: ${currency}`

    window.open(
      `https://api.whatsapp.com/send?phone=905379592075&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    )
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tzoo.13733.0.1135660.iStock-821804760-1-antalya-QJTkPkfLVAnAYOU5EzyfxlLvhDZR5C.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl text-white mb-8">
          Lüks Ulaşımın <span className="text-gold">Yeni Adresi</span>
        </h1>

        {/* SEARCH BAR */}
        <div className="relative bg-white rounded-full shadow-2xl p-2 flex items-center gap-2 overflow-visible">
          {/* FROM */}
          <div className="flex-1 flex items-center gap-2 px-4">
            <MapPin className="w-4 h-4 text-gold" />
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Nereden?"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* TO */}
          <div className="flex-1 flex items-center gap-2 px-4 border-l">
            <MapPin className="w-4 h-4 text-gold" />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Nereye?"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* DATE */}
          <div className="flex items-center gap-2 px-4 border-l">
            <Calendar className="w-4 h-4 text-gold" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none text-sm"
            />
          </div>

          {/* TIME */}
          <div className="flex items-center gap-2 px-4 border-l">
            <Clock className="w-4 h-4 text-gold" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="outline-none text-sm"
            />
          </div>

          {/* CURRENCY */}
          <div className="flex items-center gap-2 px-4 border-l">
            <Wallet className="w-4 h-4 text-gold" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="outline-none text-sm bg-transparent"
            >
              {currencies.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* PASSENGERS */}
          <div className="relative flex items-center gap-2 px-4 border-l">
            <Users className="w-4 h-4 text-gold" />

            <button
              onClick={() => setShowPassengers(!showPassengers)}
              className="text-sm"
            >
              {totalPassengers} Kişi
            </button>

            {showPassengers && (
              <div className="absolute top-full right-0 mt-3 w-[400px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="space-y-3">
                  {[
                    ["Yetişkin", adults, setAdults],
                    ["Çocuk", children, setChildren],
                    ["Bebek", infants, setInfants],
                  ].map(([label, value, setter]: any) => (
                    <div
                      key={label}
                      className="flex justify-between items-center"
                    >
                      <span>{label}</span>
                      <div className="flex gap-2">
                        <button onClick={() => setter(Math.max(0, value - 1))}>
                          -
                        </button>
                        <span>{value}</span>
                        <button onClick={() => setter(value + 1)}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSearch}
            className="bg-gold text-black px-6 py-2 rounded-full"
          >
            Ara
          </button>
        </div>
      </div>
    </section>
  )
}
