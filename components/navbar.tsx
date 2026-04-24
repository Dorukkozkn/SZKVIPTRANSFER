"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react"

const languages = [
  { code: "tr", label: "Turkce", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className={`text-xl md:text-2xl font-serif tracking-wide transition-colors duration-500 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            SZKVIPTRANSFER
          </span>
        </Link>

        {/* Desktop Navigation */}
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
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-500 ${
              isScrolled ? "text-gold" : "text-gold"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>+90 537 959 20 75</span>
          </a>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className={`flex items-center gap-1.5 text-sm transition-colors duration-500 ${
                isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{languages.find(l => l.code === currentLang)?.flag}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${showLangMenu ? "rotate-180" : ""}`} />
            </button>
            {showLangMenu && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-neutral-100 py-1 min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code)
                      setShowLangMenu(false)
                    }}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-neutral-50 transition-colors ${
                      currentLang === lang.code ? "text-gold font-medium" : "text-neutral-700"
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors duration-500 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden ${isScrolled ? "bg-white" : "bg-black/90 backdrop-blur-sm"}`}>
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
            
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-2 pt-4 border-t border-neutral-200/20">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    currentLang === lang.code 
                      ? "bg-gold text-black" 
                      : isScrolled ? "bg-neutral-100 text-neutral-700" : "bg-white/10 text-white"
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
  )
}
