"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import {
  ShieldCheck,
  Timer,
  FileCheck,
  TrendingUp,
  Zap,
  Activity,
  PhoneCall,
  CheckCircle,
  Coins,
  Server,
  ArrowRightLeft,
  Shield,
  type LucideIcon,
} from "lucide-react"

const aiSolutions = [
  {
    id: 1,
    badge: "Identity Verification",
    badgeColor: "bg-[#E6F4FF] text-[#000000]",
    title: "AI-Powered eKYC: Seamless Digital Onboarding Built for Compliance & Speed",
    logo: "/images/logo.png",
    logoAlt: "Aquarious AI eKYC",
    descriptionPoints: [
      "Instant Identity Verification: Onboard customers across the GCC in seconds using advanced AI facial recognition and 3D liveness detection that prevents spoofing attacks with 99.9% accuracy.",
      "Regulatory Compliance: Fully compliant with UAE Central Bank, Saudi SAMA, and regional KYC regulations, offering on-premise deployment options to ensure strict data sovereignty.",
      "Seamless User Experience: Reduce abandonments with our mobile-first SDKs that integrate effortlessly into your existing banking apps, delivering a frictionless, paperless journey.",
    ],
    metrics: [
      {
        Icon: ShieldCheck,
        value: "95%",
        label: "Verification Accuracy",
      },
      {
        Icon: Timer,
        value: "30s",
        label: "Average Onboarding Time",
      },
      {
        Icon: FileCheck,
        value: "100%",
        label: "Regulatory Compliance",
      },
    ],
    image: "/images/Solutions-1.png",
    imageAlt: "AI eKYC Platform Dashboard",
  },
  {
    id: 2,
    badge: "Marketing Intelligence",
    badgeColor: "bg-[#E6F4FF] text-[#000000]",
    title: "AI-Driven Marketing Automation: Personalized Campaigns That Convert",
    logo: "/images/logo.png",
    logoAlt: "Aquarious Marketing AI",
    descriptionPoints: [
      "Hyper-Personalized Campaigns: Leverage predictive AI to score customer behavior and forecast purchase intent, allowing you to target the right specialized audience for maximum ROI.",
      "Multi-Channel Orchestration: Create unified customer journeys with automated workflows that trigger seamless messaging across SMS, WhatsApp, email, and social platforms.",
      "Real-Time Optimization: Continuously improve campaign performance with attribution modeling and analytics specifically tuned for Gulf consumer engagement patterns.",
    ],
    metrics: [
      {
        Icon: TrendingUp,
        value: "3x",
        label: "Higher Conversion Rates",
      },
      {
        Icon: Zap,
        value: "70%",
        label: "Reduced Manual Effort",
      },
      {
        Icon: Activity,
        value: "24/7",
        label: "Real-Time Optimization",
      },
    ],
    image: "/images/Solutions-2.png",
    imageAlt: "AI Marketing Automation Dashboard",
  },
  {
    id: 3,
    badge: "Voice Technology",
    badgeColor: "bg-[#E6F4FF] text-[#000000]",
    title: "AI Voice Calling: Intelligent Conversations That Scale Your Business",
    logo: "/images/logo.png",
    logoAlt: "Aquarious Voice AI",
    descriptionPoints: [
      "Arabic & English Fluency: Deploy intelligent voice assistants capable of understanding context and sentiment in multiple regional Arabic dialects (Khaleeji, Levantine, Egyptian) and English.",
      "High-Volume Handling: Effortlessly manage thousands of concurrent calls for feedback surveys, debt collection, and appointment scheduling, automatically syncing data with your CRM.",
      "Cost-Effective Scale: Scale your support operations instantly during peak seasons like Ramadan or Black Friday, reducing operational costs by up to 60% compared to traditional call centers.",
    ],
    metrics: [
      {
        Icon: PhoneCall,
        value: "10k+",
        label: "Concurrent Calls Handled",
      },
      {
        Icon: CheckCircle,
        value: "85%",
        label: "First-Call Resolution",
      },
      {
        Icon: Coins,
        value: "60%",
        label: "Cost Reduction",
      },
    ],
    image: "/images/Solutions-3.png",
    imageAlt: "AI Voice Calling Platform",
  },
  {
    id: 4,
    badge: "Financial Technology",
    badgeColor: "bg-[#E6F4FF] text-[#000000]",
    title: "Fintech Solutions: Secure, Scalable Financial Platforms for the Digital Economy",
    logo: "/images/logo.png",
    logoAlt: "Aquarious Fintech",
    descriptionPoints: [
      "Scalable Financial Platforms: Architect secure digital wallets, payment gateways, and lending systems on a microservices infrastructure built for high concurrency and valid uptime.",
      "Regional Integration: Accelerate market entry with pre-built connectors for GCC open banking APIs, local payment gateways (Sadad, KNET, Fawry), and credit bureaus.",
      "Security First: Protect your platform with enterprise-grade encryption, PCI-DSS compliance, and an AI-driven risk engine that detects and prevents fraud in real-time.",
    ],
    metrics: [
      {
        Icon: Server,
        value: "99.9%",
        label: "Platform Uptime",
      },
      {
        Icon: ArrowRightLeft,
        value: "500M+",
        label: "Transactions Processed",
      },
      {
        Icon: Shield,
        value: "98%",
        label: "Fraud Detection Rate",
      },
    ],
    image: "/images/Solutions-4.png",
    imageAlt: "Fintech Platform Dashboard",
  },
]

function AnimatedMetric({ value, label, Icon }: { value: string; label: string; Icon: LucideIcon }) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.3 })

  // Extract numeric value and suffix
  const numericMatch = value.match(/(\d+)/)
  const numericValue = numericMatch ? Number.parseInt(numericMatch[1]) : 0
  const suffix = value.replace(/\d+/, "")

  const animatedCount = useCounterAnimation(numericValue, 2000, isInView)

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <div className="text-[#00A2FF] font-bold text-[rgba(198,173,255,1)] text-4xl">
          {animatedCount}
          {suffix}
        </div>
      </div>
      <p className="text-white text-sm leading-snug sm:text-sm">{label}</p>
    </div>
  )
}

export function RealUsage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentStudy = aiSolutions[currentIndex]

  useEffect(() => {
    if (!isAutoPlaying || aiSolutions.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiSolutions.length)
    }, 40000) // Change slide every 40 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + aiSolutions.length) % aiSolutions.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % aiSolutions.length)
  }

  return (
    <section className="relative w-full px-6 lg:px-8 py-20 lg:py-28 bg-white lg:pt-7">
      <div className="max-w-8xl mx-auto">
        {/* Section Heading */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] text-black mb-6 leading-tight tracking-normal font-semibold">
              AI-Powered Solutions Driving Regional Transformation
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700 max-w-4xl mx-auto">
              Harnessing artificial intelligence to deliver intelligent automation, seamless compliance, and exceptional customer experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Study Card */}
        <ScrollReveal animation="scale-up" delay={200}>
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image src="/images/real-talents-bg.jpg" alt="Background" fill className="object-cover" />
            </div>

            <div className="relative z-10 p-8 sm:p-10 lg:p-16 space-y-8 lg:space-y-12 lg:py-12 lg:px-12">
              {aiSolutions.length > 1 && (
                <div className="absolute top-8 right-8 flex items-center gap-3 z-20">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-lg group cursor-pointer"
                    aria-label="Previous case study"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-[#00A2FF] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-lg group cursor-pointer"
                    aria-label="Next case study"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-[#00A2FF] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              <div className="transition-opacity duration-500" key={currentIndex}>
                {/* Badge only at top */}
                <div className="mb-6">
                  {/* Badge - animate from left */}
                  <ScrollReveal animation="fade-right">
                    <div className="inline-block">
                      <span
                        className={`px-4 py-2 ${currentStudy.badgeColor} text-sm font-medium rounded-full tracking-wide`}
                      >
                        {currentStudy.badge}
                      </span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Two Columns Layout */}
                <div className="flex flex-col lg:flex-row lg:gap-24">
                  {/* Left Column - Title, Description, Metrics */}
                  <ScrollReveal animation="fade-right" delay={200} className="lg:w-[55%] space-y-6">
                    {/* Title with brand blue prefix */}
                    <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.3] font-medium">
                      {currentStudy.title.includes(':') ? (
                        <>
                          <span className="text-[#00A2FF]">{currentStudy.title.split(':')[0]}</span>
                          <span className="text-white">{currentStudy.title.substring(currentStudy.title.indexOf(':'))}</span>
                        </>
                      ) : (
                        <span className="text-white">{currentStudy.title}</span>
                      )}
                    </h3>

                    {/* Description */}
                    {/* Description as bullet points */}
                    <div className="space-y-6">
                      {currentStudy.descriptionPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Image
                            src="/images/Bullet icon.svg"
                            alt="Bullet"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0 w-5 h-5"
                          />
                          <p className="sm:text-[17px] leading-relaxed text-gray-300 text-sm">
                            {point.includes(":") ? (
                              <>
                                <span className="font-semibold text-white">{point.split(":")[0]}:</span>
                                {point.substring(point.indexOf(":") + 1)}
                              </>
                            ) : (
                              point
                            )}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Metrics - each animates from bottom with stagger */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-white/20 pt-4">
                      {currentStudy.metrics.map((metric, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={300 + idx * 100}>
                          <div
                            className={`${idx === 0 ? "sm:pr-[14px]" : idx === 1 ? "sm:px-[14px]" : "sm:pl-[14px]"}`}
                          >
                            <AnimatedMetric value={metric.value} label={metric.label} Icon={metric.Icon} />
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* Right Column - Image - animate from right */}
                  <ScrollReveal
                    animation="fade-left"
                    delay={300}
                    className="lg:w-[45%] flex items-center justify-end mt-8 lg:mt-0"
                  >
                    <div className="relative w-full flex justify-center lg:justify-end">
                      <Image
                        src={currentStudy.image || "/placeholder.svg"}
                        alt={currentStudy.imageAlt}
                        width={650}
                        height={480}
                        className="h-auto rounded-lg shadow-2xl w-full max-w-[500px] lg:max-w-[550px]"
                        unoptimized
                        priority
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {aiSolutions.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {aiSolutions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setCurrentIndex(idx)
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to case study ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default RealUsage
