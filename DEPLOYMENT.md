# 🚀 YGBVerse Deployment Guide

## 🔧 **Local Development**

### Prerequisites
- Node.js (v18+)
- npm

### Setup
```bash
# 1. Clone and navigate to project
cd "Pledge Page Navigation Setup"

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env

# 4. Add your Stripe keys to .env
# Get from: https://dashboard.stripe.com/test/apikeys
```

### Running Locally
```bash
# Terminal 1: Start frontend (localhost:3000)
npm run dev

# Terminal 2: Start backend (localhost:3001)
npm run server:dev
```

---

## 🌐 **Production Deployment**

### Option A: GitHub Pages + Vercel (Recommended)

#### **Step 1: Deploy Backend to Vercel**
1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Add environment variables in Vercel dashboard:
   - `STRIPE_SECRET_KEY` = your live/test secret key
4. Deploy - you'll get a URL like `https://your-app.vercel.app`

#### **Step 2: Deploy Frontend to GitHub Pages**
1. Go to your GitHub repository settings
2. Enable GitHub Pages (source: GitHub Actions)
3. Add repository secrets:
   - `VITE_STRIPE_PUBLISHABLE_KEY` = your live/test publishable key
   - `VITE_API_URL` = your Vercel backend URL
4. Push to main branch - auto-deploys!

### Option B: Full Vercel Deployment
1. Deploy entire project to Vercel
2. Vercel will handle both frontend and backend
3. Add all environment variables in Vercel dashboard

---

## 🔑 **Environment Variables**

### Local Development (.env)
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### Production
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_... (for live payments)
STRIPE_SECRET_KEY=sk_live_...
VITE_API_URL=https://your-backend.vercel.app
```

---

## ✅ **Testing Payment Flow**

### Test Cards (Test Mode)
- **Card:** `4242424242424242`
- **Expiry:** Any future date
- **CVC:** Any 3 digits
- **Zip:** Any valid zip code

### Live Cards (Production)
- Use real credit card information
- All billing details must be accurate

---

## 🎯 **Payment Features**

### Recurring Subscriptions
- **Explorer:** $200/year
- **Steamer:** $600/year  
- **YGBer:** $1000/year

### One-time Donations
- Custom amounts starting from $5
- Quick amounts: $50, $100, $250

---

## 🔗 **Useful Links**

- [Stripe Dashboard](https://dashboard.stripe.com)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub Pages Guide](https://pages.github.com)

---

## 🆘 **Troubleshooting**

### "Invalid API Key" Error
- Check your `.env` file has correct Stripe keys
- Restart both servers after changing `.env`

### Success Page Not Showing
- Ensure Vite dev server restarted after config changes
- Check browser URL shows `/success?session_id=...`

### CORS Issues in Production
- Backend automatically handles CORS
- Frontend must use correct `VITE_API_URL`