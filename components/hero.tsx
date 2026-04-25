"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Calendar, Users, Baby, Wallet, Clock } from "lucide-react"

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

  const [adultInfos, setAdultInfos] = useState<PassengerInfo[]>([
    { fullName: "", gender: "" },
  ])
  const [childInfos, setChildInfos] = useState<PassengerInfo[]>([])
  const [infantInfos, setInfantInfos] = useState<PassengerInfo[]>([])

  const totalPassengers = adults + children + infants

  const formatDateTR = (value: string) => {
    if (!value) return "Belirtilmedi"
    const [year, month, day] = value.split("-")
    return `${day}/${month}/${year}`
  }

  const updatePassengerCount = (
    type: "adult" | "child" | "infant",
    value: number
  ) => {
    const emptyPassenger: PassengerInfo = { fullName: "", gender: "" }

    if (type === "adult") {
      const safeValue = Math.max(1, value)
      setAdults(safeValue)
      setAdultInfos((prev) =>
        Array.from({ length: safeValue }, (_, i) => prev[i] || emptyPassenger)
      )
    }

    if (type === "child") {
      const safeValue = Math.max(0, value)
      setChildren(safeValue)
      setChildInfos((prev) =>
        Array.from({ length: safeValue }, (_, i) => prev[i] || emptyPassenger)
      )
    }

    if (type === "infant") {
      const safeValue = Math.max(0, value)
      setInfants(safeValue)
      setInfantInfos((prev) =>
        Array.from({ length: safeValue }, (_, i) => prev[i] || emptyPassenger)
      )
    }
  }

  const updatePassengerInfo = (
    type: "adult" | "child" | "infant",
    index: number,
    field: keyof PassengerInfo,
    value: string
  ) => {
    const setter =
      type === "adult"
        ? setAdultInfos
        : type === "child"
        ? setChildInfos
        : setInfantInfos

    setter((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value as Gender } : item
      )
    )
  }

  const passengersToText = (title: string, list: PassengerInfo[]) => {
    if (list.length === 0) return ""

    return `\n${title}:\n${list
      .map(
        (p, i) =>
          `   ${i + 1}. ${p.fullName || "İsim belirtilmedi"} - ${
            p.gender || "Cinsiyet belirtilmedi"
          }`
      )
      .join("\n")}`
  }

  const renderPassengerInputs = (
    title: string,
    type: "adult" | "child" | "infant",
    list: PassengerInfo[]
  ) => {
    if (list.length === 0) return null

    return (
      <div className="space-y-3">
        <p className="text-sm font-semibold text-neutral-900">
          {title} Bilgileri
        </p>

        {list.map((passenger, index) => (
          <div
            key={`${type}-${index}`}
            className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-2"
          >
            <input
              type="text"
              value={passenger.fullName}
              onChange={(e) =>
                updatePassengerInfo(type, index, "fullName", e.target.value)
              }
              placeholder={`${index + 1}. yolcu isim soyisim`}
              className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-gold bg-white"
            />

            <select
              value={passenger.gender}
              onChange={(e) =>
                updatePassengerInfo(type, index, "gender", e.target.value)
              }
              className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-800 focus:outline-none focus:border-gold bg-white"
            >
              <option value="">Cinsiyet</option>
              <option value="Kadın">Kadın</option>
              <option value="Erkek">Erkek</option>
            </select>
          </div>
        ))}
      </div>
    )
  }

  const handleSearch = () => {
    const formattedDate = formatDateTR(date)
    const formattedTime = time || "Belirtilmedi"

    const selectedCurrency =
      currencies.find((item) => item.value === currency)?.label || currency

    const message = `*Yeni Rezervasyon Talebi*
📅 Tarih: ${formattedDate}
⏰ Saat: ${formattedTime}
📍 Nereden: ${from || "Belirtilmedi"}
📍 Nereye: ${to || "Belirtilmedi"}

👥 Yolcu Sayısı:
   - Yetişkin: ${adults}
   - Çocuk: ${children}
   - Bebek: ${infants}

${passengersToText("Yetişkin Yolcular", adultInfos)}
${passengersToText("Çocuk Yolcular", childInfos)}
${passengersToText("Bebek Yolcular", infantInfos)}

🪑 Bebek Koltuğu: ${babySeat > 0 ? `${babySeat} adet` : "Hayır"}
💳 Ödeme Para Birimi: ${selectedCurrency}`

    window.open(
      `https://wa.me/905379592075?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex flex-col justify-center overflow-visible"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tzoo.13733.0.1135660.iStock-821804760-1-antalya-QJTkPkfLVAnAYOU5EzyfxlLvhDZR5C.jpg"
          alt="Antalya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-30 text-center px-4 md:px-6 max-w-7xl mx-auto pt-24 md:pt-32 pb-24 md:pb-32">
        <span className="text-white text-sm md:text-base tracking-[0.3em] uppercase mb-4 block">
          Premium Transfer Hizmeti
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tight">
          Lüks Ulaşımın <span className="text-gold">Yeni Adresi</span>
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Konfor, güvenlik ve prestij bir arada. Her yolculuğunuz özel.
        </p>

        <div className="relative bg-white rounded-2xl md:rounded-full shadow-2xl p-3 md:p-2 flex flex-col md:flex-row items-stretch gap-3 md:gap-0 max-w-7xl mx-auto overflow-visible z-50">
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-neutral-100">
            <MapPin className="w-5 h-5 text-gold shrink-0" />
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Nereden?"
              className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none bg-transparent"
            />
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-neutral-100">
            <MapPin className="w-5 h-5 text-gold shrink-0" />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Nereye?"
              className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none bg-transparent"
            />
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-neutral-100">
            <Calendar className="w-5 h-5 text-gold shrink-0" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-sm text-neutral-800 focus:outline-none bg-transparent"
            />
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-neutral-100">
            <Clock className="w-5 h-5 text-gold shrink-0" />
            <input
              type="time"
              value={time}
              step="60"
              onChange={(e) => setTime(e.target.value)}
              className="w-full text-sm text-neutral-800 focus:outline-none bg-transparent"
            />
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-neutral-100">
            <Wallet className="w-5 h-5 text-gold shrink-0" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full text-sm text-neutral-800 focus:outline-none bg-transparent"
            >
              {currencies.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-2 relative">
            <Users className="w-5 h-5 text-gold shrink-0" />

            <button
              type="button"
              onClick={() => setShowPassengers(!showPassengers)}
              className="w-full text-left text-sm text-neutral-800 focus:outline-none flex items-center justify-between"
            >
              <span>
                {totalPassengers} Kişi
                {babySeat > 0 ? `, ${babySeat} Koltuk` : ""}
              </span>

              <ChevronDown
                className={`w-4 h-4 text-neutral-400 transition-transform ${
                  showPassengers ? "rotate-180" : ""
                }`}
              />
            </button>

            {showPassengers && (
              <div className="absolute top-[calc(100%+14px)] right-0 w-[820px] max-w-[calc(100vw-32px)] bg-white border border-neutral-200 rounded-2xl shadow-2xl z-[99999] text-left overflow-hidden">
                <div className="absolute -top-2 right-10 w-4 h-4 bg-white border-l border-t border-neutral-200 rotate-45" />

                <div className="max-h-[430px] overflow-y-auto p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                    <div className="space-y-4">
                      {[
                        ["Yetişkin", "12+ yaş", adults, () => updatePassengerCount("adult", adults - 1), () => updatePassengerCount("adult", adults + 1)],
                        ["Çocuk", "2-11 yaş", children, () => updatePassengerCount("child", children - 1), () => updatePassengerCount("child", children + 1)],
                        ["Bebek", "0-2 yaş", infants, () => updatePassengerCount("infant", infants - 1), () => updatePassengerCount("infant", infants + 1)],
                      ].map(([label, age, count, minus, plus]: any) => (
                        <div key={label} className="flex items-center justify-between">
                          <div>
                            <span className="text-neutral-800 text-sm font-medium">{label}</span>
                            <span className="text-neutral-400 text-xs block">{age}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <button type="button" onClick={minus} className="w-8 h-8 border rounded-full">-</button>
                            <span className="w-5 text-center text-sm text-neutral-800">{count}</span>
                            <button type="button" onClick={plus} className="w-8 h-8 border rounded-full">+</button>
                          </div>
                        </div>
                      ))}

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                        <div className="flex items-center gap-2">
                          <Baby className="w-4 h-4 text-gold" />
                          <span className="text-neutral-800 text-sm font-medium">
                            Bebek Koltuğu
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setBabySeat(Math.max(0, babySeat - 1))}
                            className="w-8 h-8 border rounded-full"
                          >
                            -
                          </button>
                          <span className="w-5 text-center text-sm text-neutral-800">
                            {babySeat}
                          </span>
                          <button
                            type="button"
                            onClick={() => setBabySeat(babySeat + 1)}
                            className="w-8 h-8 border rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {renderPassengerInputs("Yetişkin", "adult", adultInfos)}
                      {renderPassengerInputs("Çocuk", "child", childInfos)}
                      {renderPassengerInputs("Bebek", "infant", infantInfos)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleSearch}
            className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-3 rounded-xl md:rounded-full transition-colors flex items-center justify-center shrink-0"
          >
            Ara
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#hakkimizda"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
