# Deployment Guide - FutureMarketingAI Demo

## 🚀 Quick Start - Vercel Deployment

### Step 1: Repository Already on GitHub

✅ Your code is now on GitHub at:
https://github.com/skinclarityclub/futuremarketingai-demo

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and login
2. Click "Add New Project"
3. Import your GitHub repository: `skinclarityclub/futuremarketingai-demo`
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"
6. Wait 2-3 minutes for build to complete
7. Get your live URL!

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Link to GitHub repo
vercel link

# Deploy to production
vercel --prod
```

### Step 3: Configure Environments

#### Staging Environment
1. In Vercel Dashboard → Your Project → Settings → General
2. Add a new environment: `staging`
3. Environment Variables (if needed):
   - `VITE_API_URL`: staging API endpoint
   - Other environment-specific variables

#### Production Environment
1. Configure production environment variables
2. Enable "Production Branch" for `main`

### Step 4: Automatic Deployments

Vercel automatically configures deployments:
- **Push to `main`** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull Requests** → Preview deployment with unique URL

## 🌐 Cloudflare CDN Setup (Optional)

### Prerequisites
- Own domain (e.g., `futuremarketingai.com`)
- Cloudflare account

### Setup Steps

1. **Add Domain to Cloudflare**
   - Login to Cloudflare
   - Add site → Enter your domain
   - Update nameservers at your domain registrar

2. **Configure DNS**
   ```
   Type: CNAME
   Name: @ (or subdomain like 'demo')
   Target: cname.vercel-dns.com
   Proxy: Enabled (orange cloud)
   ```

3. **SSL/TLS Settings**
   - SSL/TLS → Overview → Full (strict)
   - Edge Certificates → Always Use HTTPS: ON

4. **Cache Rules**
   - Rules → Page Rules → Create:
     - URL: `yourdomain.com/assets/*`
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 month

5. **Vercel Domain Settings**
   - In Vercel: Settings → Domains
   - Add your custom domain
   - Vercel generates verification record
   - Add this to Cloudflare DNS

## 📋 Environment Variables

Create `.env.local` for local development:

```env
# API Configuration
VITE_API_URL=http://localhost:3000

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEMO_MODE=true
```

**In Vercel Dashboard:**
- Set environment-specific variables
- Use different values for Production vs Preview

## ✅ Verification Checklist

- [x] Git repository initialized and pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Production deployment successful
- [ ] Preview deployments work on new branches
- [ ] Environment variables configured
- [ ] Custom domain connected (optional)
- [ ] Cloudflare CDN configured (optional)
- [ ] HTTPS enabled and working
- [ ] Assets cached properly

## 🔧 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies in `package.json`
- Ensure Node.js version compatibility (20+)

### Environment Variables Not Working
- Prefix all Vite env vars with `VITE_`
- Redeploy after adding/changing env vars
- Check environment-specific settings

### Domain Not Resolving
- Verify DNS propagation (can take up to 48h)
- Check CNAME record in Cloudflare
- Verify domain is added in Vercel

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Cloudflare DNS Setup](https://developers.cloudflare.com/dns/)
