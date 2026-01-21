"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import ContactFormModal from "@/components/landing-page/form"
import { scrollToSection } from "@/lib/scroll-to-section"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showHeader, setShowHeader] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false) // Hide when scrolling down
      } else {
        setShowHeader(true) // Show when scrolling up
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`w-full transition-all duration-300 ease-in-out z-50 ${
          isScrolled ? "fixed top-0 bg-white/95 backdrop-blur-md shadow-lg py-2" : "relative bg-white py-4"
        } ${showHeader ? "translate-y-0" : "-translate-y-full"} px-6 lg:px-8`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          <Link href="https://theaquarious.com/" target="_blank" className="flex items-center">
            <Image src="/images/logo.png" alt="Aquarious Technology" width={180} height={60} className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center flex-1 justify-center space-x-8" style={{ color: "#000000" }}>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="flex items-center nav-text nav-hover transition-colors text-base font-medium cursor-pointer"
              style={{ color: "#000000" }}
            >
              Services
            </a>

            <a
              href="#ai-automation"
              onClick={(e) => handleNavClick(e, "ai-automation")}
              className="flex items-center nav-text nav-hover transition-colors text-base font-medium cursor-pointer"
              style={{ color: "#000000" }}
            >
              AI & Automation
            </a>

            <a
              href="#how-we-work"
              onClick={(e) => handleNavClick(e, "how-we-work")}
              className="nav-text nav-hover transition-colors text-base font-medium cursor-pointer"
              style={{ color: "#000000" }}
            >
              How we Work
            </a>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="flex items-center nav-text nav-hover transition-colors text-base font-medium cursor-pointer"
              style={{ color: "#000000" }}
            >
              About Us
            </a>

            <a
              href="#case-studies"
              onClick={(e) => handleNavClick(e, "case-studies")}
              className="nav-text nav-hover transition-colors text-base font-medium cursor-pointer"
              style={{ color: "#000000" }}
            >
              Case Studies
            </a>

            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, "industries")}
              className="flex items-center nav-text nav-hover transition-colors text-base font-medium cursor-pointer"
              style={{ color: "#000000" }}
            >
              Industries
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[var(--brand-blue)] text-white px-6 py-3 rounded-full btn-text btn-hover-glow transition-colors text-base cursor-pointer"
            >
              Contact with us
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 cursor-pointer" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-8 h-8 flex items-center justify-center relative">
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="block w-6 h-0.5 bg-current rotate-45 translate-y-0"></span>
                  <span className="block w-6 h-0.5 bg-current -rotate-45 -translate-y-0 absolute"></span>
                </div>
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}></div>

        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="block text-black nav-text py-2 cursor-pointer"
              >
                Services
              </a>

              <a
                href="#ai-automation"
                onClick={(e) => handleNavClick(e, "ai-automation")}
                className="block text-black nav-text py-2 cursor-pointer"
              >
                AI & Automation
              </a>

              <a
                href="#how-we-work"
                onClick={(e) => handleNavClick(e, "how-we-work")}
                className="block text-black nav-text py-2 cursor-pointer"
              >
                How we Work
              </a>

              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="block text-black nav-text py-2 cursor-pointer"
              >
                About Us
              </a>

              <a
                href="#case-studies"
                onClick={(e) => handleNavClick(e, "case-studies")}
                className="block text-black nav-text py-2 cursor-pointer"
              >
                Case Studies
              </a>

              <a
                href="#industries"
                onClick={(e) => handleNavClick(e, "industries")}
                className="block text-black nav-text py-2 cursor-pointer"
              >
                Industries
              </a>

              <button
                onClick={() => {
                  setIsContactModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full bg-[var(--brand-blue)] text-white px-6 py-3 rounded-full btn-text text-center mt-8 cursor-pointer"
              >
                Contact with us
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
