import { NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmail } from "@/components/emails/contact-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, budget, projectDetails } = body

    console.log("[v0] Received form data:", { firstName, lastName, email, phone, company, budget })

    // Validate required fields (Company, Budget, and Project Details are optional)
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "First Name, Last Name, Email and Phone are required" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    console.log("[v0] Attempting to send email...")

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Aquarious Contact Form <noreply@usa.theaquarious.com>",
      to: ["aquariousleads@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: (
        <ContactEmail
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          company={company || "Not provided"}
          budget={budget || "Not provided"}
          projectDetails={projectDetails || "Not provided"}
        />
      ),
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        {
          error: error.message || "Failed to send email",
          details: error,
        },
        { status: 500 },
      )
    }

    console.log("[v0] Email sent successfully:", data)

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
