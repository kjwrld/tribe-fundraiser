# Stripe Integration Setup

## 🎯 Current Implementation

The donation functionality has been integrated with Stripe! Here's what's ready:

### ✅ **Completed:**
- ✅ Installed Stripe dependencies (`@stripe/stripe-js`, `@stripe/react-stripe-js`, `stripe`)
- ✅ Created `StripeProvider.tsx` component
- ✅ Created `DonationCheckout.tsx` component
- ✅ Updated "Make Impact" button to use Stripe donations
- ✅ Added loading states and error handling
- ✅ Logo spacing adjustment (`mt-1`)

### ⚙️ **To Complete Setup:**

#### 1. **Get Stripe Keys**
1. Create account at [stripe.com](https://stripe.com)
2. Get your **Publishable Key** from Dashboard → Developers → API Keys
3. Get your **Secret Key** (keep this secure!)

#### 2. **Update Publishable Key**
Replace the placeholder in these files:
- `src/components/StripeProvider.tsx` (line 6)
- `src/components/DonationCheckout.tsx` (line 16)

```typescript
// Replace this:
const stripePromise = loadStripe('pk_test_51XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

// With your actual key:
const stripePromise = loadStripe('pk_test_your_actual_publishable_key_here');
```

#### 3. **Create Backend API Route**
Create `/api/create-checkout-session` endpoint that:
- Accepts amount, currency, success_url, cancel_url
- Uses your Stripe Secret Key
- Returns session ID

#### 4. **Test the Integration**
- Use Stripe test card: `4242 4242 4242 4242`
- Any future date for expiry
- Any 3 digits for CVC

### 🎉 **Current Features:**
- Dynamic donation amounts (drag to change on mobile)
- Stripe Checkout integration
- Loading states ("Processing...")
- Error handling with user feedback
- Success/cancel URL handling

The "Make Impact" button now redirects directly to Stripe Checkout! 🚀