"use client"

import { useEffect, useRef, useState } from "react"
import {
  MapPin,
  Calendar,
  Users,
  Baby,
  Wallet,
  Clock,
  Plane,
  StickyNote,
} from "lucide-react"

type Gender = "Kadın" | "Erkek" | ""

type PassengerInfo = {
  fullName: string
  gender: Gender
}

type Prediction = {
  description: string
  place_id: string
}

declare global {
  interface Window {
    google?: any
  }
}

const currencies = [
  { label: "Pound", value: "GBP" },
  { label: "Euro", value: "EUR" },
  { label: "Dolar", value: "USD" },
  { label: "Ruble", value: "RUB" },
  { label: "TL", value: "TRY" },
]

function loadGoogleMapsScript() {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") return reject()

    if (window.google?.maps?.places) {
      resolve()
      return
    }

    const oldScript = document.getElementById("google-maps-script")
    if (oldScript) {
      oldScript.addEventListener("load", () => resolve())
      oldScript.addEventListener("error", () => reject())
      return
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      reject()
      return
    }

    const script = document.createElement("script")
    script.id = "google-maps-script"
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=tr&region=TR`
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject()

    document.head.appendChild(script)
  })
}

function LocationInput({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
}) {
  const [ready, setReady] = useState(false)
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [open, setOpen] = useState(false)
  const serviceRef = useRef<any>(null)

  useEffect(() => {
    loadGoogleMapsScript()
      .then(() => {
        serviceRef.current =
          new window.google.maps.places.AutocompleteService()
        setReady(true)
      })
      .catch(() => {
        setReady(false)
      })
  }, [])

  const handleChange = (text: string) => {
    onChange(text)

    if (!ready || !serviceRef.current || text.trim().length < 2) {
      setPredictions([])
      setOpen(false)
      return
    }

    serviceRef.current.getPlacePredictions(
      {
        input: text,
        componentRestrictions: { country: "tr" },
        language: "tr",
      },
      (results: Prediction[] | null) => {
        setPredictions(results || [])
        setOpen(true)
      }
    )
  }

  const selectPlace = (description: string) => {
    onChange(description)
    setPredictions([])
    setOpen(false)
  }

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => predictions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full outline-none text-sm text-neutral-800 bg-transparent"
      />

      {open && predictions.length > 0 && (
        <div className="absolute left-[-44px] top-[calc(100%+18px)] w-[420px] max-w-[calc(100vw-40px)] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-[999999] text-left">
          {predictions.slice(0, 5).map((item) => (
            <button
              key={item.place_id}
              type="button"
              onMouseDown={() => selectPlace(item.description)}
              className="w-full flex items-center gap-3 px-4 py-3 border-b last:border-b-0 hover:bg-neutral-50 transition"
            >
              <MapPin className="w-5 h-5 text-neutral-400 shrink-0" />
              <span className="text-sm text-neutral-700 line-clamp-1">
                {item.description}
              </span>
            </button>
          ))}

          <div className="px-4 py-2 text-right text-xs text-neutral-400">
            powered by Google
          </div>
        </div>
      )}
    </div>
  )
}

export function Hero() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [currency, setCurrency] = useState("EUR")
  const [flightCode, setFlightCode] = useState("")
  const [note, setNote] = useState("")

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
        <h4 className="text-sm font-semibold text-neutral-900">
          {title} Bilgileri
        </h4>

        {list.map((passenger, index) => (
          <div
            key={`${type}-${index}`}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 space-y-2"
          >
            <input
              type="text"
              value={passenger.fullName}
              onChange={(e) =>
                updatePassengerInfo(type, index, "fullName", e.target.value)
              }
              placeholder={`${index + 1}. yolcu isim soyisim`}
              className="w-full rounded-xl bg-white border border-neutral-200 px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-gold"
            />

            <select
              value={passenger.gender}
              onChange={(e) =>
                updatePassengerInfo(type, index, "gender", e.target.value)
              }
              className="w-full rounded-xl bg-white border border-neutral-200 px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-gold"
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
      ? new Date(`${date}T00:00:00`).toLocaleDateString("tr-TR")
      : "Belirtilmedi"

    const selectedCurrency =
      currencies.find((item) => item.value === currency)?.label || currency

    const message = `Yeni Rezervasyon Talebi

Tarih: ${formattedDate}
Saat: ${time || "Belirtilmedi"}

Nereden: ${from || "Belirtilmedi"}
Nereye: ${to || "Belirtilmedi"}
Uçuş Kodu: ${flightCode || "Belirtilmedi"}
Not: ${note || "Yok"}

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
    <section className="relative min-h-screen flex flex-col justify-center overflow-visible px-4 py-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tzoo.13733.0.1135660.iStock-821804760-1-antalya-QJTkPkfLVAnAYOU5EzyfxlLvhDZR5C.jpg"
          className="w-full h-full object-cover"
          alt="Antalya"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-20 text-center w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-3 font-serif">
          Lüks Ulaşımın <span className="text-gold">Yeni Adresi</span>
        </h1>

        <p className="text-white/90 text-xs md:text-base tracking-[0.35em] md:tracking-[0.6em] uppercase mb-8">
          SZKVIPTRANSFER
        </p>

        <div className="relative bg-white rounded-3xl lg:rounded-full shadow-2xl py-2 px-2 flex flex-col lg:flex-row items-center gap-2 lg:gap-0 overflow-visible w-full lg:w-fit mx-auto">
          <div className="relative w-full lg:w-[170px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <MapPin className="w-5 h-5 text-gold shrink-0" />
            <LocationInput
              value={from}
              onChange={setFrom}
              placeholder="Nereden?"
            />
          </div>

          <div className="relative w-full lg:w-[170px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <MapPin className="w-5 h-5 text-gold shrink-0" />
            <LocationInput
              value={to}
              onChange={setTo}
              placeholder="Nereye?"
            />
          </div>

          <div className="w-full lg:w-[155px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <Calendar className="w-5 h-5 text-gold shrink-0" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full outline-none text-sm text-neutral-800 bg-transparent"
            />
          </div>

          <div className="w-full lg:w-[115px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <Clock className="w-5 h-5 text-gold shrink-0" />
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full outline-none text-sm text-neutral-800 bg-transparent"
            >
              <option value="">Saat</option>
              {Array.from({ length: 48 }, (_, i) => {
                const hour = String(Math.floor(i / 2)).padStart(2, "0")
                const minute = i % 2 === 0 ? "00" : "30"
                const value = `${hour}:${minute}`

                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="w-full lg:w-[115px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <Wallet className="w-5 h-5 text-gold shrink-0" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full outline-none text-sm text-neutral-800 bg-transparent"
            >
              {currencies.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-[140px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <Plane className="w-5 h-5 text-gold shrink-0" />
            <input
              value={flightCode}
              onChange={(e) => setFlightCode(e.target.value)}
              placeholder="Uçuş Kodu"
              className="w-full outline-none text-sm text-neutral-800 bg-transparent"
            />
          </div>

          <div className="w-full lg:w-[140px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <StickyNote className="w-5 h-5 text-gold shrink-0" />
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Not"
              className="w-full outline-none text-sm text-neutral-800 bg-transparent"
            />
          </div>

          <div className="relative w-full lg:w-[130px] flex items-center gap-3 px-4 py-2.5 border border-neutral-100 lg:border-0 lg:border-r rounded-2xl lg:rounded-none">
            <Users className="w-5 h-5 text-gold shrink-0" />

            <button
              type="button"
              onClick={() => setShowPassengers(!showPassengers)}
              className="w-full text-left text-sm text-neutral-800"
            >
              {totalPassengers} Kişi
              {babySeat > 0 ? `, ${babySeat} Koltuk` : ""}
            </button>

            {showPassengers && (
              <div className="absolute top-full right-0 mt-4 w-[860px] max-w-[calc(100vw-32px)] bg-white rounded-3xl shadow-2xl border border-neutral-200 z-50 text-left overflow-hidden">
                <div className="max-h-[75vh] overflow-y-auto p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5 md:gap-7">
                    <div className="space-y-3">
                      {[
                        ["Yetişkin", "12+ yaş", adults, "adult"],
                        ["Çocuk", "2-11 yaş", children, "child"],
                        ["Bebek", "0-2 yaş", infants, "infant"],
                      ].map(([label, age, count, type]: any) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 flex items-center justify-between"
                        >
                          <div>
                            <p className="text-sm font-semibold text-neutral-900">
                              {label}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {age}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                updatePassengerCount(type, count - 1)
                              }
                              className="w-9 h-9 rounded-full bg-white border border-neutral-200 text-neutral-700"
                            >
                              -
                            </button>

                            <span className="w-5 text-center text-sm font-semibold text-neutral-900">
                              {count}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updatePassengerCount(type, count + 1)
                              }
                              className="w-9 h-9 rounded-full bg-neutral-900 text-white"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}

                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Baby className="w-4 h-4 text-gold" />
                          <p className="text-sm font-semibold text-neutral-900">
                            Bebek Koltuğu
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setBabySeat(Math.max(0, babySeat - 1))
                            }
                            className="w-9 h-9 rounded-full bg-white border border-neutral-200 text-neutral-700"
                          >
                            -
                          </button>

                          <span className="w-5 text-center text-sm font-semibold text-neutral-900">
                            {babySeat}
                          </span>

                          <button
                            type="button"
                            onClick={() => setBabySeat(babySeat + 1)}
                            className="w-9 h-9 rounded-full bg-neutral-900 text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-5">
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
            type="button"
            onClick={handleSearch}
            className="w-full lg:w-auto bg-gold hover:bg-gold/90 text-black font-semibold px-6 py-3 rounded-2xl lg:rounded-full transition-colors shrink-0"
          >
            Randevu
          </button>
        </div>
