# Vercel Deployment Guide

## Step-by-Step Instructions for Deploying to Vercel

### 1. Prerequisites
- ✅ Git configured locally (Done)
- ✅ Code pushed to GitHub repository
- ✅ Vercel account (create one at https://vercel.com if you don't have it)
- ✅ Resend API key (get from https://resend.com/api-keys)

### 2. Deploy to Vercel

#### Method 1: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Sign in with your account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your repository: `aquarioustechnology-alt/Aquarious-Middleeast-landing`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Add Environment Variables** ⚠️ CRITICAL STEP
   - Click "Environment Variables" section
   - Add the following variable:
     ```
     Name: RESEND_API_KEY
     Value: [Your Resend API Key]
     ```
   - Select all environments: Production, Preview, Development
   - Click "Add"

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

#### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

When prompted, add the environment variable:
```bash
? Set up environment variables? Yes
? What's the name of the variable? RESEND_API_KEY
? What's the value of RESEND_API_KEY? [paste your API key]
```

### 3. Verify Deployment

After deployment completes:

1. **Check Build Logs**
   - Ensure there are no errors
   - Look for "Build Completed" message

2. **Test the Live Site**
   - Visit your Vercel URL
   - Test the contact form
   - Test the newsletter subscription
   - Verify all images load correctly

3. **Check Email Functionality**
   - Submit a test contact form
   - Check if email arrives at `aquariousleads@gmail.com`

### 4. Custom Domain (Optional)

To add a custom domain:

1. Go to Project Settings → Domains
2. Add your domain name
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

### 5. Troubleshooting

#### Build Fails
- **Check Environment Variables**: Ensure `RESEND_API_KEY` is set
- **Check Build Logs**: Look for specific error messages
- **TypeScript Errors**: Currently ignored via `next.config.mjs`

#### Email Not Sending
- **Verify API Key**: Check if `RESEND_API_KEY` is correct
- **Check Resend Dashboard**: Verify API key is active
- **Check Logs**: Look for error messages in Vercel Function Logs

#### Images Not Loading
- **Check File Paths**: Ensure all images are in the `public` folder
- **Check Image Optimization**: Vercel automatically optimizes images

### 6. Environment Variables Reference

| Variable | Required | Description | Where to Get |
|----------|----------|-------------|--------------|
| `RESEND_API_KEY` | Yes | API key for sending emails | https://resend.com/api-keys |

### 7. Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] Contact form works and sends emails
- [ ] Newsletter subscription works
- [ ] All images load correctly
- [ ] Mobile responsiveness is good
- [ ] Page speed is acceptable
- [ ] No console errors in browser
- [ ] Analytics are tracking (if configured)

### 8. Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

To disable auto-deployment:
1. Go to Project Settings → Git
2. Adjust deployment settings as needed

### 9. Monitoring

Monitor your deployment:
- **Analytics**: Vercel Analytics (if enabled)
- **Logs**: Vercel Dashboard → Functions → View Logs
- **Performance**: Vercel Speed Insights

### 10. Support

If you encounter issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Project Contact: aquarioustechnology@gmail.com

---

## Quick Reference Commands

```bash
# Check Git configuration
git config --local --list

# Add all changes
git add -A

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Deploy with Vercel CLI
vercel --prod
```

## Important Notes

1. **Never commit `.env` files** - They are already in `.gitignore`
2. **Always set environment variables in Vercel Dashboard** - Don't hardcode them
3. **Test in preview environment first** - Before deploying to production
4. **Monitor build logs** - To catch issues early
5. **Keep dependencies updated** - For security and performance

---

**Last Updated**: January 21, 2026
**Maintained By**: Ankur Das (aquarioustechnology@gmail.com)
