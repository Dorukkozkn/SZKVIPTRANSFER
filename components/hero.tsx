"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, Baby, Wallet, Clock } from "lucide-react"

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
          `${i + 1}. ${p.fullName || "İsim belirtilmedi"} - ${
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
        <p className="text-sm font-semibold text-neutral-900">{title} Bilgileri</p>

        {list.map((passenger, index) => (
          <div key={`${type}-${index}`} className="grid grid-cols-1 gap-2">
            <input
              type="text"
              value={passenger.fullName}
              onChange={(e) =>
                updatePassengerInfo(type, index, "fullName", e.target.value)
              }
              placeholder={`${index + 1}. yolcu isim soyisim`}
              className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none"
            />

            <select
              value={passenger.gender}
              onChange={(e) =>
                updatePassengerInfo(type, index, "gender", e.target.value)
              }
              className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none bg-white"
            >
              <option value="">Cinsiyet seçiniz</option>
              <option value="Kadın">Kadın</option>
              <option value="Erkek">Erkek</option>
            </select>
          </div>
        ))}
      </div>
    )
  }

  const handleSearch = () => {
    const formattedDate = date
      ? `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`
      : "Belirtilmedi"

    const selectedCurrency =
      currencies.find((item) => item.value === currency)?.label || currency

    const message = `Yeni Rezervasyon Talebi

Tarih: ${formattedDate}
Saat: ${time || "Belirtilmedi"}

Nereden: ${from || "Belirtilmedi"}
Nereye: ${to || "Belirtilmedi"}

Yolcu Sayısı:
Yetişkin: ${adults}
Çocuk: ${children}
Bebek: ${infants}

${passengersToText("Yetişkin Yolcular", adultInfos)}
${passengersToText("Çocuk Yolcular", childInfos)}
${passengersToText("Bebek Yolcular", infantInfos)}

Bebek Koltuğu: ${babySeat > 0 ? `${babySeat} adet` : "Hayır"}
Para Birimi: ${selectedCurrency}`

    window.open(
      `https://api.whatsapp.com/send?phone=905379592075&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    )
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tzoo.13733.0.1135660.iStock-821804760-1-antalya-QJTkPkfLVAnAYOU5EzyfxlLvhDZR5C.jpg"
          className="w-full h-full object-cover"
          alt="Antalya"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl text-white mb-2">
          Lüks Ulaşımın <span className="text-gold">Yeni Adresi</span>
        </h1>

        <p className="text-white text-sm md:text-base tracking-[0.5em] uppercase mb-8">
          SZKVIPTRANSFER
        </p>

        <div className="relative bg-white rounded-full shadow-2xl p-2 flex items-center gap-2 overflow-visible">
          <div className="flex-1 flex items-center gap-2 px-4">
            <MapPin className="w-4 h-4 text-gold" />
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Nereden?"
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex-1 flex items-center gap-2 px-4 border-l">
            <MapPin className="w-4 h-4 text-gold" />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Nereye?"
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-2 px-4 border-l">
            <Calendar className="w-4 h-4 text-gold" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-2 px-4 border-l">
            <Clock className="w-4 h-4 text-gold" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="outline-none text-sm"
            />
          </div>

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

          <div className="relative flex items-center gap-2 px-4 border-l">
            <Users className="w-4 h-4 text-gold" />

            <button
              type="button"
              onClick={() => setShowPassengers(!showPassengers)}
              className="text-sm"
            >
              {totalPassengers} Kişi
            </button>

            {showPassengers && (
              <div className="absolute top-full right-0 mt-3 w-[760px] max-w-[calc(100vw-32px)] bg-white shadow-xl rounded-xl p-5 z-50 text-left">
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Yetişkin</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => updatePassengerCount("adult", adults - 1)}>
                          -
                        </button>
                        <span>{adults}</span>
                        <button type="button" onClick={() => updatePassengerCount("adult", adults + 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span>Çocuk</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => updatePassengerCount("child", children - 1)}>
                          -
                        </button>
                        <span>{children}</span>
                        <button type="button" onClick={() => updatePassengerCount("child", children + 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span>Bebek</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => updatePassengerCount("infant", infants - 1)}>
                          -
                        </button>
                        <span>{infants}</span>
                        <button type="button" onClick={() => updatePassengerCount("infant", infants + 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="flex items-center gap-2">
                        <Baby className="w-4 h-4 text-gold" />
                        Bebek Koltuğu
                      </span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setBabySeat(Math.max(0, babySeat - 1))}>
                          -
                        </button>
                        <span>{babySeat}</span>
                        <button type="button" onClick={() => setBabySeat(babySeat + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 max-h-[420px] overflow-y-auto pr-1">
                    {renderPassengerInputs("Yetişkin", "adult", adultInfos)}
                    {renderPassengerInputs("Çocuk", "child", childInfos)}
                    {renderPassengerInputs("Bebek", "infant", infantInfos)}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="bg-gold text-black px-6 py-2 rounded-full"
          >
            Randevu
          </button>
        </div>
      </div>
    </section>
  )
}
