"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-green-100 relative">
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-12 rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#f0fdf4"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="reveal-on-scroll text-center sm:text-left">
            <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-1.5 sm:p-2 rounded-full animate-pulse-slow organic-shape-1">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-green-600">Qkart</span>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Your one-stop shop for premium plants, trees, and gardening supplies.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {["facebook", "twitter", "instagram", "pinterest"].map((social, index) => (
                <a
                  key={social}
                  href="#"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all-300 hover-scale animate-fade-in touch-larger-hit"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Quick Links",
              links: ["Home", "Shop", "About Us", "Contact"],
            },
            {
              title: "Customer Service",
              links: ["Shipping Policy", "Returns & Refunds", "FAQs", "Plant Care Guides"],
            },
            {
              title: "Contact Us",
              content: [
                "123 Garden Street",
                "Greenville, GR 12345",
                "Email: info@qkart.com",
                "Phone: (123) 456-7890",
              ],
            },
          ].map((column, index) => (
            <div
              key={index}
              className="reveal-on-scroll text-center sm:text-left"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 animate-slide-up">{column.title}</h3>
              {column.links ? (
                <ul className="space-y-3 sm:space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li
                      key={link}
                      className="animate-slide-right"
                      style={{ animationDelay: `${linkIndex * 100}ms` }}
                    >
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-green-600 transition-colors-300 animated-underline inline-block text-sm sm:text-base touch-larger-hit"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <address className="not-italic text-gray-600 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  {column.content?.map((line, lineIndex) => (
                    <p
                      key={line}
                      className="animate-slide-right"
                      style={{ animationDelay: `${lineIndex * 100}ms` }}
                    >
                      {line}
                    </p>
                  ))}
                </address>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-green-100 text-center text-gray-500 text-xs sm:text-sm animate-fade-in">
          <p>© {new Date().getFullYear()} Qkart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}