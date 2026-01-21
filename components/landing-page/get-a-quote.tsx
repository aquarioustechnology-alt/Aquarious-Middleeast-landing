"use client"

import { useState, useEffect } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ContactFormModal } from "@/components/landing-page/form"
import Link from "next/link"

export function GetAQuote() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const words = ["Excellence.", "Reliability.", "Trustworthy."]

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, 100) // Type each character every 100ms
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
          setDisplayedText("")
        }, 4000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Move to next word
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
      setIsTyping(true)
    }
  }, [displayedText, isTyping, currentWordIndex])

  return (
    <section className="relative w-full px-6 lg:px-8 pt-20 bg-white lg:py-4">
      <div className="max-w-[1440px] mx-auto bg-gradient-to-b from-[#0B020F] to-[#283048] rounded-[30px] px-8 lg:px-12 py-16 lg:py-20">
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="text-[#C6ADFF] block mb-2 min-h-[1.2em]">
                      {displayedText}
                      <span className="animate-pulse">|</span>
                    </span>
                    <span className="text-white">Our Minimum Bar For Client Delivery.</span>
                  </h2>
                  <p className="mb-8 leading-relaxed text-base text-white">
                    Every build we ship is held to the same standard: secure by design, scalable by default, and
                    measurable in outcomes. From discovery to launch, we run a documented process with disciplined
                    engineering and quality checks - so your product moves fast without rework.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-between bg-white text-black pl-6 sm:pl-8 pr-1 rounded-full min-w-[240px] h-[56px] transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1 text-base font-medium">
                      Talk to an Expert
                    </span>
                    <div className="w-[48px] h-[48px] bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Center Content - Circular Stats */}
            <ScrollReveal animation="scale-up" delay={200} className="lg:col-span-3">
              <div className="flex flex-col items-center justify-center gap-12">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  {/* Animated Curved Text */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ animation: "spin-slow 20s linear infinite" }}
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path id="circlePath1" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                    </defs>
                    <text
                      className="text-[10px] uppercase tracking-[0.3em] font-medium"
                      fill="rgba(255, 255, 255, 0.7)"
                    >
                      <textPath href="#circlePath1" startOffset="0%">
                        Project Executed Successfully • Project Executed Successfully •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Content */}
                  <div className="text-center z-10">
                    <div className="text-5xl lg:text-6xl font-bold mb-2 text-[rgba(198,173,255,1)]">600+</div>
                    <div className="text-gray-300 text-sm">
                      Projects
                      <br />
                      Delivered
                    </div>
                  </div>
                </div>

                <div className="relative w-56 h-56 flex items-center justify-center">
                  {/* Animated Curved Text */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ animation: "spin-slow 20s linear infinite" }}
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path id="circlePath2" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                    </defs>
                    <text
                      className="text-[10px] uppercase tracking-[0.3em] font-medium"
                      fill="rgba(255, 255, 255, 0.7)"
                    >
                      <textPath href="#circlePath2" startOffset="0%">
                        Industry Sectors • Industry Sectors • Industry Sectors •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Content */}
                  <div className="text-center z-10">
                    <div className="text-5xl lg:text-6xl font-bold mb-2 text-[rgba(198,173,255,1)]">130+</div>
                    <div className="text-gray-300 text-sm">
                      Industry
                      <br />
                      Sectors
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Content - Awards Grid */}
            <ScrollReveal animation="fade-left" delay={300} className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-6">
                <Link
                  href="https://clutch.co/profile/aquarious-technology#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/clutch-icon-1.png"
                    alt="Clutch Top IT Services India 2021"
                    className="w-32 h-32 object-contain"
                  />
                  <p className="text-sm text-center leading-relaxed text-gray-300">Top IT Services India 2021</p>
                </Link>

                <Link
                  href="https://www.goodfirms.co/company/aquarious-technology-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/goodfirms-icon.png"
                    alt="GoodFirms Top Mobile App Development"
                    className="w-32 h-32 object-contain"
                  />
                  <p className="text-sm text-center leading-relaxed text-gray-300">
                    Top Mobile App Development Company
                  </p>
                </Link>

                <Link
                  href="https://www.designrush.com/agency/profile/aquarious-technology-private-limited#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/design-20rush-20logo-20get-20a-20quote.png"
                    alt="Clutch Top IT Services"
                    className="w-32 h-32 object-contain"
                  />
                  <p className="text-sm text-center leading-relaxed text-gray-300">Top IT Company at DesignRush</p>
                </Link>

                <Link
                  href="https://www.guru.com/freelancers/aquarious-technology/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/guru-20white-20logo-202.png"
                    alt="Guru Top Development Company"
                    className="object-contain w-28 h-28"
                  />
                  <p className="text-sm text-center leading-relaxed text-gray-300">Top Development Company</p>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
