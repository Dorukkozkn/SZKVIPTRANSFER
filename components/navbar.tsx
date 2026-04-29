"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react"

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: any
  }
}

const languages = [
  { code: "tr", googleCode: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", googleCode: "en", label: "English", flag: "🇬🇧" },
  { code: "de", googleCode: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ru", googleCode: "ru", label: "Русский", flag: "🇷🇺" },
]

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#filomuz", label: "Filomuz" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("tr")
  const [showLangMenu, setShowLangMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (document.getElementById("google-translate-script")) return

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "tr",
          includedLanguages: "tr,en,de,ru",
          autoDisplay: false,
        },
        "google_translate_element"
      )
    }

    const script = document.createElement("script")
    script.id = "google-translate-script"
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true

    document.body.appendChild(script)
  }, [])

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode)
    setShowLangMenu(false)

    const selectedLang = languages.find((lang) => lang.code === langCode)
    if (!selectedLang) return

    const interval = setInterval(() => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null

      if (select) {
        select.value = selectedLang.googleCode
        select.dispatchEvent(new Event("change"))
        clearInterval(interval)
      }
    }, 300)

    setTimeout(() => clearInterval(interval), 5000)
  }

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/icon.png"
              alt="SZKVIPTRANSFER"
              className={`transition-all duration-500 object-contain ${
                isScrolled
                  ? "w-14 h-14 md:w-16 md:h-16"
                  : "w-16 h-16 md:w-20 md:h-20"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-500 ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+905379592075"
              className="flex items-center gap-2 text-sm font-medium text-gold transition-colors duration-500"
            >
              <Phone className="w-4 h-4" />
              <span>+90 537 959 20 75</span>
            </a>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-1.5 text-sm transition-colors duration-500 ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>
                  {languages.find((lang) => lang.code === currentLang)?.flag}
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    showLangMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showLangMenu && (
                <div className="absolute top-full right-0 mt-3 bg-white rounded-xl shadow-xl border border-neutral-100 py-1 min-w-[150px] overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-neutral-50 transition-colors ${
                        currentLang === lang.code
                          ? "text-gold font-medium"
                          : "text-neutral-700"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`lg:hidden ${
              isScrolled ? "bg-white" : "bg-black/90 backdrop-blur-sm"
            }`}
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm tracking-wide py-2 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+905379592075"
                className="flex items-center gap-2 text-gold text-sm font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                <span>+90 537 959 20 75</span>
              </a>

              <div className="flex items-center gap-2 pt-4 border-t border-neutral-200/20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      currentLang === lang.code
                        ? "bg-gold text-black"
                        : isScrolled
                        ? "bg-neutral-100 text-neutral-700"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
