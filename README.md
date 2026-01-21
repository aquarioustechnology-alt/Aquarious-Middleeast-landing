# Aquarious Middle East Landing Page

A Next.js landing page for Aquarious Technology targeting the Middle East market.

## 🚀 Deployment on Vercel

### Prerequisites
- A Vercel account
- A Resend API key for email functionality

### Environment Variables

Before deploying to Vercel, you need to configure the following environment variable:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

#### How to add environment variables in Vercel:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (get it from https://resend.com/api-keys)
   - **Environment**: Production, Preview, and Development

### Deploy to Vercel

#### Option 1: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Add the environment variables as described above
6. Click "Deploy"

#### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📦 Local Development

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install
```

### Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Add your Resend API key to `.env.local`

### Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Start Production Server

```bash
pnpm start
# or
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Email**: Resend
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 📧 Contact Form

The contact form sends emails to `aquariousleads@gmail.com` using the Resend API. Make sure the `RESEND_API_KEY` environment variable is properly configured.

## 🔧 Configuration

### TypeScript
TypeScript build errors are currently ignored in production builds (configured in `next.config.mjs`). This is intentional for faster deployments but should be reviewed for production use.

### ESLint
ESLint is configured with Next.js recommended settings. Run linting with:
```bash
pnpm lint
# or
npm run lint
```

## 📝 Notes

- The project uses `pnpm` as the package manager, but `npm` works as well
- Images are optimized for AVIF and WebP formats
- The build is configured to work seamlessly with Vercel's deployment platform

## 🌐 Live Site

After deployment, your site will be available at your Vercel domain (e.g., `your-project.vercel.app`)

## 📞 Support

For any issues or questions, contact: aquarioustechnology@gmail.com
