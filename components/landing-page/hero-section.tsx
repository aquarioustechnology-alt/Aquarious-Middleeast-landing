"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ContactFormModal } from "./form"
import { scrollToSection } from "@/lib/scroll-to-section"

const testimonials = [
  {
    firstLine: "The Team Was Very Professional",
    quote:
      "Our company recently and has continued to work with the development team at Aquarious, and we couldn't be happier with the results. The team was professional, knowledgeable, and efficient in delivering a high-quality product that met our requirements.",
    author: "Clarence Cannon",
    company: "Vert Energy Group",
    logo: "/images/vertpro-logo.svg",
    ratingLogo: "/images/design-rush-rating-icon.png",
  },
  {
    firstLine: "They Did Great!",
    quote:
      "Aquarious Technology Pvt Ltd launched a bug-free, highly responsive app. As a result, we saw an increase in user engagement while receiving positive feedback from early adopters. The team met deadlines and promptly responded to queries and concerns. Their technical expertise stood out.",
    author: "David Jata",
    company: "Loeb & Loeb LLP",
    logo: "/images/loeb-loeb-llp-icon.svg",
    ratingLogo: "/images/clutch-rating-icon.png",
  },
  {
    firstLine: "Highly Recommended!",
    quote:
      "I highly recommend these guys. I have been working with them for over 5 years and have nothing but good things to say. High quality code, easy to work with and always meets deliverable dates. Hire them.",
    author: "Karriem Adams",
    company: "AllPoker",
    logo: "/images/allpoker-logo.svg",
    ratingLogo: "/images/design-rush-rating-icon.png",
  },
]

export function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-10 w-full px-6 lg:px-8 py-12 pt-24 lg:pt-32">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero-bg.png" alt="" fill className="object-cover" priority quality={85} />
      </div>

      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-6 sm:gap-6 lg:gap-[5%] pb-32">
          <div className="lg:w-[60%] w-full space-y-6 lg:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <ScrollReveal animation="fade-right">
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link href="https://clutch.co/profile/aquarious-technology" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/clutch-badge-1.png"
                    alt="Clutch Top IT Services India 2021"
                    width={80}
                    height={80}
                    className="h-14 sm:h-20 lg:h-20 w-auto object-contain animate-swing"
                    style={{ animationDelay: "0s" }}
                  />
                </Link>
                <Link
                  href="https://www.goodfirms.co/company/aquarious-technology-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/goodfirms-badge.png"
                    alt="GoodFirms Top Mobile App Development Company"
                    width={80}
                    height={80}
                    className="h-14 sm:h-20 lg:h-20 w-auto object-contain animate-swing"
                    style={{ animationDelay: "0.3s" }}
                  />
                </Link>
                <Link href="https://clutch.co/profile/aquarious-technology" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/clutch-20top-20developer-20image.png"
                    alt="Clutch Badge"
                    width={80}
                    height={80}
                    className="h-14 sm:h-20 lg:h-20 w-auto object-contain animate-swing"
                    style={{ animationDelay: "0.6s" }}
                  />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1
                className="font-heading font-semibold text-[34px] sm:text-[56px] lg:text-[62px] xl:text-[66px] 2xl:text-[70px]"
                style={{ lineHeight: "102%" }}
              >
                <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                  <div className="text-black" style={{ letterSpacing: "-0.015em" }}>
                    AI & Innovation
                  </div>
                  <div
                    className="flex items-center justify-center lg:justify-start gap-[12px] sm:gap-[16px] lg:gap-[21px] text-black flex-wrap"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    <Image
                      src="/images/heading-gradient.png"
                      alt=""
                      width={100}
                      height={40}
                      className="object-contain flex-shrink-0 w-[60px] sm:w-[80px] lg:w-[100px] h-auto max-md:hidden"
                    />
                    <span>For The Gulf</span>
                  </div>

                </div>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <p
                className="text-[15px] sm:text-[17px] lg:text-[18px] font-normal leading-[150%] max-w-2xl mx-auto lg:mx-0"
                style={{ color: "#000000" }}
              >
                Empowering enterprises across the Gulf region with secure web platforms, mobile apps, and intelligent automation
                built for speed, reliability, and global standards.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start pt-4 gap-6 md:gap-8 w-full">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-between bg-black text-white pl-5 sm:pl-6 lg:pl-8 pr-1 rounded-full btn-text btn-hover-enhanced w-full md:w-auto md:min-w-[320px] lg:min-w-[280px] h-[54px] sm:h-[58px] lg:h-[62px] transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1 text-[16px] sm:text-[17px] lg:text-[18px] font-medium pr-6">
                    Jump-Start Your Project
                  </span>
                  <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] lg:w-[54px] lg:h-[54px] bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-0.5 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-black underline hover:text-gray-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Case Studies
                </button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-left" delay={200} className="lg:w-[40%] w-full relative pt-10 lg:pt-0">
            <div className="relative w-full max-w-[340px] md:max-w-[400px] lg:max-w-[440px] h-auto mx-auto">
              <Image
                src="/images/hero-gradient.png"
                alt=""
                width={440}
                height={492}
                className="w-full h-[460px] md:h-[500px] lg:h-full object-cover rounded-[20px] md:rounded-[20px] lg:rounded-none"
                priority
              />

              <div className="absolute -top-8 md:-top-10 lg:-top-12 -left-2 md:-left-4 lg:-left-8 w-[280px] md:w-[310px] lg:w-[330px] min-h-[280px] md:min-h-[310px] lg:min-h-[330px] h-auto bg-white rounded-[20px] lg:rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4 md:p-5 lg:p-6 border border-gray-100 transition-all duration-500 mb-24 md:mb-28 lg:mb-0">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-3 md:space-y-4">
                    <Image
                      src="/images/quote-icon.svg"
                      alt=""
                      width={40}
                      height={32}
                      className="opacity-80 w-8 md:w-10 h-auto"
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <Image
                        src={testimonials[currentTestimonial].ratingLogo || "/images/google-logo.svg"}
                        alt="Rating"
                        width={90}
                        height={30}
                        className="w-[70px] md:w-[80px] lg:w-[90px] h-auto"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div
                        key={`firstline-${currentTestimonial}`}
                        className="text-[13px] md:text-[14px] lg:text-[15px] font-semibold text-black animate-fadeIn"
                      >
                        {testimonials[currentTestimonial].firstLine}
                      </div>

                      <p
                        key={currentTestimonial}
                        className="text-[12px] md:text-[13px] lg:text-[14px] leading-[1.5] text-gray-800 animate-fadeIn"
                      >
                        {testimonials[currentTestimonial].quote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between animate-fadeIn pt-7">
                    <div className="border-l-4 border-[rgba(0,162,255,1)] pl-2 md:pl-3 flex flex-col">
                      <div
                        className="font-semibold text-black text-[16px] sm:text-[17px] lg:text-[18px]"
                        style={{ letterSpacing: "-0.01em", lineHeight: "110%" }}
                      >
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-[11px] md:text-[12px] lg:text-[13px] text-gray-600">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <Image
                      src={testimonials[currentTestimonial].logo || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].company}
                      width={60}
                      height={60}
                      className="object-contain w-12 md:w-14 lg:w-[60px] h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 translate-y-[30%] md:translate-y-[35%] lg:translate-y-[40%] lg:translate-x-8 w-[300px] md:w-[350px] lg:w-[390px] h-[150px] md:h-[165px] lg:h-[180px] bg-white rounded-[20px] lg:rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4 md:p-5 lg:p-6 border border-gray-100">
                <h3 className="text-[13px] md:text-[14px] lg:text-[15px] text-gray-600 text-center mb-3 md:mb-4">
                  Trusted by Fortune Companies
                </h3>
                <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">
                  <Image
                    src="/images/linde-logo.jpg"
                    alt="Linde"
                    width={80}
                    height={30}
                    className="object-contain w-16 md:w-20 h-auto"
                  />
                  <Image
                    src="/images/Siyab-logo.png"
                    alt="Siyab"
                    width={80}
                    height={30}
                    className="object-contain w-16 md:w-20 h-auto"
                  />
                  <Image
                    src="/images/funcrop-logo.avif"
                    alt="Funcrop"
                    width={80}
                    height={30}
                    className="object-contain w-16 md:w-20 h-auto"
                  />
                  <Image
                    src="/images/masterflow-logo.svg"
                    alt="Masterflow"
                    width={80}
                    height={30}
                    className="object-contain w-16 md:w-20 h-auto"
                  />
                  <Image
                    src="/images/lazada-logo2.png"
                    alt="Lazada"
                    width={80}
                    height={30}
                    className="object-contain w-16 md:w-20 h-auto"
                  />
                  <Image
                    src="/images/systemair-hero-logo.png"
                    alt="Systemair"
                    width={80}
                    height={30}
                    className="object-contain w-16 md:w-20 h-auto"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
