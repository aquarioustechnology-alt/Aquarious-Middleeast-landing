"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useState } from "react"
import { ContactFormModal } from "@/components/landing-page/form"
import { toast } from "sonner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast.success("Subscribed successfully!", {
          description: "Thank you for subscribing to our newsletter.",
        })
        setEmail("")
      } else {
        toast.error("Subscription failed", {
          description: "Please try again later.",
        })
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please check your internet connection.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="relative w-full text-white">
      {/* Main Footer Content */}
      <div className="px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-b from-[#130C1B] to-[#282F45] lg:pb-5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_0.8fr_1.3fr] gap-6 text-center lg:text-left">
              {/* Company Info */}
              <ScrollReveal animation="fade-right" delay={100}>
                <div className="flex flex-col gap-6 pr-9 items-center lg:items-start">
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    {/* Aquarious Logo */}
                    <Image
                      src="/images/footer-20second-20logo.png"
                      alt="Aquarious"
                      width={120}
                      height={36}
                      className="h-auto flex-shrink-0 w-16"
                    />

                    {/* Heading */}
                    <h3 className="font-bold text-white text-2xl sm:text-5xl">
                      {"Let's get started"}
                      <span className="text-[#C6ADFF]">.</span>
                    </h3>
                  </div>

                  {/* Paragraph */}
                  <p className="text-gray-300 leading-relaxed text-base">
                    Bring your business goals to life with expert software design and development. We build custom
                    solutions for every project.
                  </p>

                  {/* Social Proof - Rating Badges */}
                  <div className="flex flex-row gap-3 items-center justify-center lg:justify-start">
                    <Link
                      href="https://clutch.co/profile/aquarious-technology#reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/images/clutch-rating-footer.png"
                        alt="Clutch Rating 4.8"
                        width={120}
                        height={40}
                        className="h-auto w-auto max-w-[120px]"
                      />
                    </Link>
                    <Link
                      href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TLfIyTI0yUkzYLRSNagwTjQwMjc3BMLUFDOjtDQrg4o0kyTL5KRkg-Q0k5RkoxRLL5HEwtLEosz80mKFktTkjLz8nPz0SgBEdxfq&q=aquarious+technology&oq=aquarious+&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIGCAAQRRg5MhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYPTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYQTIGCAYQRRhBMgYIBxBFGDzSAQg0MTc2ajBqN6gCCLACAfEFyKKx6K1KIznxBciiseitSiM5&sourceid=chrome&ie=UTF-8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/images/google-rating-footer.png"
                        alt="Google Rating 4.9"
                        width={120}
                        height={40}
                        className="h-auto w-auto max-w-[120px]"
                      />
                    </Link>
                  </div>

                  <div className="h-px bg-white opacity-20 w-96 max-w-full mx-auto lg:mx-0"></div>

                  {/* Newsletter Section */}
                  <div className="mx-auto lg:mx-0">
                    <form onSubmit={handleNewsletterSubmit} className="relative max-w-[280px]">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address*"
                        className="bg-white text-gray-900 placeholder:text-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A2FF] w-[280px] pr-14 disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-label="Subscribe to newsletter"
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <ArrowRight className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div>
                  {/* Desktop View */}
                  <div className="hidden md:block text-left">
                    <h4 className="mb-6 text-xl font-medium">Services</h4>
                    <div className="h-px bg-white/10 mb-4 w-20"></div>
                    <ul className="space-y-3 text-[rgba(255,255,255,1)]">
                      {[
                        { label: "AI Automation", href: "#services" },
                        { label: "Website Developments", href: "#services" },
                        { label: "Mobile App Development", href: "#services" },
                        { label: "Cloud Infrastructure", href: "#services" },
                        { label: "Staff Augmentation", href: "#services" },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} className="text-white/90 text-[14px] hover:text-white transition-colors">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile/Tablet View */}
                  <div className="block md:hidden w-full text-left">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="services" className="border-white/10 border-b">
                        <AccordionTrigger className="text-xl font-medium text-white hover:no-underline py-4">
                          Services
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3 text-[rgba(255,255,255,1)] pb-2 text-left">
                            {[
                              { label: "AI Automation", href: "#services" },
                              { label: "Website Developments", href: "#services" },
                              { label: "Mobile App Development", href: "#services" },
                              { label: "Cloud Infrastructure", href: "#services" },
                              { label: "Staff Augmentation", href: "#services" },
                            ].map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="text-white/90 text-[14px] hover:text-white transition-colors block py-1"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div>
                  {/* Desktop View */}
                  <div className="hidden md:block text-left">
                    <h4 className="mb-6 text-xl font-medium">Quick Links</h4>
                    <div className="h-px bg-white/10 mb-4 w-20"></div>
                    <ul className="space-y-3">
                      {[
                        { label: "AI & Automation", href: "#ai-automation" },
                        { label: "About Us", href: "#about" },
                        { label: "How We Work", href: "#how-we-work" },
                        { label: "Case Studies", href: "#case-studies" },
                        { label: "Industries", href: "#industries" },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} className="text-white/90 text-[14px] hover:text-white transition-colors">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="text-white/90 text-[14px] hover:text-white transition-colors text-left cursor-pointer"
                        >
                          Contact Us
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile/Tablet View */}
                  <div className="block md:hidden w-full text-left">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="quick-links" className="border-white/10 border-b">
                        <AccordionTrigger className="text-xl font-medium text-white hover:no-underline py-4">
                          Quick Links
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3 pb-2 text-left">
                            {[
                              { label: "AI & Automation", href: "#ai-automation" },
                              { label: "About Us", href: "#about" },
                              { label: "How We Work", href: "#how-we-work" },
                              { label: "Case Studies", href: "#case-studies" },
                              { label: "Industries", href: "#industries" },
                            ].map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="text-white/90 text-[14px] hover:text-white transition-colors block py-1"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-white/90 text-[14px] hover:text-white transition-colors text-left block py-1 cursor-pointer"
                              >
                                Contact Us
                              </button>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={400}>
                <div className="text-left">
                  <h4 className="mb-6 text-xl font-medium">Get In Touch</h4>
                  <div className="h-px bg-white/10 mb-4 w-20"></div>

                  {/* Contact Information */}
                  <div className="space-y-4 mb-6 flex flex-col items-start">
                    {/* Phone Numbers */}
                    <div className="flex items-start gap-3">
                      <Image src="/images/call-icon.svg" alt="Call" width={40} height={40} className="flex-shrink-0" />
                      <div className="space-y-2 text-left">
                        <p className="text-white/90 text-[14px]">
                          <span className="text-gray-300">US Sales :</span>{" "}
                          <a
                            href="tel:+14073493808"
                            className="hover:text-white transition-colors inline-block whitespace-nowrap"
                          >
                            +1(407)349-3808
                          </a>
                        </p>
                        <p className="text-white/90 text-[14px]">
                          <span className="text-gray-300">Kolkata Sales :</span>{" "}
                          <a
                            href="tel:+916290447344"
                            className="hover:text-white transition-colors inline-block whitespace-nowrap"
                          >
                            +91-6290447344
                          </a>
                        </p>
                        <p className="text-white/90 text-[14px]">
                          <span className="text-gray-300">Mumbai Sales :</span>{" "}
                          <a
                            href="tel:+918100116521"
                            className="hover:text-white transition-colors inline-block whitespace-nowrap"
                          >
                            +91-8100116521
                          </a>
                        </p>
                        <p className="text-white/90 text-[14px]">
                          <span className="text-gray-300">Rest of India :</span>{" "}
                          <a
                            href="tel:+916289489634"
                            className="hover:text-white transition-colors inline-block whitespace-nowrap"
                          >
                            +91-6289489634
                          </a>
                        </p>
                        <p className="text-white/90 text-[14px]">
                          <span className="text-gray-300">Talent Acquisition(HR) :</span>{" "}
                          <a
                            href="tel:+918910495162"
                            className="hover:text-white transition-colors inline-block whitespace-nowrap"
                          >
                            +91-8910495162
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-3 items-center">
                      <Image
                        src="/images/email-icon.svg"
                        alt="Email"
                        width={40}
                        height={40}
                        className="flex-shrink-0"
                      />
                      <a
                        href="mailto:admin@theaquarious.com"
                        className="text-white/90 text-[14px] hover:text-white transition-colors"
                      >
                        admin@theaquarious.com
                      </a>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <Image
                        src="/images/location-icon.svg"
                        alt="Location"
                        width={40}
                        height={40}
                        className="flex-shrink-0"
                      />
                      <p className="text-white/90 text-[14px] leading-relaxed">
                        2B Pretoria St, Elgin, Kolkata, West Bengal 700071
                      </p>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex items-center gap-3 flex-wrap justify-start">
                    <a
                      href="https://www.facebook.com/aquarioustech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image src="/images/facebook-icon.svg" alt="Facebook" width={32} height={32} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/aquarious-technology/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image src="/images/linkedin-icon.svg" alt="LinkedIn" width={32} height={32} />
                    </a>
                    <a
                      href="https://wa.me/6289489634"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={32} height={32} />
                    </a>
                    <a
                      href="https://clutch.co/profile/aquarious-technology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image src="/images/clutch-icon.svg" alt="Clutch" width={32} height={32} />
                    </a>
                    <a
                      href="https://dribbble.com/aquaninjas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image src="/images/dribble-icon.svg" alt="Dribbble" width={32} height={32} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Horizontal Divider */}
          <div className="mt-12">
            <div className="h-px bg-white opacity-10 mb-6"></div>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="flex justify-center">
                <p className="text-[rgba(255,255,255,1)] text-sm font-light text-center">
                  © {currentYear} Aquarious Technology Private Limited. All rights reserved.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}
