"use client"

import { useState } from "react"
import Image from "next/image"
import { ContactFormModal } from "@/components/landing-page/form"

const testimonialsData = [
  {
    id: 1,
    text: "We couldn't be happier with the mobile app Aquarious Technology developed for us. It runs perfectly and looks amazing. They are definitely the best mobile app development company in Kolkata!",
    author: "Vishal Weetech",
    location: "Kolkata, India",
    rating: 5,
  },
  {
    id: 2,
    text: "Aquarious Technology has been a great support in creating HelpBy ! They have a wonderful technical expertise added with market experience and research. Will work with them again!",
    author: "Souvik Ghosh",
    location: "AIXCHANGE, India",
    rating: 5,
    isHighlighted: true,
  },
  {
    id: 3,
    text: "I highly recommend these guys. I have been working with them for over 5 years and have nothing but good things to say. High quality code, easy to work with and always meets deliverable dates. Hire them.",
    author: "Karriem Adams",
    location: "London, UK",
    rating: 5,
  },
  {
    id: 4,
    text: "They consistently went above and beyond to ensure our project was completed on time and within budget. Their expertise in the MEAN stack allowed for smooth and seamless development, leading to a product that exceeded our expectations.",
    author: "David Kim",
    location: "VertPro, USA",
    rating: 5,
  },
  {
    id: 5,
    text: "The design was excellent, and the client was satisfied with Aquarious Technology Pvt Ltd’s end-to-end service and quality work. The team was open, communicative, and exceedingly professional. They had regular meetings via Zoom and Teams and were very transparent about the project plan.",
    author: "Currency Trading Company",
    location: "Melbourne,Australia",
    rating: 5,
  },
  {
    id: 6,
    text: "Just had a great experience with Aquarius, this IT and software company is seriously impressive! The team is knowledgeable and professional, always going the extra mile for their customers. Their technology is always at the forefront and their commitment to excellence is unmatched.",
    author: "Carl Sapp",
    location: "CS Consulting, USA",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonialsData)[0] }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg group ${
        testimonial.isHighlighted
          ? "bg-gradient-to-b from-[#C6ADFF] to-[#E1D4FF] text-white"
          : "bg-[#F6F7F9] hover:bg-gradient-to-b hover:from-[#C6ADFF] hover:to-[#E1D4FF] hover:text-white"
      } min-h-[280px] flex flex-col justify-between`}
    >
      <div className="mb-4">
        <Image
          src="/images/quote-icon.svg"
          alt="Quote"
          width={40}
          height={30}
          className={`transition-all duration-300 ${
            testimonial.isHighlighted ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"
          }`}
        />
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Image
            key={i}
            src="/images/star-icon.svg"
            alt="Star"
            width={19}
            height={18}
            className={`transition-all duration-300 ${
              testimonial.isHighlighted ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p
        className={`text-sm leading-relaxed mb-6 flex-grow transition-all duration-300 ${
          testimonial.isHighlighted ? "text-white" : "text-gray-700 group-hover:text-white"
        }`}
      >
        {testimonial.text}
      </p>

      {/* Author Info */}
      <div
        className={`border-l-4 pl-4 transition-all duration-300 ${
          testimonial.isHighlighted ? "border-white" : "border-[var(--brand-blue)] group-hover:border-white"
        }`}
      >
        <p
          className={`font-medium transition-all duration-300 ${
            testimonial.isHighlighted ? "text-white" : "text-black group-hover:text-white"
          }`}
        >
          {testimonial.author}
        </p>
        <p
          className={`text-sm transition-all duration-300 ${
            testimonial.isHighlighted ? "text-white/80" : "text-gray-500 group-hover:text-white/80"
          }`}
        >
          {testimonial.location}
        </p>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const totalMobileSlides = Math.ceil(testimonialsData.length / 2)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalMobileSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalMobileSlides) % totalMobileSlides)
  }

  return (
    <section className="overflow-hidden pb-28 pt-1.5" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="lg:hidden mb-6 flex flex-col items-center gap-6">
          <span className="bg-[var(--brand-light-blue)] text-[#000000] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            Testimonials
          </span>

          <h2 className="text-center leading-[1.4] text-[28px] sm:text-[42px] font-semibold">
            Why They Chose Aquarious
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Left Content - Desktop Only */}
          <div
            className="hidden lg:block lg:w-2/5 lg:flex lg:flex-col lg:justify-between lg:min-h-[500px]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              <div className="mb-6">
                <span className="bg-[var(--brand-light-blue)] text-[#000000] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  Testimonials
                </span>
              </div>

              <h2 className="text-5xl font-semibold tracking-normal leading-[1.1]">
                They Chose Aquarious. Here's Why.
              </h2>
            </div>

            <div>
              {/* Description */}
              <p className="mb-8 leading-relaxed text-[rgba(0,0,0,1)]">
                Trusted by businesses worldwide to deliver real results – here's what our clients have to say.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-between bg-[#000000] text-white pl-8 pr-1 rounded-full btn-text btn-hover-enhanced group min-w-[220px] py-1 cursor-pointer"
              >
                <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1">
                  Request For Proposal
                </span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center ml-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 text-black group-hover:translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Tablet View - Marquee */}
          <div className="hidden sm:block lg:hidden w-full" data-aos="fade-left" data-aos-delay="400">
            <div className="relative h-[500px] overflow-hidden">
              {/* Column 1 */}
              <div className="absolute left-0 w-[48%] h-full">
                <div className="animate-marquee-up space-y-6">
                  {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                    <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="absolute right-0 w-[48%] h-full">
                <div className="animate-marquee-down space-y-6">
                  {[...testimonialsData.slice().reverse(), ...testimonialsData.slice().reverse()].map(
                    (testimonial, index) => (
                      <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                    ),
                  )}
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          {/* Mobile View - Slider */}
          <div className="sm:hidden w-full">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalMobileSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 space-y-6">
                      {testimonialsData.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalMobileSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === index ? "bg-[var(--brand-blue)] w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Desktop Testimonials Marquee */}
          <div className="hidden lg:block lg:w-3/5" data-aos="fade-left" data-aos-delay="400">
            <div className="relative h-[500px] overflow-hidden">
              {/* Column 1 */}
              <div className="absolute left-0 w-[48%] h-full">
                <div className="animate-marquee-up space-y-6">
                  {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                    <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="absolute right-0 w-[48%] h-full">
                <div className="animate-marquee-down space-y-6">
                  {[...testimonialsData.slice().reverse(), ...testimonialsData.slice().reverse()].map(
                    (testimonial, index) => (
                      <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                    ),
                  )}
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-4 sm:mt-[60px]">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex sm:inline-flex items-center justify-between bg-[#000000] text-white pl-8 pr-1 rounded-full btn-text btn-hover-enhanced group sm:min-w-[250px] sm:w-[250px] py-1 w-full lg:w-auto cursor-pointer"
          >
            <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1">
              View testimonials
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center ml-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
              <svg
                className="w-6 h-6 text-black group-hover:translate-x-0.5 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
        @keyframes marquee-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marquee-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-marquee-up {
          animation: marquee-up 35s linear infinite;
        }

        .animate-marquee-down {
          animation: marquee-down 35s linear infinite;
        }
      `}</style>
    </section>
  )
}

export { Testimonials as default }
