"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ContactFormModal } from "@/components/landing-page/form"

const aiServices = [
  {
    id: 1,
    title: "Workflow Automation",
    description: "Automate business processes to reduce manual effort and accelerate delivery across teams.",
    icon: <div className="w-3 h-3 bg-current rounded-full transition-all duration-300"></div>,
  },
  {
    id: 2,
    title: "AI Voice Assistants",
    description: "Deploy multilingual, intent-aware voice bots to streamline customer support and outbound engagement.",
    icon: (
      <div className="flex items-end gap-0.5 transition-all duration-300">
        <div className="w-1 h-2 bg-current rounded-sm animate-pulse" style={{ animationDelay: "0ms" }}></div>
        <div className="w-1 h-4 bg-current rounded-sm animate-pulse" style={{ animationDelay: "150ms" }}></div>
        <div className="w-1 h-6 bg-current rounded-sm animate-pulse" style={{ animationDelay: "300ms" }}></div>
        <div className="w-1 h-4 bg-current rounded-sm animate-pulse" style={{ animationDelay: "450ms" }}></div>
        <div className="w-1 h-2 bg-current rounded-sm animate-pulse" style={{ animationDelay: "600ms" }}></div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Data & AI Integrations",
    description:
      "Extract, categorize, and interpret structured and unstructured documents using AI-powered OCR and NLP.",
    icon: <div className="w-3 h-3 bg-current rounded-full transition-all duration-300"></div>,
  },
  {
    id: 4,
    title: "Lead Qualification Bots",
    description:
      "Train and deploy domain-specific ML models to solve unique challenges across finance, healthcare, logistics, and more.",
    icon: <div className="w-3 h-3 bg-current rounded-full transition-all duration-300"></div>,
  },
]

export default function AIAutomationSection() {
  const [activeService, setActiveService] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="ai-automation"
      className="bg-white relative overflow-hidden lg:overflow-visible w-full px-6 lg:px-8 lg:py-0 pb-16 lg:pb-0"
    >
      <style jsx>{`
        @keyframes intenseSoundWave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1.5); }
        }
        @keyframes fastSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes intensePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes dynamicBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          25% { transform: translateY(-8px) scale(1.1); }
          50% { transform: translateY(-12px) scale(1.15); }
          75% { transform: translateY(-4px) scale(1.05); }
        }
        @keyframes flowingWave1 {
          0% { 
            transform: translateX(-100px) translateY(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(0px) translateY(-8px);
            opacity: 0.6;
          }
          100% { 
            transform: translateX(100px) translateY(0px);
            opacity: 0.3;
          }
        }
        @keyframes flowingWave2 {
          0% { 
            transform: translateX(-120px) translateY(5px) scaleY(0.8);
            opacity: 0.2;
          }
          50% { 
            transform: translateX(20px) translateY(-5px) scaleY(1.2);
            opacity: 0.5;
          }
          100% { 
            transform: translateX(140px) translateY(5px) scaleY(0.8);
            opacity: 0.2;
          }
        }
        @keyframes flowingWave3 {
          0% { 
            transform: translateX(-80px) translateY(-3px) scaleX(0.9);
            opacity: 0.4;
          }
          50% { 
            transform: translateX(40px) translateY(6px) scaleX(1.1);
            opacity: 0.7;
          }
          100% { 
            transform: translateX(160px) translateY(-3px) scaleX(0.9);
            opacity: 0.4;
          }
        }
        .sound-wave-bar {
          animation: intenseSoundWave 1s ease-in-out infinite;
        }
        .fast-spin {
          animation: fastSpin 1.5s linear infinite;
        }
        .intense-pulse {
          animation: intensePulse 1.2s ease-in-out infinite;
        }
        .dynamic-bounce {
          animation: dynamicBounce 1.8s ease-in-out infinite;
        }
        .flowing-wave-1 {
          animation: flowingWave1 8s ease-in-out infinite;
        }
        .flowing-wave-2 {
          animation: flowingWave2 10s ease-in-out infinite;
        }
        .flowing-wave-3 {
          animation: flowingWave3 12s ease-in-out infinite;
        }
        /* Added custom scrollbar styling for mobile/tablet */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto relative">
        <div className="absolute -top-20 left-8 w-[500px] h-[400px] pointer-events-none z-0">
          <svg className="absolute top-0 left-0 w-[500px] h-80 opacity-80" viewBox="0 0 384 256" fill="none">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            <path
              d="M-50 60C20 50 60 90 120 80C180 70 220 110 280 100C340 90 380 130 450 120"
              stroke="url(#waveGradient1)"
              strokeWidth="2"
              fill="none"
              className="flowing-wave-1"
            />

            <path
              d="M-60 100C0 120 40 80 100 100C160 120 200 80 260 100C320 120 360 80 420 100C480 120 520 80 580 100"
              stroke="url(#waveGradient2)"
              strokeWidth="1.5"
              fill="none"
              className="flowing-wave-2"
            />

            <path
              d="M-40 130C20 110 80 150 140 130C200 110 260 150 320 130C380 110 440 150 500 130"
              stroke="url(#waveGradient3)"
              strokeWidth="1.8"
              fill="none"
              className="flowing-wave-3"
            />

            <path
              d="M-30 90C30 140 90 70 150 120C210 170 270 50 330 100C390 150 450 30 510 80"
              stroke="url(#waveGradient4)"
              strokeWidth="1.3"
              fill="none"
              className="flowing-wave-1"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-0 lg:px-4 pt-2 relative">
        <div className="relative mb-12">
          <div className="relative">
            <div className="flex gap-8 items-start mb-8">
              <ScrollReveal
                animation="fade-right"
                className="w-[35%] pt-20 hidden lg:flex lg:flex-col lg:justify-end lg:self-end"
              >
                <h5 className="text-gray-800 text-lg lg:text-xl leading-relaxed mt-6">
                  We help companies modernize what they already have by layering automation and AI where it drives
                  measurable outcomes.
                </h5>

                <div className="mt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-between bg-black text-white pl-6 sm:pl-8 pr-1 rounded-full btn-text btn-hover-enhanced min-w-[280px] h-[62px] transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1 text-[18px] sm:text-base font-medium pr-4">
                      Discuss AI Automation Plan
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
              </ScrollReveal>

              <div className="w-full lg:w-[65%] relative">
                <ScrollReveal animation="fade-up" className="text-left mb-6 z-2 relative lg:px-0 px-0 pr-0">
                  <span className="bg-[var(--brand-light-blue)] text-[#000000] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                    AI Automation Capabilities
                  </span>
                  <h2
                    className="text-black mt-4 mb-0 sm:text-4xl lg:text-5xl text-3xl font-semibold"
                    style={{ lineHeight: "110%", letterSpacing: "-1.5%" }}
                  >
                    You Don’t Need To Rebuild System From Scratch To Get AI Value.
                  </h2>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="relative rounded-3xl overflow-hidden min-h-[180px] sm:min-h-[200px] flex flex-col justify-between">
                    <Image
                      src="/images/ai-20automation-20image.png"
                      alt="AI Services Background"
                      fill
                      className="object-cover opacity-60"
                    />

                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <div className="relative mt-[46px] lg:mt-[46px]">
            <div className="absolute top-9 left-0 right-0 h-px bg-gray-300 z-0 hidden lg:block"></div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative z-10 mt-16">
              {aiServices.map((service, index) => (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                  <div
                    className="group p-6 transition-all duration-300 cursor-pointer relative"
                    onClick={() => setActiveService(index)}
                  >
                    <div className="relative mb-4 flex justify-start">
                      <div
                        className={`w-6 h-6 bg-[var(--brand-blue)] opacity-100 rounded-full border-[5px] border-[#E6F6FF] transition-all duration-300 relative z-10`}
                      ></div>

                      <div className="absolute -top-8 left-0 opacity-100 transition-all duration-300 text-[var(--brand-blue)]">
                        {index === 0 && (
                          <div className="w-6 h-6 relative">
                            <div className="absolute top-1 left-1 w-2 h-2 bg-current rounded-full animate-pulse"></div>
                            <div
                              className="absolute top-1 right-1 w-2 h-2 bg-current rounded-full animate-pulse"
                              style={{ animationDelay: "0.3s" }}
                            ></div>
                            <div
                              className="absolute bottom-1 left-2 w-2 h-2 bg-current rounded-full animate-pulse"
                              style={{ animationDelay: "0.6s" }}
                            ></div>
                            <div className="absolute top-2 left-2 w-3 h-0.5 bg-current fast-spin origin-left"></div>
                            <div
                              className="absolute top-2 right-2 w-3 h-0.5 bg-current fast-spin origin-right"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="flex items-end gap-0.5">
                            <div
                              className="w-1 h-2 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-1 h-4 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-1 h-6 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                            <div
                              className="w-1 h-4 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "450ms" }}
                            ></div>
                            <div
                              className="w-1 h-2 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "600ms" }}
                            ></div>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="w-6 h-6 relative">
                            <div className="w-4 h-4 border-2 border-current rounded-sm intense-pulse mx-auto mt-1"></div>
                            <div className="absolute top-0 left-2 w-2 h-1 bg-current rounded-sm"></div>
                            <div className="absolute bottom-0 left-2 w-2 h-1 bg-current rounded-sm"></div>
                          </div>
                        )}
                        {index === 3 && (
                          <div className="w-6 h-6 relative">
                            <div className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-75"></div>
                            <div
                              className="absolute inset-1 border border-current rounded-full animate-ping opacity-50"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                            <div
                              className="absolute inset-2 w-2 h-2 bg-current rounded-full animate-pulse"
                              style={{ animationDelay: "1s" }}
                            ></div>
                            <div
                              className="absolute -top-1 left-2 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="absolute top-2 -right-1 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                              style={{ animationDelay: "0.7s" }}
                            ></div>
                            <div
                              className="absolute -bottom-1 left-1 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                              style={{ animationDelay: "1.2s" }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-[var(--brand-blue)] mb-3 transition-colors duration-300 text-left">
                      {service.title}
                    </h3>

                    <p className="text-[#000000] text-sm leading-relaxed transition-colors duration-300 text-left font-medium">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Mobile/Tablet Horizontal Scroll */}
            <ScrollReveal
              animation="fade-up"
              className="lg:hidden overflow-x-auto custom-scrollbar pl-0 sm:pt-1.5 pt-9"
            >
              <div className="flex gap-6 pb-0">
                {aiServices.map((service, index) => (
                  <div
                    key={service.id}
                    className="flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] p-0 pb-2.5 sm:p-6 transition-all duration-300 cursor-pointer relative"
                    onClick={() => setActiveService(index)}
                  >
                    <div className="relative mb-1.5 sm:mb-4 flex justify-start">
                      <div
                        className={`w-6 h-6 bg-[var(--brand-blue)] opacity-100 rounded-full border-[5px] border-[#E6F6FF] transition-all duration-300 relative z-10`}
                      ></div>

                      <div className="absolute -top-8 left-0 opacity-100 transition-all duration-300 text-[var(--brand-blue)]">
                        {index === 0 && (
                          <div className="w-6 h-6 relative">
                            <div className="absolute top-1 left-1 w-2 h-2 bg-current rounded-full animate-pulse"></div>
                            <div
                              className="absolute top-1 right-1 w-2 h-2 bg-current rounded-full animate-pulse"
                              style={{ animationDelay: "0.3s" }}
                            ></div>
                            <div
                              className="absolute bottom-1 left-2 w-2 h-2 bg-current rounded-full animate-pulse"
                              style={{ animationDelay: "0.6s" }}
                            ></div>
                            <div className="absolute top-2 left-2 w-3 h-0.5 bg-current fast-spin origin-left"></div>
                            <div
                              className="absolute top-2 right-2 w-3 h-0.5 bg-current fast-spin origin-right"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="flex items-end gap-0.5">
                            <div
                              className="w-1 h-2 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-1 h-4 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-1 h-6 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                            <div
                              className="w-1 h-4 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "450ms" }}
                            ></div>
                            <div
                              className="w-1 h-2 bg-current rounded-sm sound-wave-bar"
                              style={{ animationDelay: "600ms" }}
                            ></div>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="w-6 h-6 relative">
                            <div className="w-4 h-4 border-2 border-current rounded-sm intense-pulse mx-auto mt-1"></div>
                            <div className="absolute top-0 left-2 w-2 h-1 bg-current rounded-sm"></div>
                            <div className="absolute bottom-0 left-2 w-2 h-1 bg-current rounded-sm"></div>
                          </div>
                        )}
                        {index === 3 && (
                          <div className="w-6 h-6 relative">
                            <div className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-75"></div>
                            <div
                              className="absolute inset-1 border border-current rounded-full animate-ping opacity-50"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                            <div
                              className="absolute inset-2 w-2 h-2 bg-current rounded-full animate-pulse"
                              style={{ animationDelay: "1s" }}
                            ></div>
                            <div
                              className="absolute -top-1 left-2 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="absolute top-2 -right-1 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                              style={{ animationDelay: "0.7s" }}
                            ></div>
                            <div
                              className="absolute -bottom-1 left-1 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                              style={{ animationDelay: "1.2s" }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-[var(--brand-blue)] mb-2.5 sm:mb-3 transition-colors duration-300 text-left">
                      {service.title}
                    </h3>

                    <p
                      className="text-[#000000] text-sm leading-[140%] sm:leading-relaxed transition-colors duration-300 text-left font-medium"
                      style={{ letterSpacing: "-1%" }}
                    >
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
