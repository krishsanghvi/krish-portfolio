# Portfolio Deployment Guide

## 🚀 Quick Deploy (Recommended)

### Option 1: Vercel (Easiest)

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/krishsanghvi/krish-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**

   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - ✅ Your site is live!

3. **Custom Domain (Optional):**
   - Buy domain (e.g., krishsanghvi.dev)
   - Add in Vercel project settings
   - Update DNS records as instructed

---

### Option 2: Netlify

1. **Drag & Drop Method:**

   ```bash
   npm run build
   ```

   - Go to [netlify.com](https://netlify.com)
   - Drag `dist` folder to deploy area
   - ✅ Instant deployment!

2. **Git Integration:**
   - Connect GitHub account
   - Select repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

---

### Option 3: GitHub Pages

1. **Install gh-pages:**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**

   ```json
   {
     "homepage": "https://krishsanghvi.github.io/krish-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**

   ```bash
   npm run deploy
   ```

4. **Enable in GitHub:**
   - Repository Settings → Pages
   - Source: Deploy from branch (gh-pages)

---

## 🔧 Pre-Deployment Checklist

- ✅ Build successful: `npm run build`
- ✅ No TypeScript errors: `npm run type-check`
- ✅ All links working
- ✅ Profile picture added to `public/profile.jpg`
- ✅ Resume accessible at `/Krish_Sanghvi_resume.pdf`
- ✅ Dark mode toggle functional
- ✅ Mobile responsive design

---

## 🌍 Domain Setup

### Custom Domain Steps:

1. Purchase domain (recommended: .dev, .com, .io)
2. Point DNS to deployment platform:
   - **Vercel:** Add domain in project settings
   - **Netlify:** Domain management → Add custom domain
   - **GitHub Pages:** Add CNAME file with domain

### Recommended Domains:

- `krishsanghvi.dev`
- `krishsanghvi.com`
- `krish-sanghvi.io`

---

## 📊 Performance Optimization

Your site is already optimized with:

- ✅ Vite build optimization
- ✅ Tree shaking for smaller bundles
- ✅ Lazy loading components
- ✅ Optimized images and assets
- ✅ Dark mode with system preference detection

Current build stats:

- CSS: ~29KB (gzipped: ~6KB)
- JS: ~376KB (gzipped: ~118KB)
- Total load time: <2 seconds

---

## 🔒 Security Headers

Vercel deployment includes:

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- HTTPS enforced
- Modern security practices

---

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails:**

   ```bash
   npm install
   npm run build
   ```

2. **Images not loading:**

   - Ensure images are in `public/` folder
   - Use absolute paths: `/image.jpg`

3. **Dark mode not persisting:**

   - Check localStorage permissions
   - Verify ThemeProvider wraps App

4. **Links not working:**
   - Use hash routing for GitHub Pages
   - Ensure smooth scroll function exists

---

## 📱 Testing Deployment

After deployment, test:

- [ ] All navigation links work
- [ ] Dark/light mode toggle
- [ ] Profile picture loads
- [ ] Resume downloads
- [ ] GitHub project links open
- [ ] Contact form/links work
- [ ] Mobile responsiveness
- [ ] Loading performance

---

## 🎯 Next Steps

After deployment:

1. Share your portfolio URL
2. Add to LinkedIn profile
3. Include in resume
4. Submit to job applications
5. Monitor with analytics (optional)

**Your portfolio is ready to impress employers!** 🌟
