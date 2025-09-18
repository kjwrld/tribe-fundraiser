require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const mailchimp = require('@mailchimp/mailchimp_marketing');

const app = express();
const PORT = process.env.PORT || 3001;

// Stripe Product and Price IDs (safe to be public)
const STRIPE_PRODUCTS = {
  ONE_TIME_GIFT: 'prod_T4fZSmo5mQHFDc',
  YGBER_120_STUDENTS: 'prod_T4fXCFGEOwW0W0',
  STEAMER_90_STUDENTS: 'prod_T4fVODlCoYgRTd',
  EXPLORER_30_STUDENTS: 'prod_T4fRnvkp4ItOxN'
};

// Product pricing (in cents)
function getProductAmount(productId) {
  const pricing = {
    'prod_T4fZSmo5mQHFDc': 0,      // One-Time Gift - $0
    'prod_T4fXCFGEOwW0W0': 100000, // YGBer ~ 120 Students - $1000/year
    'prod_T4fVODlCoYgRTd': 60000,  // Steamer ~ 90 Students - $600/year
    'prod_T4fRnvkp4ItOxN': 20000   // Explorer ~ 30 Students - $200/year
  };
  return pricing[productId] || 0;
}

// Product names
function getProductName(productId) {
  const names = {
    'prod_T4fZSmo5mQHFDc': 'One-Time Gift',
    'prod_T4fXCFGEOwW0W0': 'YGBer ~ Gift Access to 120 Students 🚀',
    'prod_T4fVODlCoYgRTd': 'Steamer ~ Gift Access to 90 Students 🎁',
    'prod_T4fRnvkp4ItOxN': 'Explorer ~ Gift Access to 30 Students 🎁'
  };
  return names[productId] || 'YGBVerse Subscription';
}

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'us6', // Extract server from API key
});

// Function to add donor to Mailchimp audience
async function addDonorToMailchimp(email, firstName = '', lastName = '', donationAmount = 0) {
  try {
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
      tags: ['crowdfunding-donor'], // Tag to trigger your automation
    });
    
    console.log(`Successfully added ${email} to Mailchimp audience`);
    return response;
  } catch (error) {
    console.error('Mailchimp error:', error.response?.body || error.message);
    console.error('Full error object:', JSON.stringify(error.response?.body || error, null, 2));
    // Don't throw error - we don't want donation to fail if email fails
    return { error: error.response?.body || error.message };
  }
}

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
    const { 
      amount, 
      currency = 'usd', 
      description = 'Donation', 
      isRecurring = false,
      productId // New: Stripe product ID for predefined products
    } = req.body;

    let sessionConfig = {
      payment_method_types: ['card'],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/#crowdfunding`,
    };

    if (productId) {
      console.log(`Creating checkout for product ${productId}`);

      // Handle One-Time Gift with custom amount
      if (productId === 'prod_T4fZSmo5mQHFDc') {
        const customAmount = amount || 25; // Default to $25 if no amount specified
        sessionConfig = {
          ...sessionConfig,
          mode: 'payment', // One-time payment for gifts
          line_items: [{
            price_data: {
              currency: 'usd',
              product_data: {
                name: getProductName(productId),
              },
              unit_amount: customAmount * 100, // Convert to cents
            },
            quantity: 1,
          }],
        };
      } else {
        // Handle subscription products with fixed pricing
        sessionConfig = {
          ...sessionConfig,
          mode: 'subscription',
          line_items: [{
            price_data: {
              currency: 'usd',
              product_data: {
                name: getProductName(productId),
              },
              recurring: {
                interval: 'year',
              },
              unit_amount: getProductAmount(productId),
            },
            quantity: 1,
          }],
        };
      }
    } else if (isRecurring) {
      // Create recurring subscription with custom amount
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
      // Create one-time payment with custom amount
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

    // Create checkout session - use connected account if productId is specified
    const sessionOptions = productId ? {
      stripeAccount: process.env.STRIPE_CONNECT_ACCOUNT_ID
    } : {};
    
    const session = await stripe.checkout.sessions.create(sessionConfig, sessionOptions);
    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verify payment and add to Mailchimp
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { session_id } = req.body;
    
    if (!session_id) {
      return res.status(400).json({ error: 'Session ID required' });
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    if (session.payment_status === 'paid') {
      // Get customer details
      const customer = await stripe.customers.retrieve(session.customer);
      
      // Add to Mailchimp if we have customer email
      if (customer.email) {
        await addDonorToMailchimp(
          customer.email,
          customer.name?.split(' ')[0] || '', // First name
          customer.name?.split(' ').slice(1).join(' ') || '', // Last name
          session.amount_total / 100 // Convert from cents
        );
      }
      
      res.json({ 
        success: true, 
        customer_email: customer.email,
        amount: session.amount_total / 100
      });
    } else {
      res.json({ success: false, message: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ error: error.message });
  }
});

// Test endpoint for Mailchimp integration - with env vars
app.post('/api/test-mailchimp', async (req, res) => {
  try {
    console.log('Testing Mailchimp integration with mock data...');
    
    // Mock data that would typically come from Stripe checkout - using realistic emails
    const mockData = [
      {
        email: 'john.explorer@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
        donationAmount: 200,
        tier: 'Explorer'
      },
      {
        email: 'jane.steamer@gmail.com', 
        firstName: 'Jane',
        lastName: 'Smith',
        donationAmount: 600,
        tier: 'Steamer'
      },
      {
        email: 'bob.ygber@gmail.com',
        firstName: 'Bob',
        lastName: 'Johnson',
        donationAmount: 1000,
        tier: 'YGBer'
      },
      {
        email: 'alice.onetime@gmail.com',
        firstName: 'Alice',
        lastName: 'Wilson',
        donationAmount: 75,
        tier: 'One-Time Gift'
      }
    ];

    const results = [];
    
    for (const data of mockData) {
      console.log(`Testing Mailchimp for ${data.email} - ${data.tier} ($${data.donationAmount})`);
      
      const result = await addDonorToMailchimp(
        data.email,
        data.firstName,
        data.lastName,
        data.donationAmount
      );
      
      results.push({
        email: data.email,
        tier: data.tier,
        amount: data.donationAmount,
        success: result !== null && !result.error,
        result: result
      });
    }
    
    res.json({
      success: true,
      message: 'Mailchimp test completed',
      results: results,
      mailchimp_config: {
        audience_id: process.env.MAILCHIMP_AUDIENCE_ID,
        api_key_server: process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'unknown'
      }
    });
    
  } catch (error) {
    console.error('Mailchimp test error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      mailchimp_config: {
        audience_id: process.env.MAILCHIMP_AUDIENCE_ID,
        api_key_server: process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'unknown'
      }
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});