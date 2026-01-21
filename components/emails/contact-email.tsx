import type * as React from "react"

interface ContactEmailProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  budget: string
  projectDetails: string
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  budget,
  projectDetails,
}) => (
  <html>
    <head>
      <style>{`
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #0B020F 0%, #283048 100%);
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        .header p {
          color: #C6ADFF;
          margin: 8px 0 0;
          font-size: 14px;
        }
        .content {
          padding: 40px 30px;
        }
        .field-group {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e5e5e5;
        }
        .field-group:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .value {
          font-size: 16px;
          color: #1a1a1a;
          margin: 0;
          word-wrap: break-word;
        }
        .project-details {
          background-color: #f9fafb;
          border-left: 4px solid #C6ADFF;
          padding: 16px 20px;
          border-radius: 8px;
          margin-top: 8px;
        }
        .footer {
          background-color: #f9fafb;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e5e5e5;
        }
        .footer p {
          margin: 0;
          font-size: 13px;
          color: #666;
        }
        .highlight {
          color: #00A2FF;
          font-weight: 600;
        }
      `}</style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1>New Contact Form Submission</h1>
          <p>You have received a new inquiry from your website</p>
        </div>

        <div className="content">
          <div className="field-group">
            <span className="label">Contact Name</span>
            <p className="value">
              <span className="highlight">
                {firstName} {lastName}
              </span>
            </p>
          </div>

          <div className="field-group">
            <span className="label">Email Address</span>
            <p className="value">{email}</p>
          </div>

          <div className="field-group">
            <span className="label">Phone Number</span>
            <p className="value">{phone}</p>
          </div>

          <div className="field-group">
            <span className="label">Company Name</span>
            <p className="value">{company}</p>
          </div>

          <div className="field-group">
            <span className="label">Budget Range</span>
            <p className="value">{budget}</p>
          </div>

          <div className="field-group">
            <span className="label">Project Details</span>
            <div className="project-details">
              <p className="value">{projectDetails}</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>This email was sent from the Aquarious Technology contact form</p>
          <p style={{ marginTop: "8px", color: "#999", fontSize: "12px" }}>
            © {new Date().getFullYear()} Aquarious Technology Private Limited
          </p>
        </div>
      </div>
    </body>
  </html>
)
