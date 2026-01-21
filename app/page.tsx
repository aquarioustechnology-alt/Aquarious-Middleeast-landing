import { Header } from "@/components/header/header"
import { HeroSection } from "@/components/landing-page/hero-section"
import { Services } from "@/components/landing-page/services"
import { RealUsage } from "@/components/landing-page/real-usage"
import AIAutomationSection from "@/components/landing-page/ai-automation"
import { AboutSection } from "@/components/landing-page/about-section"
import { HowWeWorkSection } from "@/components/landing-page/how-we-work"
import { CaseStudiesSection } from "@/components/landing-page/case-studies"
import { EngagementModels } from "@/components/landing-page/engagement-models"
import { Industries } from "@/components/landing-page/industries"
import { GetAQuote } from "@/components/landing-page/get-a-quote"
import { Footer } from "@/components/footer/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Testimonials } from "@/components/landing-page/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ScrollReveal animation="fade-up">
        <Services />
      </ScrollReveal>
      <RealUsage />
      <ScrollReveal animation="fade-up">
        <AIAutomationSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <HowWeWorkSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <CaseStudiesSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <Industries />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <GetAQuote />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <EngagementModels />
      </ScrollReveal>
      <Footer />
    </main>
  )
}
