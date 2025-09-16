require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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

// Webhook endpoint for Stripe events (optional)
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful:', session.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({received: true});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});