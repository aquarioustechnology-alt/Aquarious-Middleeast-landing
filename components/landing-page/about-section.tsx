"use client"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

export function AboutSection() {
  const { ref: metricsRef, isInView: metricsInView } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projectsCount = useCounterAnimation(600, 2000, metricsInView)
  const retentionRate = useCounterAnimation(96, 2000, metricsInView)
  const clientsCount = useCounterAnimation(400, 2000, metricsInView)

  return (
    <section
      id="about"
      className="relative w-full px-6 lg:px-8 py-20 lg:py-28 lg:pt-20 lg:pb-20 bg-[rgba(243,247,253,1)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Content - animate from left */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <ScrollReveal animation="fade-right">
              <div className="inline-block flex justify-center lg:justify-start w-full">
                <span className="bg-[var(--brand-light-blue)] text-[#000000] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  About Aquarious
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={100}>
              <h2 className="text-black mt-4 mb-0 text-[28px] sm:text-4xl lg:text-5xl font-semibold leading-tight">
                Why work with Aquarious? Trusted by Leading Gulf Enterprises
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <p className="leading-relaxed text-[15px] sm:text-base tracking-[-0.01em] text-[rgba(0,0,0,1)]">
                <strong>Aquarious Technology is a global software development company</strong>, serving enterprises
                across the Gulf region and international markets. For 12+ years, we&apos;ve built web, mobile, and cloud
                platforms for companies of all sizes—from ambitious startups to leading regional corporations.
              </p>
              <p className="leading-relaxed mt-4 text-[15px] sm:text-base tracking-[-0.01em] text-[rgba(0,0,0,1)]">
                If you're looking for world-class execution with deep understanding of Gulf business practices and
                regional compliance, we're the partner to build with.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div ref={metricsRef} className="flex justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-16 pt-4">
                <div className="space-y-3">
                  <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-[#C6ADFF] leading-none mb-3">
                    {projectsCount}+
                  </div>
                  <div className="w-full h-[1px] bg-black opacity-20"></div>
                  <div className="text-[#000000] text-[12px] sm:text-[14px] lg:text-[15px] font-medium">
                    Projects
                    <br />
                    Delivered
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-[#000000] leading-none mb-3">
                    {retentionRate}%
                  </div>
                  <div className="w-full h-[1px] bg-black opacity-20"></div>
                  <div className="text-[#000000] text-[12px] sm:text-[14px] lg:text-[15px] font-medium">
                    Client Retention
                    <br />
                    Rate
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-[#C6ADFF] leading-none mb-3">
                    {clientsCount}+
                  </div>
                  <div className="w-full h-[1px] bg-black opacity-20"></div>
                  <div className="text-[#000000] text-[12px] sm:text-[14px] lg:text-[15px] font-medium">
                    Satisfied
                    <br />
                    Clients
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Illustration - animate from right */}
          <ScrollReveal animation="fade-left" delay={200} className="lg:w-1/2 relative">
            <div className="relative w-full max-w-[570px] mx-auto">
              <Image
                src="/images/about-us-illustration.png"
                alt="About Aquarious Technology"
                width={570}
                height={570}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
