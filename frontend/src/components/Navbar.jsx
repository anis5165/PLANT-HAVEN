"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const navItemRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-2 rounded-full">
                <img src="/qkartlogo.png" alt="" height={64} width={40} />
              </div>
              <span className="text-xl font-bold text-green-600">Qkart</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-green-100 transition-all-300 touch-larger-hit"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-600" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center" aria-label="Main navigation">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "#Browse-products" },
              { name: "Categories", href: "#Categories" },
              { name: "About", href: "#About" },
              { name: "Contact", href: "#Contact" }
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl md:text-3xl font-bold py-4 relative group animated-underline touch-larger-hit"
                style={{
                  transitionDelay: prefersReducedMotion ? 0 : `${index * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-4 mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full border-2 border-[#3fa267] px-6 py-3 text-[#379b5f] rounded-lg hover:bg-[#DCF8EA] transition-all-300 text-lg font-semibold"
              style={{
                transitionDelay: prefersReducedMotion ? 0 : '250ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Login
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[#55E690] px-6 py-3 text-white rounded-lg hover:bg-green-600 transition-all-300 text-lg font-semibold"
              style={{
                transitionDelay: prefersReducedMotion ? 0 : '300ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Register
            </button>
          </div>

          <div className="mt-auto">
            <div className="flex gap-4 justify-center" role="list" aria-label="Social media links">
              {["facebook", "twitter", "instagram", "pinterest"].map((social, index) => (
                <a
                  key={social}
                  href="#"
                  className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all-300 hover-scale touch-larger-hit"
                  style={{
                    transitionDelay: prefersReducedMotion ? 0 : `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  aria-label={`Visit our ${social} page`}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrollY > 50 ? "backdrop-blur-md bg-white/70 border-b border-green-100 py-3" : "bg-transparent py-5"
        }`}
        style={{
          willChange: 'transform, opacity',
          transform: `translateZ(0)`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        <div className="container mx-auto px-4 md:px-28 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="bg-gradient-to-br from-green-400 to-emerald-200 p-2 rounded-full animate-pulse-slow organic-shape-1">
              <img src="/qkartlogo.png" alt="" height={64} width={40} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-4xl font-bold text-green-600">Qkart</span>
              <span className="text-[10px]">Tiny Hands, Green Lands</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8" ref={navItemRef} aria-label="Main navigation">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "#Browse-products" },
              { name: "Categories", href: "#Categories" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium relative group nav-item animated-underline"
                style={{
                  transitionDelay: prefersReducedMotion ? 0 : `${index * 50}ms`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 animate-fade-in">
            <button className="p-2 rounded-full hover:bg-green-100 transition-all-300 hover-scale touch-larger-hit">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button
                className="hidden md:inline-block border border-[#3fa267] px-4 py-1 text-[#379b5f] rounded hover:bg-[#DCF8EA] transition-all-300"
            >Login</button>
            <button
                className="hidden md:inline-block bg-[#55E690] px-4 py-2 text-white rounded hover:bg-green-600 transition-all-300"
            >Register</button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-green-100 transition-all-300 hover-scale touch-larger-hit"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}