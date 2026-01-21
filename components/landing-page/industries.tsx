"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ContactFormModal } from "@/components/landing-page/form"

export function Industries() {
  const [activeTab, setActiveTab] = useState("retail")
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const industries = [
    { id: "healthcare", name: "Healthcare" },
    { id: "retail", name: "Retail & E-Commerce" },
    { id: "realestate", name: "Real Estate" },
    { id: "logistics", name: "Logistics" },
    { id: "education", name: "Education" },
    { id: "finance", name: "Finance" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "government", name: "Govt. & Public Sector" },
  ]

  const industryContent: Record<string, { title: string; features: string[]; images: string[] }> = {
    healthcare: {
      title:
        "Digital health solutions, telemedicine platforms, and patient management systems to improve healthcare delivery and patient outcomes.",
      features: [
        "HIPAA-compliant patient portals and electronic health records (EHR) systems.",
        "AI-powered diagnostic tools and predictive analytics for better patient care.",
        "Telemedicine platforms with secure video consultations and appointment scheduling.",
      ],
      images: ["/images/healthcare-1.jpg", "/images/healthcare-2.jpg"],
    },
    retail: {
      title:
        "Custom storefronts, mobile apps, inventory automation, and AI-led personalization to elevate digital commerce and drive conversions.",
      features: [
        "Custom eCommerce platforms built on Shopify or custom stacks with seamless UX and fast checkout.",
        "AI-powered product recommendations that personalize shopping experiences in real time.",
        "Advanced analytics, SEO, and performance marketing integrations to drive traffic and conversions.",
      ],
      images: ["/images/retail-ecommerce-1.png", "/images/retail-ecommerce-2.png"],
    },
    realestate: {
      title:
        "Property management systems, virtual tours, and CRM solutions to streamline real estate operations and enhance client experiences.",
      features: [
        "Property listing platforms with advanced search and filtering capabilities.",
        "Virtual reality tours and 3D property visualization tools.",
        "CRM systems for lead management and automated marketing campaigns.",
      ],
      images: ["/images/real-estate-1.jpg", "/images/real-estate-2.jpg"],
    },
    logistics: {
      title:
        "Supply chain optimization, fleet management, and tracking systems to improve operational efficiency and delivery performance.",
      features: [
        "Real-time tracking and route optimization for delivery management.",
        "Warehouse management systems with inventory automation.",
        "Supply chain analytics and predictive maintenance solutions.",
      ],
      images: ["/images/logistics-1.jpg", "/images/logistics-2.jpg"],
    },
    education: {
      title:
        "Learning management systems, virtual classrooms, and educational apps to enhance learning experiences and outcomes.",
      features: [
        "LMS platforms with interactive content and progress tracking.",
        "Virtual classroom solutions with collaboration tools.",
        "AI-powered personalized learning paths and assessment systems.",
      ],
      images: ["/images/education-1.jpg", "/images/education-2.jpg"],
    },
    finance: {
      title:
        "Fintech solutions, digital banking platforms, and investment management tools to modernize financial services.",
      features: [
        "Secure digital banking platforms with multi-factor authentication.",
        "Investment portfolio management and trading applications.",
        "AI-driven fraud detection and risk assessment systems.",
      ],
      images: ["/images/finance-1.jpg", "/images/finance-2.jpg"],
    },
    manufacturing: {
      title:
        "Industrial IoT solutions, production monitoring, and quality control systems to optimize manufacturing processes.",
      features: [
        "IoT-enabled production monitoring and predictive maintenance.",
        "Quality control systems with automated inspection and reporting.",
        "Supply chain integration and inventory management solutions.",
      ],
      images: ["/images/manufacturing-1.jpg", "/images/manufacturing-2.jpg"],
    },
    government: {
      title:
        "Digital governance solutions, citizen portals, and public service platforms to improve government efficiency and citizen engagement.",
      features: [
        "Citizen service portals with online application and payment processing.",
        "Digital identity verification and document management systems.",
        "Data analytics platforms for policy making and resource allocation.",
      ],
      images: ["/images/government-1.jpg", "/images/government-2.jpg"],
    },
  }

  const currentContent = industryContent[activeTab]

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  if (isMobile) {
    return (
      <section id="industries" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Industries Badge */}
          <ScrollReveal animation="fade-up">
            <div className="flex justify-center mb-6">
              <span
                className="inline-block px-6 py-2 rounded-full text-base font-medium"
                style={{ backgroundColor: "#e6f6ff", color: "#000000" }}
              >
                Industries
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal animation="fade-up" delay={100}>
            <h2
              className="sm:text-4xl text-center mb-8 font-medium text-3xl"
              style={{ color: "#000000", lineHeight: "1.1" }}
            >
              Industries We Serve
            </h2>
          </ScrollReveal>

          {/* Accordion List */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="space-y-0">
              {industries.map((industry) => {
                const content = industryContent[industry.id]
                const isOpen = openAccordion === industry.id

                return (
                  <div key={industry.id} className="border-b border-[#b3b3b3]">
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(industry.id)}
                      className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                    >
                      <span className="font-medium" style={{ color: "#000000", fontSize: "16px" }}>
                        {industry.name}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Accordion Content */}
                    {isOpen && (
                      <div className="pb-6 space-y-6">
                        {/* Images */}
                        <div className="relative w-full h-64 sm:h-60">
                          {/* Background Image - Rotated */}
                          <div className="absolute top-4 left-32 w-40 sm:w-48 h-40 sm:h-48 transform rotate-6 z-10">
                            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-full">
                              <Image
                                src={content.images[1] || "/placeholder.svg"}
                                alt={`${industry.name} technology`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Foreground Image - Main */}
                          <div className="absolute top-0 left-0 w-44 sm:w-52 h-44 sm:h-52 transform -rotate-3 z-20">
                            <div className="relative rounded-xl overflow-hidden shadow-xl w-full h-full">
                              <Image
                                src={content.images[0] || "/placeholder.svg"}
                                alt={`${industry.name} solution`}
                                width={400}
                                height={320}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h4 className="text-lg leading-[110%]" style={{ color: "#000000" }}>
                            {content.title}
                          </h4>

                          <div className="space-y-2">
                            {content.features.map((feature, idx) => (
                              <p key={idx} className="text-base leading-relaxed" style={{ color: "#000000" }}>
                                {feature}
                              </p>
                            ))}
                          </div>

                          <div className="pt-2">
                            <button
                              onClick={() => setIsModalOpen(true)}
                              className="group inline-flex items-center justify-between bg-black text-white pl-6 pr-1 rounded-full min-w-[240px] h-[54px] transition-all duration-300 hover:scale-105 cursor-pointer"
                            >
                              <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1 text-[16px] font-medium">
                                Schedule a Call
                              </span>
                              <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 flex-shrink-0">
                                <svg
                                  className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-all duration-300"
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
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="industries" className="py-8 lg:py-12 bg-white lg:pb-16 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal animation="fade-up">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold" style={{ lineHeight: "1.08" }}>
                Industries We Serve
              </h2>
            </div>
          </ScrollReveal>

          {/* Industry Tabs */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex overflow-x-auto scrollbar-hide gap-1 sm:gap-2 lg:gap-4 pb-2 sm:pb-0 border-b border-gray-200">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setActiveTab(industry.id)}
                    className={`px-2 sm:px-3 py-2 font-medium transition-all duration-300 border-b-2 whitespace-nowrap flex-shrink-0 text-xs sm:py-2.5 text-[rgba(0,0,0,1)] lg:px-4 cursor-pointer ${
                      activeTab === industry.id
                        ? "text-[#00A2FF] border-[#00A2FF]"
                        : "text-gray-600 border-transparent hover:text-[#00A2FF] hover:border-gray-300"
                    }`}
                    style={{ fontSize: "16px" }}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Content Area */}
          <div className="grid lg:grid-cols-10 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Content - 70% */}
            <ScrollReveal animation="fade-right" delay={200} className="lg:col-span-7 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-lg sm:text-xl lg:text-2xl tracking-[-0.015em] font-medium leading-[130%]">
                  {currentContent.title}
                </h4>

                <div className="sm:space-y-2">
                  {currentContent.features.map((feature, index) => (
                    <p key={index} className="leading-relaxed text-base text-[rgba(0,0,0,1)] sm:text-base font-light">
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="pt-2 sm:pt-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-between bg-black text-white pl-6 sm:pl-8 pr-1 rounded-full min-w-[240px] h-[62px] transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1 text-[18px] sm:text-base font-medium pr-2">
                      Schedule a Call
                    </span>
                    <div className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-black group-hover:translate-x-0.5 transition-all duration-300"
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

            {/* Right Images - 30% */}
            <ScrollReveal animation="fade-left" delay={300} className="lg:col-span-3 order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-72 max-w-sm mx-auto lg:max-w-none lg:h-72">
                {/* Background Image - Rotated */}
                <div className="absolute top-2 sm:top-4 right-0 w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 transform rotate-6 z-10">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full h-full">
                    <Image
                      src={currentContent.images[1] || "/placeholder.svg"}
                      alt={`${industries.find((i) => i.id === activeTab)?.name} technology`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Foreground Image - Main */}
                <div className="absolute top-0 left-0 w-44 sm:w-52 lg:w-64 h-44 sm:h-52 lg:h-64 transform -rotate-3 z-20">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl w-full h-full">
                    <Image
                      src={currentContent.images[0] || "/placeholder.svg"}
                      alt={`${industries.find((i) => i.id === activeTab)?.name} solution`}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ContactFormModal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
