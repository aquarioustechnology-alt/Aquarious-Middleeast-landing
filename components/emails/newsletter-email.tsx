import type * as React from "react"

interface NewsletterEmailProps {
  email: string
}

export const NewsletterEmail: React.FC<Readonly<NewsletterEmailProps>> = ({ email }) => (
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
          text-align: center;
        }
        .icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        .message {
          font-size: 18px;
          color: #333;
          margin-bottom: 30px;
        }
        .email-box {
          background-color: #f9fafb;
          border: 1px solid #e5e5e5;
          padding: 16px;
          border-radius: 8px;
          display: inline-block;
          font-weight: 600;
          color: #00A2FF;
          font-size: 18px;
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
      `}</style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1>New Newsletter Subscriber</h1>
          <p>A new user has subscribed to your newsletter</p>
        </div>

        <div className="content">
          <div className="icon">📬</div>
          <p className="message">
            Great news! You have a new subscriber to your newsletter list.
          </p>
          
          <div className="email-box">
            {email}
          </div>
        </div>

        <div className="footer">
          <p>This email was sent from the Aquarious Technology newsletter form</p>
          <p style={{ marginTop: "8px", color: "#999", fontSize: "12px" }}>
            © {new Date().getFullYear()} Aquarious Technology Private Limited
          </p>
        </div>
      </div>
    </body>
  </html>
)
