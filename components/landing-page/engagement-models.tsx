"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { ContactFormModal } from "@/components/landing-page/form"

export function EngagementModels() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const models = [
    {
      badge: "STAFF AUGMENTATION",
      title: "Need a couple of extra software engineers on your team?",
      icon: "/images/staff-augmentation-icon.svg",
      bgImage: "/images/staff-augmentation-bg.png",
      hoverBgImage: "/images/staff-augmentation-hover-bg.png",
      link: "#staff-augmentation",
    },
    {
      badge: "DEDICATED TEAMS",
      title: "Need a team to deliver several projects in simultaneously?",
      icon: "/images/dedicated-teams-icon.svg",
      bgImage: "/images/dedicated-teams-bg.png",
      hoverBgImage: "/images/dedicated-teams-hover-bg.png",
      link: "#dedicated-teams",
    },
    {
      badge: "SOFTWARE OUTSOURCING",
      title: "Want to offload everything to us, from start to finish?",
      icon: "/images/software-outsourcing-icon.svg",
      bgImage: "/images/software-outsourcing-bg.png",
      hoverBgImage: "/images/software-outsourcing-hover-bg.png",
      link: "#software-outsourcing",
    },
  ]

  return (
    <section className="relative w-full px-6 lg:px-8 py-20 lg:py-28 bg-white lg:pt-16 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header Section */}
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <span className="bg-[var(--brand-light-blue)] text-[#000000] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                Flexible Engagement Models
              </span>
              {/* Heading and paragraph grouped with 16px gap */}
              <div className="flex flex-col gap-4 mt-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.2]">
                  Need a Reliable Tech Partner?
                  <br />
                  Plug us in where you need us most.
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto text-[rgba(0,0,0,1)]">
                  We customize every engagement to fit your workflow, priorities, and delivery needs.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 min-[993px]:grid-cols-3 gap-6 lg:gap-8">
            {models.map((model, index) => (
              <ScrollReveal key={model.badge} animation="fade-up" delay={index * 100}>
                <div className="group relative bg-white hover:bg-gradient-to-b hover:from-[#0B020F] hover:to-[#283048] border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-[var(--brand-blue)] transition-all duration-300 flex flex-col min-h-[280px] overflow-hidden">
                  {/* Normal state background */}
                  <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                    <Image src={model.bgImage || "/placeholder.svg"} alt="" fill className="object-cover rounded-2xl" />
                  </div>

                  {/* Hover state background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Image
                      src={model.hoverBgImage || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  {/* Badge */}
                  <span className="text-[var(--brand-blue)] group-hover:text-white text-xs font-semibold uppercase tracking-wider mb-3 block transition-colors duration-300 relative z-10">
                    {model.badge}
                  </span>

                  {/* Title */}
                  <h3 className="group-hover:text-white mb-6 leading-snug transition-colors duration-300 text-[rgba(0,0,0,1)] text-2xl font-semibold relative z-10">
                    {model.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Request Proposal button below cards */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-[#000000] text-white h-[66px] rounded-full text-sm sm:text-base font-medium hover:bg-[#1a1a1a] transition-all duration-300 flex items-center gap-3 sm:gap-4 px-8 pr-1 cursor-pointer"
              >
                <span>Request Proposal Now</span>
                <div className="w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center group-hover:-rotate-45 group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
