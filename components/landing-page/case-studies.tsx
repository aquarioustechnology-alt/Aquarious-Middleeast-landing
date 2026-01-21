"use client"

import { useState } from "react"
import Image from "next/image"
import { scrollToSection } from "@/lib/scroll-to-section"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface CaseStudy {
  id: number
  company: string
  logo: string
  backgroundImage: string
  title: string
  description: string
  badge: string
  metrics: {
    primary: { value: string; label: string }
    secondary: { value: string; label: string }
    tertiary: { value: string; label: string }
  }
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: "Now It's Yours",
    logo: "/images/now-its-yours-logo.svg", // Keeping logo if available, or placeholder
    backgroundImage: "/images/now-its-yours-updated.webp",
    badge: "E-commerce",
    title: "3x Growth in Listings for Thailand's Pre-Loved Marketplace",
    description:
      "Empowering sustainable shopping by building a seamless platform for buying and selling pre-loved items across Thailand, combining intuitive design with robust e-commerce functionality.",
    metrics: {
      primary: { value: "3x", label: "Growth in Active Listings" },
      secondary: { value: "85%", label: "Increase in User Engagement" },
      tertiary: { value: "3.4x", label: "Monthly Active Sellers" },
    },
    tags: ["Website Development", "UX/UI Design", "Admin Panel"],
  },
  {
    id: 2,
    company: "SAGE Automation",
    logo: "/images/sage-automation-logo.svg",
    backgroundImage: "/images/sage-automation-bg.jpg",
    badge: "Industrial IoT",
    title: "Smart Infrastructure & IoT Control for Sydney Airport's Critical Assets",
    description:
      "Delivered precision automation for Sydney Airport's mission-critical assets, integrating 15+ asset types including HV systems, pump stations, and energy meters into a unified monitoring platform—enabling 360-degree situational awareness and 24/7 real-time operational visibility.",
    metrics: {
      primary: { value: "15+", label: "Asset Types Integrated" },
      secondary: { value: "24/7", label: "Real-Time Monitoring" },
      tertiary: { value: "100%", label: "Operational Visibility" },
    },
    tags: ["Industrial IoT", "Asset Management", "Smart Infrastructure"],
  },
  {
    id: 3,
    company: "Pipemaster",
    logo: "/images/pipemaster-logo.svg",
    backgroundImage: "/images/pipemaster-bg.jpg",
    badge: "Dashboard Dev",
    title: "HVAC & Hydronic Monitoring Dashboard for High-Stakes Industrial Systems",
    description:
      "A custom-engineered platform for real-time tracking of hydronic systems, providing pinpoint precision in temperature and fluid volume management. The dashboard tracks supply/return temperatures, fluid volumes (Water/Glycol), and system capacities across industrial HVAC projects.",
    metrics: {
      primary: { value: "0.1°C", label: "Monitoring Accuracy" },
      secondary: { value: "Real-time", label: "Data Logging" },
      tertiary: { value: "99.9%", label: "System Availability" },
    },
    tags: ["Dashboard Dev", "HVAC Controls", "Performance Tracking"],
  },
  {
    id: 4,
    company: "Siyab Trading",
    logo: "/images/siyab-logo.svg",
    backgroundImage: "/images/siyab-bg.jpg",
    badge: "Fire Safety",
    title: "Integrated Fire Prevention Platform for Oman's Leading Safety Provider",
    description:
      "A comprehensive digital solution for Muscat's 'One-Stop Shop' for fire prevention—managing the full lifecycle of protection from design to Annual Maintenance Contracts. Covers Fire Hydrant Systems, Sprinkler Systems, Fire Alarm installations, and LPG gas piping for industrial and commercial sectors.",
    metrics: {
      primary: { value: "100+", label: "Major Projects Completed" },
      secondary: { value: "24/7", label: "Safety Compliance" },
      tertiary: { value: "Elite", label: "Service Standards" },
    },
    tags: ["Website Revamp", "Service Management", "Fire Safety"],
  },
]

export function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSlideChange = (index: number) => {
    if (index !== activeSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveSlide(index)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const currentCase = caseStudies[activeSlide]

  return (
    <section id="case-studies" className="w-full pt-0 pb-[80px] px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-blue-100"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <ScrollReveal animation="fade-right" className="w-full lg:w-1/2 relative">
             <div className={`relative overflow-hidden rounded-[22px] aspect-[480/329] transition-all duration-700 ease-out ${isTransitioning ? "opacity-20 translate-x-4" : "opacity-100 translate-x-0"}`}>
                <Image
                  src={currentCase.backgroundImage || "/placeholder.svg"}
                  alt={`${currentCase.company} project`}
                  fill
                  className="object-cover"
                  priority
                />
             </div>
          </ScrollReveal>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <ScrollReveal animation="fade-up">
              <div
                className={`transition-all duration-700 ease-out ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
              >
                <span className="inline-block bg-[#E6F6FF] text-[#00A2FF] px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
                  {currentCase.badge}
                </span>
                
                <h2 className="mt-6 text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-[1.15] tracking-tight">
                  {currentCase.title}
                </h2>

                <p className="mt-6 text-gray-600 leading-relaxed text-[16px] sm:text-[18px]">
                  {currentCase.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Metrics */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className={`grid grid-cols-3 gap-6 py-0 border-t border-b border-gray-100 transition-all duration-700 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                <div>
                  <div className="text-[#00A2FF] text-3xl sm:text-4xl font-bold mb-1">{currentCase.metrics.primary.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium leading-tight">{currentCase.metrics.primary.label}</div>
                </div>
                <div className="border-l border-gray-100 pl-6">
                  <div className="text-[#00A2FF] text-3xl sm:text-4xl font-bold mb-1">{currentCase.metrics.secondary.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium leading-tight">{currentCase.metrics.secondary.label}</div>
                </div>
                <div className="border-l border-gray-100 pl-6">
                  <div className="text-[#00A2FF] text-3xl sm:text-4xl font-bold mb-1">{currentCase.metrics.tertiary.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium leading-tight">{currentCase.metrics.tertiary.label}</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tags and Navigation */}
            <ScrollReveal animation="fade-up" delay={300}>
               <div className={`flex flex-col gap-8 transition-all duration-700 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                  <div className="flex flex-wrap gap-3">
                    {currentCase.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-b from-[#C6ADFF] to-[#E1D4FF] text-white font-medium rounded-lg text-sm shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex gap-3 mt-4">
                    {caseStudies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeSlide
                            ? "w-8 bg-[#00A2FF]"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
