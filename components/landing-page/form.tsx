"use client"

import type React from "react"
import { X, ArrowRight, CheckCircle2, XCircle, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"
import Link from "next/link"
import { type CountryIso2, defaultCountries, parseCountry, FlagImage } from "react-international-phone"
import "react-international-phone/style.css"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    projectDetails: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const [countryCode, setCountryCode] = useState<CountryIso2>("ae")
  const [dialCode, setDialCode] = useState("+971")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country)
    return [
      "ae", // UAE moved to top priority
      "us",
      "gb",
      "in",
      "ca",
      "au",
      "de",
      "fr",
      "it",
      "es",
      "nl",
      "se",
      "no",
      "dk",
      "fi",

      "sa",
      "sg",
      "my",
      "id",
      "th",
      "ph",
      "vn",
      "jp",
      "kr",
      "cn",
      "hk",
      "tw",
      "br",
      "mx",
      "ar",
      "cl",
      "co",
      "za",
      "eg",
      "ng",
      "ke",
      "nz",
      "pk",
      "bd",
      "lk",
      "np",
    ].includes(iso2)
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits"
    }


    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          projectDetails: "",
        })
        setErrors({})

        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleCountryChange = (country: CountryIso2) => {
    const selectedCountry = countries.find((c) => {
      const { iso2 } = parseCountry(c)
      return iso2 === country
    })

    if (selectedCountry) {
      const { dialCode: newDialCode, iso2 } = parseCountry(selectedCountry)
      setCountryCode(iso2)
      setDialCode(`+${newDialCode}`)
      setShowCountryDropdown(false)
    }
  }

  if (!mounted || !isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Overlay with 70% opacity black background covering entire viewport */}
      <div className="fixed inset-0 bg-black/70 transition-opacity duration-300" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="fixed inset-0 z-10 flex items-center justify-center p-2 sm:p-4 lg:p-4">
        <div
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[1400px] max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative flex flex-col lg:flex-row p-2 sm:p-[15px]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors z-10 w-7 h-7 sm:w-8 sm:h-8 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {submitStatus.type && (
            <div
              className={`absolute top-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="text-sm font-medium">{submitStatus.message}</span>
            </div>
          )}

          {/* Left Section - Gradient Background with Info */}
          <div className="hidden lg:block w-full lg:w-[40%] relative overflow-hidden rounded-2xl">
            <Image src="/images/form-modal-bg.png" alt="Modal Background" fill className="object-cover" priority />
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="inline-block backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 self-start bg-[rgba(230,246,255,1)]">
                  <span className="font-medium text-xs sm:text-sm text-[rgba(0,0,0,1)]">Let's Talk Solutions</span>
                </div>

                <h3
                  className="text-xl sm:text-2xl lg:text-3xl text-[rgba(0,0,0,1)] font-semibold"
                  style={{ lineHeight: "130%", letterSpacing: "-1.5%" }}
                >
                  We help businesses turn ideas into scalable digital products - with the right team, tech, and
                  strategy.
                </h3>

                <div className="flex gap-6 sm:gap-8 lg:gap-12">
                  <div>
                    <div
                      className="font-semibold text-4xl sm:text-5xl lg:text-6xl text-[rgba(0,0,0,1)]"
                      style={{ lineHeight: "120%", letterSpacing: "-1.5%" }}
                    >
                      600+
                    </div>
                    <div className="text-xs sm:text-sm mt-1 font-medium text-[rgba(0,0,0,1)]">Successful Projects</div>
                  </div>
                  <div>
                    <div
                      className="font-semibold text-4xl sm:text-5xl lg:text-6xl text-[rgba(0,0,0,1)]"
                      style={{ lineHeight: "120%", letterSpacing: "-1.5%" }}
                    >
                      25+
                    </div>
                    <div className="text-xs sm:text-sm mt-1 font-medium text-[rgba(0,0,0,1)]">Industries Served</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="https://clutch.co/profile/aquarious-technology#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 w-full sm:w-[190px] bg-[rgba(243,247,254,1)] hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[rgba(23,49,59,1)]">
                    <Image
                      src="/images/clutch-icon-form.svg"
                      alt="Clutch"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div
                      className="text-sm sm:text-[17px] font-medium text-[rgba(0,0,0,1)]"
                      style={{ lineHeight: "130%", letterSpacing: "-1%" }}
                    >
                      Rating 4.8
                    </div>
                    <div className="flex items-center gap-0">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="#FF3D2E">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TLfIyTI0yUkzYLRSNagwTjQwMjc3BMLUFDOjtDQrg4o0kyTL5KRkg-Q0k5RkoxRLL5HEwtLEosz80mKFktTkjLz8nPz0SgBEdxfq&q=aquarious+technology&oq=aquarious+&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIGCAAQRRg5MhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYPTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYQTIGCAYQRRhBMgYIBxBFGDzSAQg0MTc2ajBqN6gCCLACAfEFyKKx6K1KIznxBciiseitSiM5&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 w-full sm:w-[190px] bg-[rgba(243,247,254,1)] hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[rgba(23,49,59,1)]">
                    <Image
                      src="/images/google-icon-form.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div
                      className="text-sm sm:text-[17px] font-medium text-[rgba(0,0,0,1)]"
                      style={{ lineHeight: "130%", letterSpacing: "-1%" }}
                    >
                      Rating 4.9
                    </div>
                    <div className="flex items-center gap-0">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="#FBBE15">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-[60%] p-4 sm:p-6 lg:p-12 overflow-y-auto max-h-[calc(95vh-1rem)] sm:max-h-[calc(90vh-1rem)] lg:pt-7 lg:pb-7">
            <h2
              className="text-2xl sm:text-3xl lg:text-[44px] font-medium text-gray-900 mb-2"
              style={{ lineHeight: "120%", letterSpacing: "-1.5%" }}
            >
              Share your idea, we&apos;ll build it right.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-4 sm:mt-7">
              {/* First Row - First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    className={`w-full h-[48px] sm:h-[54px] px-4 rounded-[10px] border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent text-[14px] font-normal placeholder:text-gray-400`}
                    style={{ lineHeight: "140%", letterSpacing: "-1%" }}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    className={`w-full h-[48px] sm:h-[54px] px-4 rounded-[10px] border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent text-[14px] font-normal placeholder:text-gray-400`}
                    style={{ lineHeight: "140%", letterSpacing: "-1%" }}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Second Row - Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className={`w-full h-[48px] sm:h-[54px] px-4 rounded-[10px] border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent text-[14px] font-normal placeholder:text-gray-400`}
                    style={{ lineHeight: "140%", letterSpacing: "-1%" }}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number*
                  </label>
                  <div className="flex gap-2 w-full">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-1.5 px-3 rounded-[10px] border border-gray-300 bg-gray-50 h-[48px] sm:h-[54px] flex-shrink-0 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <FlagImage iso2={countryCode} size={20} />
                        <span className="text-xs sm:text-sm text-gray-700 whitespace-nowrap">{dialCode}</span>
                        <svg
                          className={`w-3 h-3 text-gray-500 transition-transform ${showCountryDropdown ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                          {countries.map((country) => {
                            const { iso2, dialCode: countryDialCode, name } = parseCountry(country)
                            return (
                              <button
                                key={iso2}
                                type="button"
                                onClick={() => handleCountryChange(iso2)}
                                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition-colors text-left"
                              >
                                <FlagImage iso2={iso2} size={20} />
                                <span className="text-sm text-gray-700">{name}</span>
                                <span className="text-xs text-gray-500 ml-auto">+{countryDialCode}</span>
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className={`w-full min-w-0 h-[48px] sm:h-[54px] px-4 rounded-[10px] border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent text-[14px] font-normal placeholder:text-gray-400`}
                        style={{ lineHeight: "140%", letterSpacing: "-1%" }}
                      />
                    </div>
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Third Row - Company Name and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className={`w-full h-[48px] sm:h-[54px] px-4 rounded-[10px] border ${
                      errors.company ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent text-[14px] font-normal placeholder:text-gray-400`}
                    style={{ lineHeight: "140%", letterSpacing: "-1%" }}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-2">
                    Your Budget
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`w-full h-[48px] sm:h-[54px] px-4 rounded-[10px] border ${
                        errors.budget ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent appearance-none bg-white text-[14px] font-normal`}
                      style={{ lineHeight: "140%", letterSpacing: "-1%" }}
                    >
                      <option value="">Select Budget</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000+">$50,000+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your query"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.projectDetails ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent resize-none text-[14px] font-normal placeholder:text-gray-400`}
                  style={{ lineHeight: "140%", letterSpacing: "-1%" }}
                />
                {errors.projectDetails && <p className="text-red-500 text-xs mt-1">{errors.projectDetails}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-between bg-black text-white pl-6 sm:pl-8 pr-1 py-1 rounded-full font-medium transition-colors group min-w-full sm:min-w-[236px] cursor-pointer ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
                  }`}
                >
                  <span className="ml-2">{isSubmitting ? "Sending..." : "Send message"}</span>
                  <div className="w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default ContactFormModal
