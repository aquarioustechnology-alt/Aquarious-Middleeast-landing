"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import * as Accordion from "@radix-ui/react-accordion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const accordionData = [
  {
    id: "item-1",
    number: "01",
    title: "Tailored ERP / CRM Solutions with Custom Software",
    image: "/images/1.png",
    boldText: "Streamline operations with bespoke enterprise software.",
    content:
      "We build custom ERP and CRM solutions that fit your unique business processes, integrating seamless data flow and improving decision-making.",
    quickLinks: [
      { label: "Enterprise Resource Planning", url: "#" },
      { label: "Customer Relationship Management", url: "#" },
      { label: "Custom Dashboards", url: "#" },
      { label: "Process Automation", url: "#" },
      { label: "Legacy Modernization", url: "#" },
      { label: "Data Integration", url: "#" },
    ],
  },
  {
    id: "item-2",
    number: "02",
    title: "Business Automation AI Automation & AI Agents",
    image: "/images/2.png",
    boldText: "Future-proof your business with intelligent automation.",
    content:
      "Deploy autonomous AI agents and automated workflows to handle repetitive tasks, reducing operational costs and increasing efficiency.",
    quickLinks: [
      { label: "Intelligent Process Automation", url: "#" },
      { label: "AI Agents", url: "#" },
      { label: "Workflow Orchestration", url: "#" },
      { label: "Document Processing", url: "#" },
      { label: "Chatbots & Assistants", url: "#" },
      { label: "Predictive Analytics", url: "#" },
    ],
  },
  {
    id: "item-3",
    number: "03",
    title: "Website Development & SaaS Platforms",
    image: "/images/3.png",
    boldText: "Scalable digital platforms built for growth.",
    content:
      "From high-performance corporate websites to complex SaaS products, we engineer secure, scalable solutions that drive user engagement.",
    quickLinks: [
      { label: "SaaS Development", url: "#" },
      { label: "Corporate Websites", url: "#" },
      { label: "Web Portals", url: "#" },
      { label: "API Integration", url: "#" },
      { label: "Cloud-Native Apps", url: "#" },
      { label: "UI/UX Design", url: "#" },
    ],
  },
  {
    id: "item-4",
    number: "04",
    title: "Mobile Apps (iOS / Android / Cross-platform)",
    image: "/images/4.png",
    boldText: "Engage users on every device with native-quality apps.",
    content: "We develop feature-rich mobile applications for iOS and Android, ensuring smooth performance, security, and a superior user experience.",
    quickLinks: [
      { label: "iOS Development", url: "#" },
      { label: "Android Development", url: "#" },
      { label: "React Native / Flutter", url: "#" },
      { label: "Mobile Strategy", url: "#" },
      { label: "App Maintenance", url: "#" },
      { label: "Secure Authentication", url: "#" },
    ],
  },
  {
    id: "item-5",
    number: "05",
    title: "Hire Dedicated Remote Developers & Tech Teams",
    image: "/images/5.png",
    boldText: "Expand your capabilities with world-class tech talent.",
    content: "Augment your workforce with our vetted remote developers and dedicated technical teams, ready to integrate into your projects immediately.",
    quickLinks: [
      { label: "Staff Augmentation", url: "#" },
      { label: "Dedicated Teams", url: "#" },
      { label: "Frontend Developers", url: "#" },
      { label: "Backend Engineers", url: "#" },
      { label: "QA Specialists", url: "#" },
      { label: "DevOps Experts", url: "#" },
    ],
  },
]

export function Services() {
  const [activeItem, setActiveItem] = useState("item-1")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const activeItemData = accordionData.find((item) => item.id === activeItem)
  const currentImage = activeItemData?.image || accordionData[0].image

  return (
    <section id="services" className="py-8 lg:py-12 bg-white lg:pb-24 pt-10 lg:pt-20" data-aos="fade-up">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {/* Badge - animate from left */}
          <ScrollReveal animation="fade-right" className="lg:w-2/5 mb-4 lg:mb-0">
            <span className="inline-block bg-[#e6f7ff] text-[#000000] px-4 py-2 rounded-full text-sm font-medium">
              Our Services
            </span>
          </ScrollReveal>
          {/* Heading - animate from right */}
          <ScrollReveal animation="fade-left" delay={100} className="lg:w-3/5">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium leading-[110%] tracking-[-0.015em]">
              Empowering GCC & MENA Enterprises with <span className="font-semibold text-[#00A2FF]">Next-Gen Digital Innovation</span> & Scalable Solutions.
            </h2>
          </ScrollReveal>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-15 lg:gap-28">
          {/* Left Side - Image - animate from left */}
          <ScrollReveal animation="fade-right" delay={200} className="order-1 lg:order-1 w-full lg:w-2/5">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] lg:h-full">
              <Image
                key={currentImage}
                src={currentImage || "/placeholder.svg"}
                alt={`${activeItemData?.title || "Services"} illustration`}
                width={600}
                height={700}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </ScrollReveal>

          {/* Right Side - Accordion - items animate from right with stagger */}
          <div className="order-2 lg:order-2 lg:w-3/5 w-full" data-aos="fade-left" data-aos-delay="400">
            <Accordion.Root
              type="single"
              collapsible
              defaultValue={isMobile ? "" : "item-1"}
              className="w-full space-y-4"
              onValueChange={(value) => setActiveItem(value || "item-1")}
            >
              {accordionData.map((item, index) => (
                <ScrollReveal key={item.id} animation="fade-left" delay={100 * (index + 3)}>
                  <Accordion.Item value={item.id}>
                    <div className="py-2">
                      <div className="flex items-center gap-5 mb-3 sm:mb-4">
                        <div
                          className={`h-[2px] w-[110px] rounded-full transition-colors duration-300 ${
                            activeItem === item.id ? "bg-[var(--brand-blue)]" : "bg-gray-300"
                          }`}
                        />
                        <div
                          className={`h-[2px] flex-1 rounded-full transition-colors duration-300 ${
                            activeItem === item.id ? "bg-[var(--brand-blue)]" : "bg-gray-300"
                          }`}
                        />
                      </div>

                      <Accordion.Trigger className="w-full flex items-center text-left group hover:text-[var(--brand-blue)] transition-colors duration-300">
                        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                          <span className="text-lg sm:text-xl lg:text-2xl font-medium text-[#000000] group-hover:text-[var(--brand-blue)] transition-colors duration-300 flex-shrink-0">
                            {item.number}
                          </span>
                          <h4 className="text-base sm:text-lg lg:text-xl font-medium text-black group-hover:text-[var(--brand-blue)] transition-colors duration-300">
                            {item.title}
                          </h4>
                        </div>
                      </Accordion.Trigger>

                      <Accordion.Content className="overflow-hidden transition-all duration-500 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                        <div className="pl-6 sm:pl-8 lg:pl-12 pt-4">
                          <p className="text-base font-semibold leading-[140%] tracking-[-0.01em] mb-2 text-[rgba(0,0,0,1)]">
                            {item.boldText}
                          </p>
                          <p className="text-base font-normal leading-[140%] tracking-[-0.01em] text-[rgba(0,0,0,1)]">
                            {item.content}
                          </p>

                          {item.quickLinks && (
                            <div className="mt-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                {item.quickLinks.map((link, idx) => (
                                  <div key={idx} className="flex items-center">
                                    {idx % 2 === 1 && <span className="text-gray-300 mr-3 hidden sm:inline">|</span>}
                                    <div className="flex items-center">
                                      <span className="text-sm sm:text-base flex-1 cursor-default hover:text-[var(--brand-blue)] hover:font-medium transition-all duration-300 font-medium text-[rgba(0,0,0,1)]">
                                        {link.label}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </Accordion.Content>
                    </div>
                  </Accordion.Item>
                </ScrollReveal>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
