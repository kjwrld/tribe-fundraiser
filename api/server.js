require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: function (origin, callback) {
    // Allow any Vercel deployment URL or localhost
    if (!origin || 
        origin.includes('tribe-fundraiser') && origin.includes('vercel.app') ||
        origin.includes('localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Add security headers for Stripe
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, stripe-signature');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // CSP header to allow Stripe domains
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://r.stripe.com; " +
    "connect-src 'self' https://api.stripe.com https://r.stripe.com https://q.stripe.com; " +
    "frame-src 'self' https://js.stripe.com https://hooks.stripe.com; " +
    "img-src 'self' data: https:; " +
    "style-src 'self' 'unsafe-inline';"
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

// Create checkout session endpoint
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { amount, currency = 'usd', description = 'Donation', isRecurring = false } = req.body;

    let sessionConfig = {
      payment_method_types: ['card'],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    };

    if (isRecurring) {
      // Create recurring subscription
      sessionConfig = {
        ...sessionConfig,
        mode: 'subscription',
        line_items: [{
          price_data: {
            currency: currency,
            product_data: { 
              name: description 
            },
            unit_amount: amount * 100,
            recurring: {
              interval: 'year', // Annual billing
            },
          },
          quantity: 1,
        }],
      };
    } else {
      // Create one-time payment
      sessionConfig = {
        ...sessionConfig,
        mode: 'payment',
        line_items: [{
          price_data: {
            currency: currency,
            product_data: { 
              name: description 
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        }],
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});