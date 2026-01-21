# 🚀 VERCEL DEPLOYMENT INSTRUCTIONS

## ⚠️ IMPORTANT: Environment Variable Configuration

### Your Resend API Key:
```
re_Su9RcyBy_84HYyA1rBRnf1GEy7vq83eqh
```

### Recipient Email:
```
aquariousleads@gmail.com
```

---

## 📋 Step-by-Step Deployment Process

### Step 1: Push Code to GitHub (You'll do this manually)

```bash
git add -A
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Deploy on Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select repository: `aquarioustechnology-alt/Aquarious-Middleeast-landing`
   - Click "Import"

3. **Configure Build Settings** (Should be auto-detected):
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **⚠️ CRITICAL - Add Environment Variable**:
   
   **Before clicking Deploy**, scroll down to "Environment Variables" section:
   
   - Click "Add" or expand the Environment Variables section
   - Add the following:
     ```
     Name: RESEND_API_KEY
     Value: re_Su9RcyBy_84HYyA1rBRnf1GEy7vq83eqh
     ```
   - Select all environments: ✅ Production, ✅ Preview, ✅ Development
   - Click "Add"

5. **Deploy**:
   - Click "Deploy" button
   - Wait 2-3 minutes for build to complete

---

## 🔧 Alternative: Add Environment Variable After Deployment

If you already deployed without the environment variable:

1. Go to your project in Vercel
2. Click **Settings** → **Environment Variables**
3. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_Su9RcyBy_84HYyA1rBRnf1GEy7vq83eqh`
   - **Environments**: Production, Preview, Development
4. Click **Save**
5. Go to **Deployments** tab
6. Click the three dots (•••) on the latest deployment
7. Click **Redeploy**

---

## ✅ Post-Deployment Checklist

After deployment completes:

- [ ] Visit your live URL (e.g., `your-project.vercel.app`)
- [ ] Test the contact form
- [ ] Test the newsletter subscription
- [ ] Check if emails arrive at `aquariousleads@gmail.com`
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Test all navigation links

---

## 📧 Email Configuration Details

- **API Provider**: Resend
- **API Key**: `re_Su9RcyBy_84HYyA1rBRnf1GEy7vq83eqh`
- **From Address**: `noreply@usa.theaquarious.com`
- **Recipient Email**: `aquariousleads@gmail.com`
- **Contact Form**: Sends to `aquariousleads@gmail.com`
- **Newsletter**: Sends to `aquariousleads@gmail.com`

---

## 🐛 Troubleshooting

### Issue: "Environment Variable references Secret which does not exist"
**Solution**: This error occurs if you try to deploy without adding the environment variable. Simply add the `RESEND_API_KEY` in Vercel dashboard as shown above.

### Issue: Build Fails
**Solution**: 
- Check build logs for specific errors
- Ensure all dependencies are in `package.json`
- TypeScript and ESLint errors are already configured to be ignored

### Issue: Emails Not Sending
**Solution**:
- Verify `RESEND_API_KEY` is correctly set in Vercel
- Check Resend dashboard for API key status
- Check Vercel function logs for errors

### Issue: Images Not Loading
**Solution**:
- Ensure all images are in the `public` folder
- Check image paths in components
- Vercel automatically optimizes images

---

## 📞 Support

- **Project Contact**: aquarioustechnology@gmail.com
- **Vercel Docs**: https://vercel.com/docs
- **Resend Docs**: https://resend.com/docs

---

## 🎯 Quick Reference

### Environment Variable (Copy-Paste Ready):
```
RESEND_API_KEY=re_Su9RcyBy_84HYyA1rBRnf1GEy7vq83eqh
```

### Git Commands:
```bash
git add -A
git commit -m "Ready for Vercel deployment"
git push origin main
```

---

**Last Updated**: January 21, 2026
**Project**: Aquarious Middle East Landing Page
**Repository**: https://github.com/aquarioustechnology-alt/Aquarious-Middleeast-landing
