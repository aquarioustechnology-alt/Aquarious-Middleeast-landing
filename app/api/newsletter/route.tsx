import { Resend } from "resend"
import { NewsletterEmail } from "@/components/emails/newsletter-email"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    try {
      const data = await resend.emails.send({
        from: "Aquarious Newsletter <noreply@usa.theaquarious.com>",
        to: ["aquariousleads@gmail.com"],
        subject: "New Newsletter Subscription",
        react: <NewsletterEmail email={email} />,
      })

      return NextResponse.json(data)
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
