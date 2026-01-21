"use client"
import { useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ContactFormModal } from "@/components/landing-page/form"

const tabs = [
  {
    id: "vetted-senior-talent",
    label: "Vetted Senior Talent",
    title: "Top-tier developers. Zero compromise on quality, trusted by leading Gulf enterprises.",
    description:
      "We have engineers who've already proven they can deliver for demanding regional clients. Our rigorous evaluation process includes technical tests, communication assessments, soft skill screening, and problem-solving simulations. Every candidate goes through a structured evaluation—deep technical screening, real-world scenarios, and fewer than 1% get the chance to join our team. This ensures you get highly qualified developers who understand Gulf business requirements.",
  },
  {
    id: "timezone-aligned",
    label: "Gulf-Friendly Hours",
    title: "Real-time collaboration during Gulf business hours—no overnight delays.",
    description:
      "Our engineering teams operate in timezones that seamlessly overlap with GST/AST working hours. This means instant communication during your business day, rapid feedback loops, and no waiting until the next morning for responses. Whether you're in Dubai, Riyadh, or Doha—we're available when you need us.",
  },
  {
    id: "proficient-in-english",
    label: "Multilingual Teams",
    title: "Clear communication in English with cultural understanding of Gulf business practices.",
    description:
      "Every engineer on our team undergoes rigorous English proficiency testing and is trained in Gulf business culture. We ensure they can communicate complex technical concepts clearly, participate in meetings effectively, and understand the nuances of working with regional enterprises. Professional communication, no barriers.",
  },
  {
    id: "full-stack-capabilities",
    label: "Full-stack Capabilities",
    title: "End-to-end development expertise from frontend to backend and everything in between.",
    description:
      "Our team covers the full technology stack—React, Node.js, Python, cloud infrastructure, mobile development, and more. Whether you need a complete product build, e-commerce platform, or enterprise application, we have engineers who can deliver across all layers with regional hosting and compliance in mind.",
  },
  {
    id: "scalable-teams",
    label: "Scalable Teams",
    title: "Scale your engineering capacity to match Gulf market opportunities.",
    description:
      "Start with a focused team and scale to dozens of engineers as your regional presence grows. Our flexible model lets you add specialized skills for Expo launches, seasonal campaigns, or new market expansions. You get the agility to match your engineering resources to Gulf business demands.",
  },
  {
    id: "standard-msas-sows",
    label: "Standard MSAs & SOWS",
    title: "Enterprise-ready contracts aligned with Gulf commercial standards.",
    description:
      "We use internationally recognized Master Service Agreements and Statements of Work that regional legal teams approve. This means streamlined contract negotiations, transparent terms, and a professional engagement framework that GCC enterprises expect and trust.",
  },
  {
    id: "ndas-ip-protection",
    label: "NDAs & IP Protection",
    title: "Your intellectual property is protected with international-grade confidentiality.",
    description:
      "Every engagement includes comprehensive NDA coverage recognized across Gulf jurisdictions. All code, designs, and innovations created for you belong exclusively to you. Our engineers understand the importance of data sovereignty and are trained in regional IP protection best practices.",
  },
  {
    id: "enterprise-grade-security",
    label: "Regional Compliance",
    title: "Security practices aligned with Gulf regulatory standards and data residency requirements.",
    description:
      "We implement internationally compliant processes, secure development practices, and regular security training. Our infrastructure supports regional data hosting requirements and meets compliance standards for UAE, Saudi Arabia, and other GCC markets including NESA and PDPL frameworks.",
  },
  {
    id: "managed-delivery",
    label: "Managed Delivery",
    title: "Dedicated project management that understands Gulf business timelines and expectations.",
    description:
      "Every engagement includes experienced project managers familiar with regional business practices. They handle sprint planning around Gulf holidays, progress tracking, and stakeholder communication. You get full transparency, proactive risk management, and a single point of contact who understands your market.",
  },
]

export function HowWeWorkSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  return (
    <section id="how-we-work" className="relative w-full px-6 lg:px-8 py-20 lg:py-28 bg-white lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <span className="bg-[var(--brand-light-blue)] text-[#000000] px-4 py-2 rounded-full text-sm font-medium">
                How We Work
              </span>
              <h2
                className="text-black mt-6 mb-0 text-3xl sm:text-4xl lg:text-5xl max-w-4xl mx-auto font-semibold"
                style={{ lineHeight: "110%", letterSpacing: "-1.5%" }}
              >
                Here&apos;s What Makes Us Easy To Work With And Hard To Replace
              </h2>
            </div>
          </ScrollReveal>

          {/* Tabs, Content, and CTA Section */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div
              className="rounded-3xl p-[1px]"
              style={{
                background: "linear-gradient(to bottom, rgba(154, 229, 245, 0.3), #00A2FF)",
              }}
            >
              <div className="rounded-3xl overflow-hidden bg-white">
                {/* Tabs Section */}
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className="flex flex-wrap justify-center gap-3 p-6 lg:p-8 bg-white">
                    {tabs.map((tab, index) => (
                      <ScrollReveal key={tab.id} animation="fade-up" delay={200 + index * 50}>
                        <button
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 border rounded-md cursor-pointer ${
                            activeTab === tab.id
                              ? "text-white border-transparent"
                              : "bg-[#F3F7FD] text-black border-[#F3F7FD] hover:border-gray-300"
                          }`}
                          style={
                            activeTab === tab.id
                              ? { background: "linear-gradient(to bottom, #0B020F, #283048)" }
                              : undefined
                          }
                        >
                          <Check className="w-4 h-4 text-[#00A2FF]" strokeWidth={2.5} />
                          {tab.label}
                        </button>
                      </ScrollReveal>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Content Section */}
                <ScrollReveal animation="fade-up" delay={600}>
                  <div className="bg-white p-8 lg:p-12 lg:py-10 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {/* Left Column */}
                      <ScrollReveal
                        animation="fade-right"
                        delay={700}
                        className="lg:w-1/2 lg:border-r lg:border-gray-200 lg:pr-12"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 block">
                          {activeTabData.label}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-medium text-black leading-tight">
                          {activeTabData.title}
                        </h3>
                      </ScrollReveal>

                      {/* Right Column */}
                      <ScrollReveal animation="fade-left" delay={800} className="lg:w-1/2">
                        <p className="text-base leading-relaxed lg:text-base text-[rgba(0,0,0,1)]">
                          {activeTabData.description}
                        </p>
                      </ScrollReveal>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Bottom CTA Bar */}
                <ScrollReveal animation="fade-up" delay={900}>
                  <div className="bg-gradient-to-r from-[#005180] to-[#283048] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:py-5">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                      {/* Avatar Group */}
                      <div className="flex -space-x-3">
                        <Image
                          src="/professional-man-portrait-1.png"
                          alt="Team member"
                          width={48}
                          height={48}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                        />
                        <Image
                          src="/professional-woman-portrait-1.png"
                          alt="Team member"
                          width={48}
                          height={48}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                        />
                        <Image
                          src="/professional-man-portrait-2.png"
                          alt="Team member"
                          width={48}
                          height={48}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                        />
                        <Image
                          src="/professional-woman-portrait-2.png"
                          alt="Team member"
                          width={48}
                          height={48}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                        />
                        <Image
                          src="/professional-man-portrait-3.png"
                          alt="Team member"
                          width={48}
                          height={48}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                        />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg font-medium text-white leading-snug max-w-xs sm:max-w-none">
                        {"Trusted by 400+ clients including leading Gulf enterprises."}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-2 bg-[#00A2FF] hover:bg-[#0090e0] text-white px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto justify-center whitespace-nowrap cursor-pointer"
                    >
                      Talk to an Expert
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
